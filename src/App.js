import React, { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import "./SearchResults";
import "./Playlist";
import Header from "./Header";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

function App() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [rightContainer, setRightContainer] = useState([]);

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

  const handleAddToRight = (result) => {
    setRightContainer([...rightContainer, result]);
    setSearchResults(searchResults.filter((r) => r.id !== result.id));
  };

  const handleRemoveFromLeft = (result) => {
    setSearchResults(searchResults.filter((r) => r.id !== result.id));
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
          <LeftContainer
            searchResults={searchResults}
            onAddToRight={handleAddToRight}
            onRemoveFromLeft={handleRemoveFromLeft}
          />
        </div>
        <div className="right-container">
          Right Container
          <RightContainer rightContainer={rightContainer} />
        </div>
      </div>
    </div>
  );
}

export default App;
