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
        {/* {searchResults.map((result) => (
          <div key={result.id} className="list-item">
            <span>{result.name}</span> <br></br>
            <span>{result["artists"][0].name}</span> <br></br>
            <span>{result["album"].name}</span> <br></br>
            <button onClick={() => onAddToRight(result)}>Move to Right</button>
            <button
              onClick={() => onRemoveFromLeft(result)}
              className="remove-button"
            >
              X
            </button>
          </div>
        ))} */}
      </ul>
    </div>
  );
};

export default LeftContainer;
