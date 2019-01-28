import React from 'react';
import './Track.css';

// Creates instances of the Track component
class Track extends React.Component {
  renderAction() {
//    if (isRemoval) {
    if (2>1) {  
      return '<a>-</a>';
    } else {
      return '<a>+</a>';
    }
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
