import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import countries from '../countries.json';


export default class CountriesList extends Component {

    state= {
        countriesList: countries,
    }

    render() {
    return (
        <ul id="countries-list" className="list-group pt-3">
            {this.state.countriesList.map((eachCountry) => {
                return (
                    <li className="list-group-item">
                    <NavLink to={`/country/${eachCountry.cca3}`}>{eachCountry.name.common}</NavLink>
                    </li>
                )
            })}
        </ul>
    )
}
}


// CountriesList: Displays the list of links with the country names. Each link should be a react-router-dom Link which we will use to send the country code (cca3) via the URL.
