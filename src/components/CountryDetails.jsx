import React, {Component} from 'react';
import Countries from '../countries.json';

export default class CountryDetails extends Component {
    
    state= {
        CountryDetails: Countries,
    }

    render() {
        return () {
            <div>
                <table class="table">
  <thead>
    <tr>
      <th scope="col">{countryname}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Capital</td>
      <td>{}</td>
    </tr>
    <tr>
      <td>Area</td>
      <td>{}</td>
    </tr>
    <tr>
      <td>Borders</td>
      <td>{}</td>
    </tr>
  </tbody>
</table>
            </div>
        }
    }
}

// CountryDetails: Is the component that we will render via the react-router-dom's Route and will be receiving the country code (cca3) via the URL.
// >> This is actually the id of the country (example: /ESP for Spain, /FRA for France).