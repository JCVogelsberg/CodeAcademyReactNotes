import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify.js';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchResults: [
        {
          name: 'Island Girl (I\'m Gonna Make Her Mine)', 
          artist: 'The Beach Boys', 
          album: 'Still Cruisin\'', 
          year: '1989',
          id: '01' 
        },
        {
          name: 'Green & Dumb', 
          artist: 'Roger Clyne & The Peacemakers', 
          album: 'Honky Tonk Union', 
          year: '1999',
          id: '02' 
        },
        {
          name: 'Modern Love', 
          artist: 'David Bowie', 
          album: 'Let\'s Dance', 
          year: '1983',
          id: '03' 
        },
        {
          name: 'Work', 
          artist: 'Jimmy Eat World', 
          album: 'Futures', 
          year: '2004',
          id: '04' 
        },
        {
          name: '(Nothing But) Flowers', 
          artist: 'Talking Heads', 
          album: 'Naked', 
          year: '1988',
          id: '05' 
        },
        {
          name: 'New Frontier', 
          artist: 'Counting Crows', 
          album: 'Hard Candy', 
          year: '2002',
          id: '06' 
        }
      ],

      playlistTracks: [
        {
          name: 'Playlist Song #1', 
          artist: 'Playlist Artist #1', 
          album: 'Playlist Album #1', 
          year: 'derp',
          id: '200' 
        },
        {
          name: 'Playlist Song #2', 
          artist: 'Playlist Artist #2', 
          album: 'Playlist Album #2', 
          year: 'derp',
          id: '300' 
        },
        {
          name: 'Playlist Song #3', 
          artist: 'Playlist Artist #3', 
          album: 'Playlist Album #3', 
          year: 'derp',
          id: '400' 
        }
      ],
      playlistName: 'Muh Music.'
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
//    this._bind('updatePlaylistName', 'addTrack', 'removeTrack', 'savePlaylist', 'search');
  }

  addTrack(track) {
    if (!this.state.playlistTracks.find(playlistTrack => playlistTrack.id === track.id)) {
      this.setState(prevState => ({
        playlistTracks: [...prevState.playlistTracks, track]
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

  savePlaylist(){
    let trackURIs = this.state.playlistTracks.map(track => track.uri);
  }

  search(searchTerm) {
    Spotify.search(searchTerm).then(searchResults => {
      this.setState({ searchResults: searchResults });
    })
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">

          {/* Searchbar at top */}
          <SearchBar 
            searchResults={this.state.searchResults} 
            onSearch={this.search}
          />

          <div className="App-playlist">
            
            {/* The left column */}
            <SearchResults 
              searchResults={this.state.searchResults} 
              onAdd={this.addTrack} 
            />

            {/* The right column */}
            <Playlist 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks} 
              onRemove={this.removeTrack} 
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />

          </div>
        </div>
      </div>
    );
  }
}

export default App; 