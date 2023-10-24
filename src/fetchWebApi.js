// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = "BQAhTdB11U1bev0F_uSoWOs0lSgCiSKbs7ZtZj-0F9nq5Tw424poqJWw09lYD5uAmduA80rb97kZyplq8njSkGd_2K9227vVS9knJWtajJVZn8AmcNfZWG8asgHpcbaPK-8siO3WREykG_irwpsGifQfDJExj_2OfSrOGrreSuqkpoXnwaWvqnm5a2YsbsUnUNKy3_5mVxTQ4h4WiV4FkEs0SCjwK_aZenflC7KFOlobTvljcnxxVTFf_J0SrX6Uoltc";

async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body),
  });
  return await res.json();
}

async function getTopTracks() {
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (
    await fetchWebApi("v1/me/top/tracks?time_range=short_term&limit=5", "GET")
  ).items;
}

async function searchTracks(QUERY) {
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return await fetchWebApi(`v1/search?q=${QUERY}&type=track&limit=5`, "GET");
}

async function createPlaylist(trackList, playListName) {
  const { id: user_id } = await fetchWebApi("v1/me", "GET");
  const tracks =  trackList.filter(track => track.id.length > 2) // Filter items longer than 2
  .map(track => "spotify:track:" + track.id); // Add "spotify:track:" to each item
  console.log(tracks)

  const playlist = await fetchWebApi(`v1/users/${user_id}/playlists`, "POST", {
    name: playListName,
    description: "Playlist created by my jammer app",
    public: false,
  });

  await fetchWebApi(
    `v1/playlists/${playlist.id}/tracks?uris=${tracks}`,
    "POST"
  );

  return playlist;
}

export { getTopTracks, searchTracks, createPlaylist };
