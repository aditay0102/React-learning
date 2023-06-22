import React from 'react';
import PropTypes from 'prop-types';



export default function Navbar(props) {
  return (
    <nav className="nav">
            <a className="nav-link active" aria-current="page" href="#">{props.title}</a>
            <a className="nav-link" href="#">Home</a>
            <a className="nav-link" href="#">About</a>
            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </nav>
  )
}

Navbar.prototype = {
  title: PropTypes.string,
}

Navbar.defaultProps = {
  title: 'Set title here man',
}