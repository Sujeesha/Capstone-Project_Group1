import React, { useState } from "react";
import "./Delete.css"; // Import the CSS file for styling

function Delete() {
  const [songId, setSongId] = useState("");

  const handleDelete = (e) => {
    e.preventDefault();
    // You can perform additional actions for deletion here,
    // like sending a delete request to a server.
    console.log("Song to delete (by ID):", songId);

    // Reset the form field
    setSongId("");
  };

  return (
    <div className="delete-container">
      <h2>SONG TO DELETE</h2>
      <form onSubmit={handleDelete} className="delete-form">
        <div className="form-group">
          <label>SONG ID:</label>
          <input
            type="text"
            value={songId}
            onChange={(e) => setSongId(e.target.value)}
          />
        </div>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}

export default Delete;
