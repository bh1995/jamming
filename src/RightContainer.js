import React from "react";

const RightContainer = ({ trackList, onRemoveFromRight }) => {
  return (
    <div>
      <ul className="track-list">
        {trackList.map((result) => (
          <div className="track-container">
            <li key={result.id}>
              <div className="track-row">
                Track: <span className="track-name ">{result.name}</span>
              </div>
              <div className="track-row">
                Artist:{" "}
                <span className="track-artist">
                  {result["artists"][0].name}
                </span>
              </div>
              <div className="track-row">
                Album:{" "}
                <span className="track-album">{result["album"].name}</span>
              </div>
              <div className="track-row">
                <button
                  onClick={() => onRemoveFromRight(result)}
                  className="remove-button"
                >
                  X
                </button>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RightContainer;
