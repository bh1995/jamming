import React from "react";

const RightContainer = (rightContainer) => {

  return (
    <div>
      <ul>
        {Array.isArray(rightContainer) ? (
          rightContainer.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))
        ) : (
          <li>No items in the right container</li>
        )}
      </ul>
    </div>
  );
};

export default RightContainer;
