import React, { useState } from "react";
import './Add.css'; // Import the CSS file for styling

function Add() {
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

    // Create an object to represent the song data
    const songData = {
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
      const response = await fetch("https://localhost:7220/api/Song/Add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(songData),
      });

      if (response.ok) {
        const responseData = await response.json();
        // Handle the success case (e.g., display a success message)
        console.log("Song added successfully:", responseData);
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
        // Handle the error case (e.g., display an error message)
        console.error("Error adding song:", response.statusText);
      }
    } catch (error) {
      // Handle any network or other errors
      console.error("Error adding song:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>ADD NEW SONG</h2>
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
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Add;
