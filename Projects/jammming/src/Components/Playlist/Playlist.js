import React from 'react';
import ReactDOM from 'react-dom';
import './Playlist.css';

class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue="{'New Playlist'}"/>
        Add a TrackList component
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
};

export default Playlist;