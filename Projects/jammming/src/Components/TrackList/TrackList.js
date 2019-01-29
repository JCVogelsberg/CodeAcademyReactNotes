import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';


// Lists out all the Tracks created by the Track component
class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {
          this.props.tracks.map(track => {

            return <Track 
              track={track} 
              key={track.id} 
              name={track.name} 
              artist={track.artist} 
              album={track.album} 
              onAdd={this.props.onAdd}
            />
          })
        }
      </div>
    );
  }
}

export default TrackList;


