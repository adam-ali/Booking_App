import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'

var NavBar = React.createClass({
    render: function () {
        return (
            <div>
            <nav className="nav has-shadow bookingBox">
                <div className="container">
                    <div className="nav-center">
                        <Link to="/" className="nav-item is-tab">Home</Link>
                        <Link to="/book/" className="nav-item is-tab">Book Room</Link>
                        <Link to="/View/" className="nav-item is-tab">View Bookings</Link>
                        <Link to="/delete/" className="nav-item is-tab">Delete Booking</Link>

                    </div>
                </div>
            </nav>
            </div>
        )
    }
});

module.exports =NavBar;