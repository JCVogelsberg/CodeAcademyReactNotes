const clientID = 'cafaea52ab6b4573a1718300cc367f63';
const redirectURI = 'http://localhost:3000/';
let accessToken;
let expiresIn;


const Spotify = {
  getAccessToken() {

    // Does accessToken have a value? If so, return it.
    if (accessToken) {
      return accessToken;

    // If not, set values for your access token & expiration time
    }
    let token = window.location.href.match(/access_token=([^&]*)/);
    let expiry = window.location.href.match(/expires_in=([^&]*)/);

    // Are access token & expiry time in the URL?
    if (token && expiry) {
      // Set the access token value
      accessToken = token[1];
      // Set a variable for expiry time
      expiresIn = expiry[1];
      // Set the access token to expire at the value for expiration time
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      // Clear parameters from URL so app doesn't grab access token after expired
      window.history.pushState('Access Token', null, '/');
    } 
    // Access token variable is empty and not in the URL
    const accessURI = 'https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}';
    window.location = accessURI;
  },


  search(searchTerm) {
    const accessToken = Spotify.getAccessToken();

    // GET request to the Spotify endpoint
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, 
      { headers: { Authorization: `Bearer ${accessToken}` } }

      // Convert the returned response to JSON
      .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
      }, 
      networkError => {
        console.log(networkError.message);
      })

      // Map the converted JSON to an array of tracks
      .then(jsonResponse => {
        if (jsonResponse.tracks) {
          return jsonResponse.tracks.items.map(track => 
          ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri
          }));
        } else {
          return [];
        } 
      })
    )
  },

  // Gets a user's ID from Spotify, creates a new playlist, adds tracks to that playlist
  savePlaylist(name,trackURIs) {
    if (!name || !trackURIs.length) {
      return;
    }
    const accessToken = Spotify.getAccessToken();
    const headers = { headers: { Authorization: `Bearer ${accessToken}` } };
    let userID;

    // Return user's ID from Spotify API
    return fetch('https://api.spotify.com/v1/me', { headers: headers })
    .then(
      response => {
        if(response.ok) {
          return response.json();
        }
      })
    .then(
      jsonResponse => {
        userID = jsonResponse.id;
      }
    )
  }
}

export default Spotify;





