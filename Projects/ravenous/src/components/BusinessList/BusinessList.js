// Simulates what a returned list of businesses would look like in the app 

import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {
          this.props.businesses.map(spork => {
            return <Business business={spork} />;
          })
        }
      </div>
    );
  }
};

export default BusinessList;

