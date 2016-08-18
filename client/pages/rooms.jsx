import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'
import NavBar from './navbar'

var Room = React.createClass({
    render: function () {
        return (
            <div>
                <NavBar/>

                <div className="container">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title">
                                Book a Room
                            </h1>
                            <h2 className="subtitle">
                                Select a floor and time
                            </h2>
                            <div className="tile is-parent">
                                <article className="tile is-child notification is-dark">

                                    <div className="control is-grouped">
                                        <p className="control is-expanded">
                                            <label className="label form">Floor</label>
                                            <input className="input" type="number" placeholder="Floor" />
                                        </p>
                                        <p className="control is-expanded">
                                            <label className="label">Date</label>
                                            <input className="input" type="date" placeholder="Date" />
                                        </p>
                                        <p className="control is-expanded">
                                            <label className="label">Time</label>
                                            <input className="input" type="text" placeholder="Time" />
                                        </p>
                                    </div>
                                    <p className="title">Select a Room</p>
                                    <p className="subtitle">You can only book one room at a time</p>
                                    <div className="columns">
                                        <div className="column is-three-quarters">

                                            <figure className="image is-4by3">
                                                <img src="http://placehold.it/640x480" />
                                            </figure>
                                        </div>
                                        <div className="column">

                                        </div>
                                    </div>

                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports =Room;
