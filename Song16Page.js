import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Song16Page.css'; // Replace with the actual path to your CSS file


function Song16Page() {
  const { songId } = useParams(); // Get the song ID from the route parameter

  const [songDetails, setSongDetails] = useState({
    title: '',
    artist: '',
    album: '',
    genre: '',
    language: '',
    filePath: '',
    averageRating: 0,
    totalRatings: 0,
  });

  useEffect(() => {
    // Fetch song details from the song API using the songId from route parameter
    fetch(`https://localhost:7220/api/Song/get/${songId}`)
      .then((response) => response.json())
      .then((data) => {
        // Update songDetails state with song API data
        setSongDetails({
          title: data.title,
          artist: data.artist,
          album: data.album,
          genre: data.genre,
          language: data.language,
          filePath: data.filePath,
          averageRating: data.averageRating,
          totalRatings: data.totalRatings,
        });
      })
      .catch((error) => console.error('Error fetching data from the song API:', error));
  }, [songId]); // Make sure to include songId in the dependency array

  return (
    <div className="song-details">
      <h2 className="white-text">{songDetails.title}</h2>
      {/* Render song details here */}
      <div className="white-text">Title: {songDetails.title}</div>
      <div className="white-text">Artist: {songDetails.artist}</div>
      <div className="white-text">Album: {songDetails.album}</div>
      <div className="white-text">Genre: {songDetails.genre}</div>
      <div className="white-text">Language: {songDetails.language}</div>
      <div className="white-text">File Path: {songDetails.filePath}</div>
      <div className="white-text">Average Rating: {songDetails.averageRating}</div>
      <div className="white-text">Total Ratings: {songDetails.totalRatings}</div>
      {/* Add more details as needed */}
    </div>
  );  
}

export default Song16Page;
