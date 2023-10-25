import React from "react";

const LeftContainer = ({ searchResults, onAddToRight, onRemoveFromLeft }) => {
  return (
    <div>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>
            <div className="track-container">
              <div track-row>
                <span className="track-name">{result.name}</span>
                <button
                  onClick={() => onRemoveFromLeft(result)}
                  className="remove-button"
                >
                  X
                </button>
                <button
                  onClick={() => onAddToRight(result)}
                  className="move-right-button"
                >
                  Move to Right
                </button>
              </div>
              <div className="track-row">
                <span className="track-artist">
                  {result["artists"][0].name}
                </span>
              </div>
              <div className="track-row">
                <span className="track-album">{result["album"].name}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftContainer;
