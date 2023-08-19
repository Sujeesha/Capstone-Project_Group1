import React, { useState } from "react";
import "./Update.css"; // Import your CSS for styling

function Update() {
  const [songId, setSongId] = useState("");
  const [songTitle, setSongTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [language, setLanguage] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional actions with the form data here,
    // like sending it to a server or updating your app's state.
    console.log({
      songId,
      songTitle,
      artist,
      language,
      genre,
    });

    // Reset the form fields
    setSongId("");
    setSongTitle("");
    setArtist("");
    setLanguage("");
    setGenre("");
  };

  return (
    <div className="form-container">
      <h2>UPDATE SONG</h2>
      <form onSubmit={handleSubmit} className="form-content">
        <div className="form-group">
          <label>Song ID:</label>
          <input
            type="text"
            value={songId}
            onChange={(e) => setSongId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Song Title:</label>
          <input
            type="text"
            value={songTitle}
            onChange={(e) => setSongTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Artist:</label>
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Language:</label>
          <input
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Genre:</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Update;
