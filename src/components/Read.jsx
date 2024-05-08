import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Read.css";

const Read = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="read-container">
      <h2 className="text-center my-4">User List</h2>
      <ul className="list-group custom-list">
        {users.map((user) => (
          <li key={user.id} className="list-group-item custom-list-item">
            <Link to={`/users/${user.id}`} className="custom-link">
              <strong>User:</strong> {user.name} (ID: {user.id})
            </Link>
          </li>
        ))}
      </ul>
      <div className="text-center mt-4">
        <Link to="/add" className="btn btn-primary add-button">
          Add New User
        </Link>
      </div>
    </div>
  );
};

export default Read;
