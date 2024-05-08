import React, { useState } from "react";
import "./Edituser.css";

const EditUser = ({ user, onSave, onCancel }) => {
  const [editedUser, setEditedUser] = useState({ ...user });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedUser);
  };

  return (
    <div className="edit-container">
      <div className="card mt-5 edit-card">
        <div className="card-body">
          <h5 className="card-title">Edit User Details</h5>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                value={editedUser.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                name="username"
                id="username"
                className="form-control"
                value={editedUser.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                value={editedUser.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="form-control"
                value={editedUser.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="website">Website:</label>
              <input
                type="text"
                name="website"
                id="website"
                className="form-control"
                value={editedUser.website}
                onChange={handleInputChange}
              />
            </div>
            <div className="button-group">
              <button type="button" className="btn btn-success mx-2 save-button" onClick={handleSave}>
                Save
              </button>
              <button type="button" className="btn btn-secondary mx-2 cancel-button" onClick={onCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
