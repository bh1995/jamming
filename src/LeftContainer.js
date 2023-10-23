import React from 'react';

function LeftContainer({ searchResults }) {
  return (
    <div>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default LeftContainer;
