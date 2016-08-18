import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'
import NavBar from './navbar'

var Room = React.createClass({
    render: function () {
        return (
            <div>
                <NavBar/>

                <div className="container">
                    <h1 className="title">Room</h1>
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title">
                                Title
                            </h1>
                            <h2 className="subtitle">
                                Subtitle
                            </h2>
                            <div className="tile is-parent">
                                <article className="tile is-child notification is-dark">
                                    <p className="title">Middle tile</p>
                                    <p className="subtitle">With an image</p>
                                    <figure className="image is-4by3">
                                        <img src="http://placehold.it/640x480" />
                                    </figure>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports =Room