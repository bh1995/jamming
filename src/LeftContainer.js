import React from "react";

const LeftContainer = ({ searchResults, onAddToRight, onRemoveFromLeft }) => {


  return (
    <div>
      <ul>
        {searchResults.map((result) => (
          <div key={result.id} className="search-result">
            <span>{result.name}</span> <br></br>
            <span>{result.artist}</span> <br></br>
            <span>{result.album}</span> <br></br> 
            <button onClick={() => onAddToRight(result)}>Move to Right</button>
            <button onClick={() => onRemoveFromLeft(result)}>Remove</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default LeftContainer;
