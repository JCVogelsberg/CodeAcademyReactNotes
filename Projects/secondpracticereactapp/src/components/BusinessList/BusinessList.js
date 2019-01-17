// Simulate what a returned list of businesses would look like in Ravenous 

import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {
          this.props.arrayOfBusinesses.map(param => {
            return <Business business={param} />;
          })
        }
      </div>
    )
  }
}

export default BusinessList;


