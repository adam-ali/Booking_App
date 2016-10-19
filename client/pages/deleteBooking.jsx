import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'
import NavBar from './navbar'
import ajax from 'superagent';
import {Button, Card, Row, Col,Input,Icon} from 'react-materialize';

$(document).ready(function() {
    $('select').material_select();
});
var allBookings=[];
var AddFloor = React.createClass({
    getInitialState:function(){
        return {
            bookings:[],
        }
    },
    componentWillMount: function(){
        ajax
            .get('http://localhost:3001/api/bookings')
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
    delete: function () {
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function() {
            //ajax request
            $.ajax({
                type: "DELETE",
                url: 'http://localhost:3001/api/bookings',
                data: allBookings[5],
                success: function () {
                    console.log('deleted sucessss')
                    location.reload();
                },
                error: function () {
                    sweetAlert(
                        'Error!',
                        'Sorry there has been an error please try again',
                        'error'
                    );
                }

            })
            swal(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            );
        })
    },
    render: function () {
        return (
            <div>
                <NavBar/>
                <section className="hero is-fullheight">
                    <div className="container has-text-centered">
                        <h1 >
                           Delete a Booking
                        </h1>
                        <h2 className="title">
                            select a booking from the list
                        </h2>
                        <div className="tile is-parent ">
                            <article className="tile is-child notification bookingBox">
                                <Input s={12} type='select' onChange={this.enterFloor} id="selectedFloor" label="Select Floor">
                                    <option value="" disabled>choose floor</option>
                                    { allBookings.map((booking,index) =>{
                                        return (
                                            <option value={booking.name} key={index} >{ booking.name+'- Date:'+booking.date+' Time:'+ booking.time+' Floor:'+booking.floor+' Room:'+booking.room}</option>
                                        )
                                    })}
                                </Input>

                                <div className="column">
                                    <button className="btn waves-effect waves-light dltbtn" onClick={this.delete}>Delete
                                        <i className="material-icons right">delete</i>
                                    </button>

                                </div>
                            </article>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
});

module.exports =AddFloor;