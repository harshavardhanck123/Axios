import React from "react";
import "./Deleteuser.css";

const DeleteUser = ({ userId, onConfirm, onCancel }) => {
  return (
    <div className="delete-container">
      <div className="card mt-5 delete-card">
        <div className="card-body text-center">
          <h5 className="card-title">Confirm Deletion</h5>
          <p>Are you sure you want to delete the user with ID: {userId}?</p>
          <div className="button-group">
            <button
              className="btn btn-danger mx-2 delete-button"
              onClick={() => onConfirm(userId)}
            >
              Confirm
            </button>
            <button
              className="btn btn-secondary mx-2 cancel-button"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
