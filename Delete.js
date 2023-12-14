import React, { useState } from "react";
import "./Delete.css";

function Delete() {
  const [songId, setSongId] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://localhost:7220/api/Song/delete/${songId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 204) {
        // The song was successfully deleted (status code 204 No Content)
        console.log("Song deleted successfully");
        // Reset the form field
        setSongId("");
      } else if (response.status === 404) {
        // The song with the specified ID was not found (status code 404 Not Found)
        console.error("Song not found");
      } else {
        // Handle other response statuses as needed
        console.error("Error deleting song:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting song:", error);
    }
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
