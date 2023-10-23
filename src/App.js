import React, { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import "./SearchResults";
import "./Playlist";
import Header from "./Header";
import LeftContainer from "./LeftContainer";

function App() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Callback function to update the search text state
  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  const handleSearchClick = () => {
    // Hardcoded search results. Object data: name, artist, album, id
    const results = [
      { name: "song1", artist: "artist1", album: "album1", id: 1 },
      { name: "song2", artist: "artist2", album: "album2", id: 2 },
      { name: "song3", artist: "artist3", album: "album3", id: 3 },
    ];
    setSearchResults(results);
  };

  return (
    <div className="app">
      <Header />
      <div className="search-bar">
        <SearchBar
          searchText={searchText}
          handleSearchChange={handleSearchChange}
          handleSearchClick={handleSearchClick}
        />
      </div>
      <div className="container">
        <div className="left-container">
          Left Container
          <LeftContainer searchResults={searchResults} />
        </div>
        <div className="right-container">Right Container</div>
      </div>
    </div>
  );
}

export default App;
