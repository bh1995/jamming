import React from "react";

const RightContainer = ({trackList}) => {
  return (
    <div>
        <ul>
          {trackList.map((result) => (
            <div key={result.id} className="track-list">
              <span>{result.name}</span> <br></br>
              <span>{result["artists"][0].name}</span> <br></br>
              <span>{result["album"].name}</span> <br></br>
            </div>
          ))}
        </ul>
    </div>
  );
};

export default RightContainer;
