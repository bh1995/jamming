import React from "react";

const LeftContainer = ({ searchResults, onAddToRight, onRemoveFromLeft }) => {
  return (
    <div>
      <ul className="track-list">
        {searchResults.map((result) => (
          <div className="track-container">
            <li key={result.id}>
              <div className="track-row">
                Track: <span className="track-name">{result.name}</span>
              </div>
              <div className="track-row">
                Artist:
                <span className="track-artist">
                  { result["artists"][0].name}
                </span>
              </div>
              <div className="track-row">
                Album:
                <span className="track-album">{result["album"].name}</span>
              </div>
              <div className="track-row">
                <button
                  onClick={() => onAddToRight(result)}
                  className="move-right-button"
                >
                  Move to Right
                </button>
              </div>
              <div className="track-row">
                <button
                  onClick={() => onRemoveFromLeft(result)}
                  className="remove-button"
                >
                  X
                </button>
              </div>
            </li>
            <br></br>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default LeftContainer;
