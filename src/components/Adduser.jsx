import React, { useState } from "react";
import axios from "axios";
import "./Adduser.css";

const AddUser = ({ updateUserList }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/users", {
        name,
        username,
        email,
        phone,
        website,
      });
      alert(
        `User added successfully:
        Name: ${response.data.name}
        Username: ${response.data.username}
        Email: ${response.data.email}
        Phone: ${response.data.phone}
        Website: ${response.data.website}
        ID: ${response.data.id}`
      );

      updateUserList(response.data);

     
      setName("");
      setUsername("");
      setEmail("");
      setPhone("");
      setWebsite("");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  
  return (
    <div className="add-container">
      <div className="card mt-5 add-card">
        <div className="card-body">
          <h5 className="card-title">Add User</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                name="username"
                id="username"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="website">Website:</label>
              <input
                type="text"
                name="website"
                id="website"
                className="form-control"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
            <div className="button-group">
              <button type="submit" className="btn btn-primary mx-2 submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
