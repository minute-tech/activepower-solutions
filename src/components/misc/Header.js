import React, { Component } from 'react'
import { NavLink, Link, withRouter } from "react-router-dom";
import { HashLink as HashNavLink } from 'react-router-hash-link';
import "../../assets/css/Header.scss";
import logo from "../../assets/images/logos/icon512px.png";
               
class Header extends Component {
    render() {
        return (
            <header>
                <nav className="nav-container">
                    <div className="center-text">
                        <Link to="/" className="">
                            <img
                                className="nav-logo"
                                alt="logo"
                                src={logo}
                            />
                            <span className="nav-lg-text">active power solutions</span>
                        </Link>
                    </div>
                   
                    <div className="nav-links">
                        <NavLink 
                            exact
                            to="/" 
                            className="nav-link" 
                            activeClassName="nav-select">
                            home
                        </NavLink>
                        <NavLink 
                            exact
                            to="/about" 
                            className="nav-link" 
                            activeClassName="nav-select">
                            about
                        </NavLink>
                        <HashNavLink
                            to="/#Contact" 
                            className="nav-link" >
                            contact
                        </HashNavLink>
                    </div>
                    
                </nav>
            </header>
        )
    }
}

export default withRouter(Header);