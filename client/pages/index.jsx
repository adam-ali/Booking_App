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
                            Subtitle
                        </h2>
                        <img src="../../public/images/bookingRoom.jpg"/>
                    </div>
                </section>
            </div>
        )
    }
});

module.exports =Index;