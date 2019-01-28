const apiKey = 'nM9P_CQeLevPCzH1GIdRLsnkZSJaxECspi99ll3q2E4kJCmO5yd28W9U2ZRJjjUy78p538-fi3mvDdfxJQOzrh2uSKmIqLNI_LzEQBj-nePFRdH94nGiFiIW_3lLXHYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: { 
          Authorization: `Bearer ${apiKey}`      // 'Bearer' is a type of authtoken
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,          
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
        }));
      }
    });
  }
};

export default Yelp;
