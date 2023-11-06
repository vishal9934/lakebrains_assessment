// src/App.js

import React, { useState } from 'react';
import SearchBar from './components/Searchbar';
import WeatherModal from './components/WeatherModal';

const API_KEY = '840de593b7028de6e424162454790fe5';
const API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = async (city) => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      setWeatherData(data);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error fetching weather data: ', error);
    }
  };

  return (
    <div className="App">
      <SearchBar onSearch={fetchData} />
      <WeatherModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        data={weatherData}
      />
    </div>
  );
}

export default App;
