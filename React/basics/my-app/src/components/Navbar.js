import React from 'react';
import PropTypes from 'prop-types';




export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <a className="nav-link active" aria-current="page" href="#">{props.title}</a>
            <a className="nav-link" href="#">Home</a>
            <a className="nav-link" href="#">About</a>
            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            <div className="form-check form-switch">

            <div className={`form-check form-switch text-${props.mode=== 'light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable dark mode</label>
    </div>
</div>

    </nav>
  )
}

Navbar.prototype = {
  title: PropTypes.string,
}

Navbar.defaultProps = {
  title: 'Set title here man',
}