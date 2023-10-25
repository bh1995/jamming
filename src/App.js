import React, { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import PlaylistBar from "./PlaylistBar";
import Header from "./Header";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import { searchTracks, createPlaylist } from "./fetchWebApi";
import createToken from "./createToken";

function App() {
  const [searchText, setSearchText] = useState("");
  const [playlistText, setPlaylistText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [token, setToken] = useState("iamatoken");
  const [trackList, setTrackList] = useState([
    {
      album: {
        album_type: "single",
        artists: [
          {
            external_urls: {
              spotify: "",
            },
            href: "",
            id: "",
            name: "",
          },
        ],
        name: "",
      },
      artists: [{ name: "" }],
      id: "",
      name: "",
    },
  ]);

  // Callback function to update the search text state
  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  // Callback function to update the search text state
  const handlePlaylistTextChange = (text) => {
    setPlaylistText(text);
  };

  const handleSearchClick = async () => {
    // console.log(searchText)
    // console.log(token)
    const results = await searchTracks(token, searchText);
    const resultsTracks = results["tracks"].items;

    setSearchResults(resultsTracks);
  };

  const handleAddToRight = (result) => {
    // get the id which to move, and then add that the current array
    const toAdd = searchResults.filter((r) => r.id === result.id)[0];
    setTrackList((prev) => [toAdd, ...prev]);
    // set state to entire current searchResults array except id which is being moved
    setSearchResults(searchResults.filter((r) => r.id !== result.id));
  };

  const handleRemoveFromLeft = (result) => {
    setSearchResults(searchResults.filter((r) => r.id !== result.id));
  };

  const handleRemoveFromRight = (result) => {
    setTrackList(trackList.filter((r) => r.id !== result.id));
  };

  const handleCreatePlaylistClick = () => {
    // create playlist from contents of trackList via api
    console.log("playlist created");
    createPlaylist(token, trackList, playlistText);
  };

  const handlAuthenticatation = () => {
    // create auth token
    const tokenPromise = createToken();
    // set state with tokenpromise
    tokenPromise.then((accessToken) => {
      if (accessToken.length > 20) {
        console.log("token created") 
      } else {
        console.log("token NOT created") 
      }
      setToken(accessToken);
    })
  }

  return (
    <div className="app">
      <Header onAuthenticate={handlAuthenticatation} />
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
          <div className="play-list-bar">
            <PlaylistBar
              playlistText={playlistText}
              handlePlaylistTextChange={handlePlaylistTextChange}
              handleCreatePlaylistClick={handleCreatePlaylistClick}
            />
          </div>
          <RightContainer
            trackList={trackList}
            onRemoveFromRight={handleRemoveFromRight}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
