import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'
import NavBar from './navbar'

var Index = React.createClass({
    render: function () {
        return (
            <div>
                <NavBar/>
                <div className="container">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title">
                                Home Page
                            </h1>
                            <h2 className="subtitle">
                                Subtitle
                            </h2>
                            <img src="../../public/images/bookingRoom.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports =Index;