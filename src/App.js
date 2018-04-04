import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import FlightList from './containers/FlightList/FlightList';
import FlightPage from './containers/FlightPage/FlightPage';
import { Route } from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      <div>
        <Layout>
          <Route path="/" exact component={FlightList} />
          <Route path="/flight" component={FlightPage} />
        </Layout>
      </div>
    );
  }
}

export default App;
