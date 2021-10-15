//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

    <Navbar/>
    <CountriesList/>
    
    <Switch>
        <Route />
    </Switch>
    </div>
  );
}

export default App;


// Iteration 1.1 | Create components
// In this iteration, we will focus on the general layout. Before you start, inside the src folder, create the components folder. There you will create at least 3 components:

// Navbar: Displaying the basic navbar with the LAB name
// CountriesList: Displays the list of links with the country names. Each link should be a react-router-dom Link which we will use to send the country code (cca3) via the URL.
// CountryDetails: Is the component that we will render via the react-router-dom's Route and will be receiving the country code (cca3) via the URL.
// >> This is actually the id of the country (example: /ESP for Spain, /FRA for France).

// To help you with the structure of the components, we gave you an example of a page inside example.html.
// If you want to style it, refresh your memory on Bootstrap in the docs or check out how we approached styling in the example.html.

