import React from 'react';
import './SearchBar.css';


const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating', 
  'Most Reviewed': 'review_count'
};


class SearchBar extends React.Component {
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(zorkBork => {
      let hurrDurr = sortByOptions[zorkBork];
      return <li key={hurrDurr}>{zorkBork}</li>
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Fookin Search!</a>
        </div>
      </div>
    )
  }
}

export default SearchBar;