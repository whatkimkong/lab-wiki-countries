//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import React, {Component} from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import Countries from './countries.json';

const countriesList = {
  backgroundColor: "lightBlue",
}

class App extends Component {

  state = {
    countries: Countries,
  }

  componentDidMount() {
    console.log("it did mount")
  }

  render() {
    const { countries } = this.state;
    return (
      <div className="App">
        {!countries && <h2>This page is loading</h2>}
        <Navbar/>
        <div className="container-fluid bg-light">
          <div className="row">
            <div className="col-4">
              <CountriesList/>
            </div>
            <div className="col-8">
              <Switch>
                  <Route exact path="/country/:cca3" component={CountryDetails} />
              </Switch>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
// the semi-colon points to whatever is with it (only within the /:bla/), it defines the params, creates the params from this path

export default App;


// Iteration 1.1 | Create components
// In this iteration, we will focus on the general layout. Before you start, inside the src folder, create the components folder. There you will create at least 3 components:

// Navbar: Displaying the basic navbar with the LAB name
// CountriesList: Displays the list of links with the country names. Each link should be a react-router-dom Link which we will use to send the country code (cca3) via the URL.
// CountryDetails: Is the component that we will render via the react-router-dom's Route and will be receiving the country code (cca3) via the URL.
// >> This is actually the id of the country (example: /ESP for Spain, /FRA for France).

// To help you with the structure of the components, we gave you an example of a page inside example.html.
// If you want to style it, refresh your memory on Bootstrap in the docs or check out how we approached styling in the example.html.

