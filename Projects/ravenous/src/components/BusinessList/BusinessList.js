import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

// BusinessList component loops through 'businesses' array
// and displays the businesses listed therein
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

