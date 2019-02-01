import React from 'react';
import './Track.css';
//import TrackList from '../TrackList/TrackList';

// Creates instances of the Track component
class Track extends React.Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }


  renderAction() {
    if (this.props.onAdd) {
      return <a className="Track-action" onClick={this.addTrack} > + </a>;
    } else {
      return <a className="Track-action" onClick={this.removeTrack} > - </a>;
    }
  }
  

  addTrack() {
    this.props.onAdd(this.props.track);
  }  


  removeTrack() {
    this.props.onRemove(this.props.track);
  }


  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3> TRACK NAME WILL GO HERE </h3>
          <p> TRACK ARTIST WILL GO HERE | TRACK ALBUM WILL GO HERE </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;   


