// the search bar should allow users to search businesses by:
// Best Match, Highest Rated, Most Reviewed
import React from 'react';
import './SearchBar.css'; 


// Array of sorting options
const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
};


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    }

    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);    
  }


  // Creates a <ul> containing the (3) sorting options above the search bars
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li 
        className={this.getSortByClass(sortByOptionValue)} 
        key={sortByOptionValue}
        onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
      >{sortByOption}</li>;
    });
  }             //


  // Returns the current CSS class for a sorting option
  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';   // adds 'active' class to <li> element
    } else {
      return '';
    }     
  }


  // Sets the state of a sorting option
  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
  }


  // Search businesses
  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }


  // Search locations
  handleLocationChange(event) {
    this.setState({ location: event.target.value  });
  }


  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
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
          <input onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch} >Let's Go</a>      
        </div>
      </div>
    );
  }

};


export default SearchBar;




