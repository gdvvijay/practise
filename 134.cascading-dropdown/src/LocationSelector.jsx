import React, { useState } from 'react';
import './LocationSelector.css';

const data = {
  USA: ['New York', 'Los Angeles', 'Chicago'],
  Canada: ['Toronto', 'Vancouver', 'Montreal'],
  Australia: ['Sydney', 'Melbourne', 'Brisbane'],
};

function LocationSelector() {
  const [selectedCountry, setSelectedCountry] = useState('Canada');
  const [selectedCity, setSelectedCity] = useState('')
  const [availableCities, setAvailableCities] = useState([]);

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country)
    const cities = data[country];
    setAvailableCities(cities)
    setSelectedCity(cities[0])
    // This state update is missing
  };
  
  const handleCityChange = (e) => {
    // This logic is not implemented
    setSelectedCity(e.target.value)
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You selected: ${selectedCity}, ${selectedCountry}`);
  };

  return (
    <form className="location-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Country</label>
        <select onChange={handleCountryChange}>
          <option value="">-- Select a Country --</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
        </select>
      </div>

      <div className="form-group">
        <label>City</label>
        <select value={selectedCity} onChange={handleCityChange} >
          {availableCities.map(city => (
            <option key={city} value={city} >
              {city}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
}

export default LocationSelector;