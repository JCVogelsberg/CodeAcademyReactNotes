import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';


// Lists out all the Tracks created by the Track component
class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map(track => 
          <Track 
            key={track.id} 
            track={track} 
            onRemove={this.props.onRemove} 
            onAdd={this.props.onAdd} 
            name={track.name} 
            artist={track.artist} 
            album={track.album}
            year={track.year}  
            isRemoval={true}      
          />)}
      </div>
    );
  }
}

export default TrackList;


