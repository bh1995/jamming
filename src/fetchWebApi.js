// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
// const token = "BQCnrOyFyQd4Vh_acHQFngK0OQFKqJ0xh4GbEcxGNiO8j5gNMK1pS8KbwCB4aZg_pvFV9ZYDe4nvGF6_RyaaGCEHpNRP0VhJk6-m53m_h240gO3UzbPdkgtlpF7U0ewO8hxsUWOSfaVVRu7R0JeZ4cb1TUVb8-vydzfDRnQg0Rtz8djllMm-0c7zfw-62iyZNqOcYZsBsHi02CzjHFHz4l702fSdYQMc5suF06Bv_I2MmE3MDGoeCZ4fHzWJui2pVsa8";

async function fetchWebApi(token, endpoint, method, body) {
  // console.log(token);
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body),
  });
  return await res.json();
}

async function getTopTracks(token) {
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (
    await fetchWebApi(token, "v1/me/top/tracks?time_range=short_term&limit=5", "GET")
  ).items;
}

async function searchTracks(token, QUERY) {
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return await fetchWebApi(token, `v1/search?q=${QUERY}&type=track&limit=5`, "GET");
}

async function createPlaylist(token, trackList, playListName) {
  const { id: user_id } = await fetchWebApi(token, "v1/me", "GET");
  const tracks =  trackList.filter(track => track.id.length > 2) // Filter items longer than 2
  .map(track => "spotify:track:" + track.id); // Add "spotify:track:" to each item
  console.log(tracks)

  const playlist = await fetchWebApi(token, `v1/users/${user_id}/playlists`, "POST", {
    name: playListName,
    description: "Playlist created by my jammer app",
    public: false,
  });

  await fetchWebApi(
    token,
    `v1/playlists/${playlist.id}/tracks?uris=${tracks}`,
    "POST"
  );

  return playlist;
}

export { getTopTracks, searchTracks, createPlaylist };
