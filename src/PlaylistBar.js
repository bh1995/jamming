import React from "react";

const PlaylistBar = ({
  playlistText,
  handlePlaylistTextChange,
  handleCreatePlaylistClick,
}) => {

  return (
    <div>
      <input
        type="text"
        placeholder="Play list name ..."
        value={playlistText}
        onChange={(e) => handlePlaylistTextChange(e.target.value)}
      />
      <button onClick={handleCreatePlaylistClick}>Add Playlist</button>
    </div>
  );
};

export default PlaylistBar;
