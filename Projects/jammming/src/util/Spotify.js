const clientID = 'cafaea52ab6b4573a1718300cc367f63';
const redirectURI = 'http://localhost:3000/';

let accessToken;

const Spotify = {
  getAccessToken() {

    // Does accessToken have a value?
    if (accessToken) {
      return accessToken;

    // Set values for your access token & expiration time
    } else {
      let token = window.location.href.match(/access_token=([^&]*)/);
      let expiry = window.location.href.match(/expires_in=([^&]*)/);

      // Are access token & expiry time in the URL?
      if (token && expiry) {
        // Set the access token value
        accessToken = token[1];
        // Set a variable for expiry time
        const expiresIn = Number(hasExpiresIn[1]);
        // Set the access token to expire at the value for expiration time
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        // Clear parameters from URL so app doesn't grab access token after expired
        window.history.pushState('Access Token', null, '/');
      } 

      // Access token variable is empty and not in the URL
      const accessURI = 'https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}';
      window.location = accessURI;


    }
  }
};

export default Spotify;


