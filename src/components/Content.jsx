import axios from "axios";
import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import EditUser from "./Edituser";
import DeleteUser from "./Deleteuser";
import "./Read.css";

export async function loader({ params: { id } }) {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  return data;
}

const Content = () => {
  const { id } = useParams();
  const userData = useLoaderData();

  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [user, setUser] = useState({ ...userData });

  const handleSave = (editedUser) => {
    alert(`Changes saved: ${JSON.stringify(editedUser, null, 2)}`);
    setUser(editedUser);
    setIsEditing(false);
  };

  const handleDelete = (userId) => {
    alert(`User is deleted with ID: ${userId}`);
    // In real-world application, make an API call to delete the user
    // await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);

    setIsDeleting(false);
  };

  const handleCancelDelete = () => setIsDeleting(false);

  if (isEditing) {
    return <EditUser user={user} onSave={handleSave} onCancel={() => setIsEditing(false)} />;
  }

  if (isDeleting) {
    return <DeleteUser userId={id} onConfirm={handleDelete} onCancel={handleCancelDelete} />;
  }


  return (
    <div className="content-container">
      <div className="card mt-5 content-card">
        <div className="card-body text-center">
          <h5 className="card-title">{user.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Username: {user.username}</h6>
          <p className="card-text"><strong>Email:</strong> {user.email}</p>
          <p className="card-text"><strong>Phone:</strong> {user.phone}</p>
          <p className="card-text"><strong>Website:</strong> {user.website}</p>
          <a
            href={`https://www.google.com/maps/place/${user.address.geo.lat},${user.address.geo.lng}`}
            className="card-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Location
          </a>
          <a href={`mailto:${user.email}`} className="card-link">
            Send Email
          </a>
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-primary mx-2 edit-button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button className="btn btn-danger mx-2 delete-button" onClick={() => setIsDeleting(true)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
