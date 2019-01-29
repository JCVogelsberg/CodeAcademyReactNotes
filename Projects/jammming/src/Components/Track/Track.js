import React from 'react';
import './Track.css';
//import TrackList from '../TrackList/TrackList';

// Creates instances of the Track component
class Track extends React.Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return ' - ';
    } else {
      this.addTrack();
    }
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3> TRACK NAME WILL GO HERE </h3>
          <p> TRACK ARTIST WILL GO HERE | TRACK ALBUM WILL GO HERE </p>
        </div>
        <a className="Track-action">{this.renderAction()}</a>
      </div>
    );
  }
}

export default Track;   
