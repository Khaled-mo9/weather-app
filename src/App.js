import React, { Component } from 'react';
import './App.css';
import AddItems from './components/Weather/Weather';
import WeatherItems from './components/Form/Form';

const API_KEYS = '4fef634b0192618422c41f1fddbfe179';

class App extends Component {

  state = {
    Temperature: '',
    city: '',
    country: '',
    Humidity: '',
    description: '',
    error: ''
  }


  getWeather = async (e) => {
    e.preventDefault();
    
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if (city && country) {
      const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEYS}`);
      const data = await api.json();


      this.setState({
        Temperature: data?.main.temp,
        city: data?.name,
        country: data?.sys.country,
        Humidity: data?.main.humidity,
        description: data?.weather[0].description,
        error: '',
      });
    } else {
      this.setState({
        Temperature: '',
        city: '',
        country: '',
        Humidity: '',
        description: '',
        error: 'Please Enter Data'
      });
    }

  }

  render() {
    return (
      <div className='App'>
        <AddItems getWeather={this.getWeather} />
        <WeatherItems items={this.state} />
      </div>
    );
  };
}

export default App;
