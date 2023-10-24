import React from "react";

const RightContainer = ({ trackList, onRemoveFromRight }) => {
  return (
    <div className="list-continer">
      <ul>
        {trackList.map((result) => (
          <div key={result.id} className="list-item">
            <span>{result.name}</span> <br></br>
            <span>{result["artists"][0].name}</span> <br></br>
            <span>{result["album"].name}</span> <br></br>
            <button
              onClick={() => onRemoveFromRight(result)}
              className="remove-button"
            >
              X
            </button>
            </div>
        ))}
      </ul>
    </div>
  );
};

export default RightContainer;
