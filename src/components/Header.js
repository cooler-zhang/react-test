import React, { Component } from 'react';

const Header =(props) => {
    return (
      <div className="App">
        <h1>Header {props.homeLink}</h1>
      </div>
    );
}

export default Header;