import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

// DO I NEED TO IMPORT TRACK.js or TRACKLIST.js ???

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchResults: [
        {
          name: 'Moonage Daydream', 
          artist: 'David Bowie', 
          album: 'Ziggy Stardust...', 
          id: '72' 
        },
        {
          name: 'Kokomo', 
          artist: 'The Beach Boys', 
          album: 'Still Cruisin', 
          id: '89' 
        },
        {
          name: 'Mekong', 
          artist: 'The Refreshments', 
          album: 'Fizzy, Fuzzy...', 
          id: '96' 
        }
      ],

      playlistTracks: [
        {
          name: 'Playlist Song #1', 
          artist: 'Playlist Artist #1', 
          album: 'Playlist Album #1', 
          id: '200' 
        },
        {
          name: 'Playlist Song #2', 
          artist: 'Playlist Artist #2', 
          album: 'Playlist Album #2', 
          id: '300' 
        },
        {
          name: 'Playlist Song #3', 
          artist: 'Playlist Artist #3', 
          album: 'Playlist Album #3', 
          id: '400' 
        }
      ],
      playlistName: 'Muh Music.'
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);

//    this._bind('updatePlaylistName', 'addTrack', 'removeTrack', 'savePlaylist', 'search');
  }


  addTrack(track){
    if(!this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      this.setState(prevState => ({
        playlistTracks: [ ...prevState.playlistTracks, track ] 
      }));
    }
  }


  removeTrack(track){
    this.setState({
      playlistTracks: this.state.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id)
    });
  }


  updatePlaylistName(name) {
    this.setState({ playlistName: name });  
  }


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar searchResults={this.state.searchResults} />
          <div className="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults} 
              onAdd={this.addTrack} 
            />
            <Playlist 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks} 
              onRemove={this.removeTrack} 
              onNameChange={this.updatePlaylistName}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;





