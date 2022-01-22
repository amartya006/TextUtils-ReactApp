import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode.color === 'black'? 'light': 'dark' } bg-${props.mode.color === 'black'? 'light': 'dark' }`}>
                <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">{props.aboutText}</Link>
                    </li>

                    <li class="nav-item dropdown">
                        <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Color Scheme
                        </Link>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link class="dropdown-item"  onClick={props.modes.light} to="/">Light</Link></li>
                            <li><Link class="dropdown-item" onClick={props.modes.blue} to="/">Blue</Link></li>
                            <li><Link class="dropdown-item" onClick={props.modes.dark} to="/">Dark</Link></li>
                            {/* <li><Link class="dropdown-item" to="#">Orange</Link></li> */}
                        </ul>
                    </li>
                    
                    </ul>
                    {/* <div className={`form-check form-switch text-${props.mode.color === 'black'? 'dark': 'light' }`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.colorText}</label>
                    </div> */}

                    

                </div>
                </div>
            </nav>
        </div>
    )
}


Navbar.propTypes = {
    title : PropTypes.string,
    aboutText : PropTypes.string
}