import React, {Component} from 'react';
import countries from '../countries.json';
// if this is imported I can access without variables within component

export default class CountryDetails extends Component {

// how to use bootstrap styles??

    render() {
        const { cca3 } = this.props.match.params; // how to target matchthings
        // ONLY GET the one that has this exact cca3 - use filter!

        const filteredCountry = countries.find(eachCountry => eachCountry.cca3 === cca3)
        return (
          <div>
            <h1>{cca3}</h1>
            <table className="table table-striped">
              <thead>
              <tr>
                <th className="col">{filteredCountry.name.common}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="row">Capital</td>
                <td className="row">{filteredCountry.capital}</td>
              </tr>
              <tr>
                <td className="row">Area</td>
                <td className="row">{filteredCountry.area} km<sup>2</sup></td>
              </tr>
              <tr>
                <td className="row">Borders</td>
                <td className="row">
                    <ul>
                    <li>
                    </li>
                    </ul>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        )
  
    }
}


// should get the cca3 as a prop??
// to={`/${eachCountry.cca3}`}

// CountryDetails: Is the component that we will render via the react-router-dom's Route and will be receiving the country code (cca3) via the URL.
// >> This is actually the id of the country (example: /ESP for Spain, /FRA for France).