import React from 'react';
// import bootstrap

const navbarStyle = {
    backgroundColor: "blue",
    padding: "10px",
    marginBottom: "0",
    color: "white",
    display: "flex",
    justifyContent: "center"
  }

export default function Navbar() { 
    return (
        <h4 style={navbarStyle}>WikiCountries</h4>
    );
}

// Navbar: Displaying the basic navbar with the LAB name