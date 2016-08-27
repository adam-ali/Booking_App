import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'

var NavBar = React.createClass({
    render: function () {
        return (
            <div>
            <nav className="nav has-shadow">
                <div className="container">
                    <div className="nav-center">
                        <Link to="/" className="nav-item is-tab">Home</Link>
                        <Link to="/rooms/" className="nav-item is-tab">Book Room</Link>
                        <Link to="/addRoom/" className="nav-item is-tab">Add Floor</Link>
                        <Link to="/" className="nav-item is-tab">Delete Room</Link>

                    </div>
                </div>
            </nav>
            </div>
        )
    }
});

module.exports =NavBar;