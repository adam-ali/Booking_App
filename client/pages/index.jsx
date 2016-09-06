import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'
import NavBar from './navbar'

var Index = React.createClass({
    render: function () {
        return (
            <div>
                <NavBar/>
                <section className="hero is-fullheight">
                    <div className="container has-text-centered">
                        <h1 className="title">
                            Home Page
                        </h1>
                        <h2 className="subtitle">
                            Book a room, View or delete the booking in this booking app
                        </h2>
                    </div>
                </section>
            </div>
        )
    }
});

module.exports =Index;