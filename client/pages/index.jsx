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
                        <h1>
                            Home Page
                        </h1>
                        <h1 className="title">
                            A booking application that allows you to reserve a room in your company building
                        </h1>
                        <div className="row">
                            <div className="col s6">
                                <div className="imgWrap">
                                    <img src={require("../../public/Images/bookingRoom.jpg" )} width="610" height="390"/>
                                    <p className="imgDescription"> Chose from different rooms on different </p>
                                </div>
                            </div>
                            <div className="col s6">
                                <div className="imgWrap">
                                    <img src={require("../../public/Images/MAKEABOOKING.jpg")} width="610" height="390"/>
                                    <p className="imgDescription">Book a room </p>

                                </div>
                            </div>
                            <div className="col s6">
                                <div className="imgWrap">
                                    <img src={require("../../public/Images/viewall.jpg")} width="610" height="390 "/>
                                    <p className="imgDescription">View all bookings</p>

                                </div>

                            </div>
                            <div className="col s6">
                                <div className="imgWrap">
                                    <img src={require("../../public/Images/dlt.jpg")} width="610" height="390 "/>
                                    <p className="imgDescription">Delete a booking  </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        )
    }
});

module.exports =Index;