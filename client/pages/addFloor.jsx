import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'
import NavBar from './navbar'

var AddFloor = React.createClass({
    render: function () {
        return (
            <div>
                <NavBar/>
                <div className="container">

                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title">
                               Add Floor
                            </h1>
                            <h2 className="subtitle">
                                Subtitle
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports =AddFloor;