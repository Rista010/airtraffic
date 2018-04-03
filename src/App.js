import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Flight from './Components/Flight';
import Single from './Components/Single';

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
        this.sortFlights();
      }
    )
  }

  sortFlights = () => {
    const flights = this.state.flights;
    flights.sort((a,b) => b.Alt - a.Alt);
    this.setState({
      flights
    })

    console.log(this.state.flights);
  }

  componentDidMount(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.interval = setInterval(this.getFlights(position.coords.latitude, position.coords.longitude), 60000);
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
              return (
                <Flight key={plane.Id} props={plane} />
              );
            })
          }
      </div>
    );
  }
}

export default App;
