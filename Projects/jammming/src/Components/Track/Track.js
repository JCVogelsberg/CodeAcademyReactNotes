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

  addTrack(track) {
    this.props.onAdd(this.props.track);
  }

  removeTrack(track) {
    this.props.onRemove(this.props.track);
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3> "{this.props.track.name}" </h3>
          <p> <strong>{this.props.track.artist}</strong> | <i>{this.props.track.album}</i> ({this.props.track.year}) </p>
        </div>

        {this.renderAction()}   {/* The '+' to the right */}
      </div>
    );
  }
}

export default Track;   


