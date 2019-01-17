import React, { Component } from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';


// Sample business listing
const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

// This is an array of 6 sample business listings
const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];



// The App Component takes in everything from the other components 
// and renders them to the screen as a web app
class App extends Component {
  render() {
    return (
      <div class="App">
        <h1>2nd Ravenous App (Work Computer)</h1>
        <SearchBar />
        <BusinessList arrayOfBusinesses={businesses}/> 
      </div>
    );
  }
}

export default App;






