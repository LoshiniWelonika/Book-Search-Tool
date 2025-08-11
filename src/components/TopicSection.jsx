import { useState } from "react";
import Card from "./Card";
import "../css/TopicSection.css";
import axios from "axios";

function TopicSection() {
  const [search,setSearch] = useState(""); 
  const [bookData, setData] = useState([]);

  const searchBook = (evt) => {
    if (evt.key === "Enter"){
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCjD-mIjzogMxJbkt98F92ffr1l2vzaP14'+'&maxResults=40')
      .then(res => setData(res.data.items))
      .catch(err => console.log(err))
    }
  };

  return (
    <div className="topic-section">
      <main className="main-content">
        <div className="hero-section">
          <div className="hero-text">
            <h1 className="hero-title">
              Find the Right Book<br />
              <span className="hero-subtitle">Right Now</span>
            </h1>
            <p className="hero-description">
              Discover your next great read with our smart book search platform.
              Whether you're looking for bestsellers, hidden gems, or academic
              references, our site helps you explore millions of books quickly and
              easily. Powered by the Google Books API, you can search by title,
              author, genre, or keyword—anytime, anywhere.
            </p>
            <button className="cta-button">MORE INFO</button>
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1754545273">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
              82.39-16.72,168.19-17.73,250.45-.39C823.78,31,
              906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,
              214.34,3V0H0V27.35A600.21,600.21,0,0,0,
              321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Enter the book name ..."
              value={search}
              onChange={e => setSearch(e.target.value)} 
              onKeyPress={searchBook}
            />
            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </main>

      <div className="container">
          {
            <Card books={bookData} />
          }
      </div>
    </div>
    
  );
}

export default TopicSection;
