import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Countries from '../countries.json';

export default class CountriesList extends Component {

    state= {
        CountriesList: Countries,
    }

    render() {
    return (
        <div id="countries-list">
            {this.state.CountriesList.map((eachCountry) => {
                return (
                    <NavLink to={`/${eachCountry.cca3}`}>{eachCountry.name.common}</NavLink>
                )
            })}
        </div>
    )
}
}


// CountriesList: Displays the list of links with the country names. Each link should be a react-router-dom Link which we will use to send the country code (cca3) via the URL.
