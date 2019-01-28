import React from 'react';
import ReactDOM from 'react-dom';
import './Track.css';

class Track extends React.Component {
  render() {

    renderAction() {
      if (isRemoval) {
        return '-';
      } else {
        return '+';
      }
    }
    return (
      <div className="Track">
        <div className="Track-information">
          <h3> TRACK NAME WILL GO HERE </h3>
          <p> TRACK ARTIST WILL GO HERE | TRACK ALBUM WILL GO HERE </p>
        </div>
       <a className="Track-action"> +/- will go here </a>
      </div>
    );
  }
}

export default Track;
