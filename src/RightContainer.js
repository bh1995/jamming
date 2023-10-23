import React from "react";

const RightContainer = ({trackList}) => {
  console.log(trackList)
  return (
    <div>
      <ul>
        {trackList.map((result) => (
          <div key={result.id} className="search-result">
            <span>{result.name}</span> <br></br>
            <span>{result.artist}</span> <br></br>
            <span>{result.album}</span> <br></br> 
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RightContainer;
