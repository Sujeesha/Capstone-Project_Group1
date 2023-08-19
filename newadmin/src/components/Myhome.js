import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import img from '../Images/musicplayer.jpg';
import './Myhome.css';

function Myhome() {
  return (
    <div className='card-container'>
      <div className='card-row'>
        <div className="product-card">
          <Link to="/song-1-page">
            <img src={img} alt="Product 1" />
          </Link>
          <div className="title-container">
      <span className="song-text">Song 1</span>
    </div>
        </div>
        <div className="product-card">
          <Link to="/song-2-page">
            <img src={img} alt="Product 2" />
          </Link>
          <div className="title-container">
      <span className="song-text">Song 2</span>
    </div>
        </div>
        <div className="product-card">
          <Link to="/song-3-page">
            <img src={img} alt="Product 3" />
          </Link>
          <div className="title-container">
      <span className="song-text">Song 3</span>
    </div>
        </div>
        <div className="product-card">
          <Link to="/song-4-page">
            <img src={img} alt="Product 4" />
          </Link>
          <div className="title-container">
      <span className="song-text">Song 4</span>
    </div>
        </div>
      </div>
      
      <h2 className="section-heading">Top Hits</h2>
      <div className='card-row'>
        <div className="product-card">
          <Link to="/song-5-page">
            <img src={img} alt="Product 5" />
          </Link>
          <div className="title-container">
      <span className="song-text">Song 5</span>
    </div>
        </div>
        <div className="product-card">
          <Link to="/song-6-page">
            <img src={img} alt="Product 6" />
          </Link>
          <div className="title-container">
      <span className="song-text">Song 6</span>
    </div>
        </div>
        <div className="product-card">
          <Link to="/song-7-page">
            <img src={img} alt="Product 7" />
          </Link>
          <div className="title-container">
      <span className="song-text">Song 7</span>
    </div>
        </div>
        <div className="product-card">
          <Link to="/song-8-page">
            <img src={img} alt="Product 8" />
          </Link>
          <div className="title-container">
      <span className="song-text">Song 8</span>
    </div>
        </div>
      </div>
      
      <h2 className="section-heading">By Singers</h2>
      <div className='card-row'>
        <div className="product-card">
          <Link to="/song-9-page">
            <img src={img} alt="Product 9" />
          </Link>
          <div className="title-container">
      <span className="song-text">Song 9</span>
    </div>
        </div>
        <div className="product-card">
          <Link to="/song-10-page">
            <img src={img} alt="Product 10" />
          </Link>
          <div className="title-container">
      <span className="song-text">Song 10</span>
    </div>
        </div>
        <div className="product-card">
          <Link to="/song-11-page">
            <img src={img} alt="Product 11" />
          </Link>
          <div className="title-container">
      <span className="song-text">Song 11</span>
    </div>
        </div>
        <div className="product-card">
          <Link to="/song-12-page">
            <img src={img} alt="Product 12" />
          </Link>
          <div className="title-container">
      <span className="song-text">Song 12</span>
    </div>
        </div>
      </div>
      
      <h2 className="section-heading">By Genre</h2>
      <div className='card-row'>
        <div className="product-card">
          <Link to="/song-13-page">
            <img src={img} alt="Product 13" />
          </Link>
          <div className="title-container">
      <span className="song-text">Song 13</span>
    </div>
        </div>
        <div className="product-card">
          <Link to="/song-14-page">
            <img src={img} alt="Product 14" />
          </Link>
          <div className="title-container">
      <span className="song-text">Song 14</span>
    </div>
        </div>
        <div className="product-card">
          <Link to="/song-15-page">
            <img src={img} alt="Product 15" />
          </Link>
          <div className="title-container">
      <span className="song-text">Song 15</span>
    </div>
        </div>
        <div className="product-card">
  <Link to="/song-16-page">
    <img src={img} alt="Product 16" />
  </Link>
  <div className="title-container">
      <span className="song-text">Song 16 </span>
    </div>
</div>

       
      </div>
    </div>
  );
}

export default Myhome;
