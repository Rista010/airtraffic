import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Flight from './Components/Flight';

class App extends Component {
  constructor(){
    super();
    this.state = {
      flights: []
    }
  }

  getFlights = (latitude, longitude) => {
    axios.get(`https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat=${latitude}&lng=${longitude}&fDstL=0&fDstU=100`).then(res =>
      {
        this.setState({ flights: res.data.acList })
        console.log(this.state.flights);
      }
    )
  }

  componentDidMount(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.getFlights(position.coords.latitude, position.coords.longitude);
        
      }, err => {
        alert(err);
      })
    } else {
      alert("Geolocation not supported!");
    }
      
  }
  
  render() {
    return (
      <div className="App">
        <h1>Air Traffic Flight</h1>
          {
            this.state.flights.map(plane => {
              return <Flight key={plane.Id} props={plane} />
            })
          }
      </div>
    );
  }
}

export default App;
