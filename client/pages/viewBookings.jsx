import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'
import NavBar from './navbar'
import ajax from 'superagent';
import {Button, Card, Row, Col,Input,Icon} from 'react-materialize';

$(document).ready(function() {

});
var allBookings=[];
var viewBookings = React.createClass({
    getInitialState:function(){
        return {
            bookings:[],
        }
    },
    componentWillMount: function(){
        ajax
            .get('//localhost:3001/api/bookings')
            .end((err, res) => {
                if (err || !res.ok) {
                    alert('Oh no! error' + err);
                } else {
                    allBookings = res.body;
                    this.setState({
                        bookings: res.body
                    })
                }
            })
    },

    render: function () {
        return (
            <div>
                <NavBar/>
                <section className="hero is-fullheight">
                    <div className="container has-text-centered">
                        <h1>
                            View all Bookings
                        </h1>
                        <div className="tile is-parent ">
                            <article className="tile is-child notification bookingBox">
                                <ul className="collection">
                                    { allBookings.map((booking,index) =>{
                                        return (
                                            <div className=" columns" key={index}>
                                            <div className="hvr-grow column" key={index}>
                                                <li className=" collection-item avatar" key={index}>
                                                        <span className="title">{booking.name}</span>
                                                        <p>{'Date '+booking.date+' Time: '+booking.time}<br/>
                                                            {'Floor: '+booking.floor+' Room: '+booking.room}
                                                        </p>
                                                </li>
                                            </div>
                                            </div>
                                        )
                                    })}

                                </ul>

                            </article>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
});

module.exports =viewBookings;