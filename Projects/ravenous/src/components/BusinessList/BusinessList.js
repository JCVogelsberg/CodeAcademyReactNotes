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
          this.props.businesses.map(business => {
            return <Business business={business} key={business.id} />;
          })
        }
      </div>
    );
  }
};

export default BusinessList; 

