import React, { useState } from "react";
import './Update.css'; // Import the CSS file for styling

function Update() {
  const [songId, setSongId] = useState('');
  const [songTitle, setSongTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [language, setLanguage] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [totalRatings, setTotalRatings] = useState('');
  const [filePath, setFilePath] = useState(''); // Add FilePath state variable

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object to represent the updated song data
    const updatedSongData = {
      Title: songTitle,
      Artist: artist,
      Album: album,
      Language: language,
      Genre: genre,
      AverageRating: rating,
      TotalRatings: totalRatings,
      FilePath: filePath, // Include the FilePath property here
    };

    try {
      const response = await fetch(`https://localhost:7220/api/Song/Update/${songId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedSongData),
      });

      if (response.ok) {
        if (response.status === 204) {
          // Handle a successful update with no JSON response
          console.log("Song updated successfully (no JSON response)");
        } else {
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            const responseData = await response.json();
            console.log("Song updated successfully:", responseData);
          }
        }

        // Reset the form fields
        setSongId("");
        setSongTitle("");
        setArtist("");
        setAlbum("");
        setLanguage("");
        setGenre("");
        setRating("");
        setTotalRatings("");
        setFilePath(""); // Reset the FilePath field if needed
      } else {
        console.error("Error updating song:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating song:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>UPDATE SONG</h2>
      <form onSubmit={handleSubmit} className="form-content">
        <div className="form-group">
          <label>Song ID:</label>
          <input type="text" value={songId} onChange={(e) => setSongId(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Song Title:</label>
          <input type="text" value={songTitle} onChange={(e) => setSongTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Artist:</label>
          <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Album:</label>
          <input type="text" value={album} onChange={(e) => setAlbum(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Language:</label>
          <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Genre:</label>
          <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Rating:</label>
          <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Total Ratings:</label>
          <input type="text" value={totalRatings} onChange={(e) => setTotalRatings(e.target.value)} />
        </div>
        <div className="form-group">
          <label>File Path:</label>
          <input type="text" value={filePath} onChange={(e) => setFilePath(e.target.value)} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Update;
