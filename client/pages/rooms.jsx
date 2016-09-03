import React from 'react'
import {Button, Card, Row, Col,Input,Icon} from 'react-materialize';
import NavBar from './navbar'
import ajax from 'superagent';
var moment = require('moment');
moment().format();

$(document).ready(function(){
    $('select').material_select();
    $('.datepicker').pickadate({
        format: 'yyyy-mm-dd',
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year
        min: moment().format("YYYY-MM-DD"),
        electYears: 3,
        max:+30,
        disable: [1, 7],
        onSet: function() {
            document.getElementById('showDate').innerHTML = document.getElementById('selectedDate').value;
        },
        onClose: function(){
            $(document.activeElement).blur()
        }

    });
    $('input#selectedFrom').timepicker({
        timeFormat: 'h:mm p',
        interval: 30,
        minTime: '9:00am',
        maxTime: '6:00pm',
        defaultTime: '9',
        startTime: '10:00',
        dynamic: true,
        dropdown: true,
        scrollbar: true
    });
    $('input#selectedTo').timepicker({
        timeFormat: 'h:mm p',
        interval: 30,
        minTime: '9:00am',
        maxTime: '6:00pm',
        defaultTime: '9',
        startTime: '10:00',
        dynamic: true,
        dropdown: true,
        scrollbar: true
    });
    $('.modal-trigger').leanModal();
});
var Building1=[];
var bookingsOnThisDate=[];
var Room = React.createClass({
    getInitialState:function(){
        return {
            selected: 'no',
            name:'',
            date:'',
            floor:[],
            bookings:[],
            thisDate:[]
        }
    },
    componentWillMount: function(){
        ajax
            .get('http://localhost:3001/api/floors')
            .end((err, res) => {
                if (err || !res.ok) {
                    alert('Oh no! error' + err);
                } else {
                    Building1 = res.body
                }
            });
        ajax
            .get('http://localhost:3001/api/bookings')
            .end((err, res) => {
                if (err || !res.ok) {
                    alert('Oh no! error' + err);
                } else {
                    this.setState({
                        bookings: res.body
                    })
                }
            })
    },
    enterName:function (e) {
        document.getElementById('showName').innerHTML = $("#selectedName").val()
        this.setState({
            name: e.target.value
        })
    },
    enterDate:function (e) {
        this.setState({
            date: e.target.value
        });
        var bookings =this.state.bookings;
        for (var i=0;i<bookings.length;i++) {
            if (bookings[i].date === e.target.value) {
                bookingsOnThisDate.push(this.state.bookings[i])
            }
        }

        document.getElementById('showDate').innerHTML = document.getElementById('selectedDate').value;
    },
    enterFloor:function (e) {
        var selectedfloor =$( "#selectedFloor option:selected" ).text();

        for (var i=0;i<Building1.length;i++) {
            if (Building1[i].floor === selectedfloor) {
                this.setState({
                    floor: Building1[i].rooms
                });
            }
        }
        document.getElementById('showRoom').innerHTML = '';
        document.getElementById('showFloor').innerHTML = selectedfloor
    },
    selectSeat:function (e) {
        document.getElementById('showTime').innerHTML = $('#selectedFrom ').val() + ' - '+ $('#selectedTo').val()
        document.getElementById('showRoom').innerHTML = e.target.value;
    },
    showBookings:function () {
        console.log(bookingsOnThisDate,this.state.bookings);
    },
    submit: function () {
        var name =$('#showName').text();
        var floor =$('#showFloor').text();
        var date=$('#showDate').text();
        var time =$('#showTime').text();
        var room =$('#showRoom').text();

        if(name ===""){
            swal({
            title: 'Please enter your name',
            type: 'warning',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
            })
        }
        else if(!name.match(/^[a-zA-Z]*$/g)){
            swal({
            title: 'Your name should only contain letters',
            type: 'warning',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
        })}
        else if(floor===""){swal({
            title: 'Please Select the Floor',
            type: 'warning',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
        })}
        else if(date===""){swal({
            title: 'Please Select a date',
            type: 'warning',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
        })}
        else if(room===""){swal({
            title: 'Please select a room',
            type: 'warning',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
        })}
        else {
            var booking = {
                name: name,
                floor: floor,
                date: date,
                time: time,
                room: room
            };
            $.ajax({
                type: "POST",
                url: 'http://localhost:3001/api/floors',
                data: booking,
                success: function () {
                    swal(
                        'Booking Saved!',
                        'Thank you has been succesfully saved',
                        'success'
                    )
                    location.reload();
                },
                error: function () {
                    sweetAlert(
                        'Error!',
                        'Sorry there has been an error please try again',
                        'error'
                    );
                }

            });

            console.log(booking)
        }
    },
    render: function () {
        return (
            <div>
                <NavBar/>

                <section className="hero is-fullheight">
                        <div className="container has-text-centered">
                            <h1 className="title">
                                Book a Room
                            </h1>
                            <h2 className="subtitle">
                                Select a floor
                            </h2>

                            <div className="tile is-parent ">
                                <article className="tile is-child notification bookingBox">

                                    <div className="row">
                                        <div className="col s3">
                                            <div className="input-field ">
                                                <label htmlFor="selectedName">Name</label>
                                                <input id="selectedName" onChange={this.enterName} type="text" className="validate" />
                                            </div>
                                        </div>
                                        <div className="col s2">

                                            <Input s={12} type='select' onChange={this.enterFloor} id="selectedFloor" label="Select Floor">
                                                <option value="" disabled>choose floor</option>
                                                { Building1.map((room,index) =>{
                                                    return (
                                                        <option value={room.floor} key={index} >{room.floor}</option>
                                                    )
                                                })}
                                            </Input>
                                        </div>
                                        <div className="col s3">
                                            <label >Date</label>
                                            <input className="datepicker" id="selectedDate" onChange={this.enterDate} min={moment().format("YYYY-MM-DD")} placeholder="Select date" />
                                        </div>
                                        <div className="col s2">
                                            <label >From</label>
                                            <input className="input selectedFrom" id="selectedFrom"  />
                                        </div>
                                        <div className="col s2">
                                            <label>To</label>
                                            <input className="input selectedTo"  id="selectedTo"  />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="columns">
                                            <div className="column is-three-quarters">
                                                <p className="title">Select a Room</p>
                                                <p className="subtitle">Only one room can be booked at a time</p>
                                            </div>
                                            <div className="column ">

                                                <button data-target="modal1" className="btn modal-trigger waves-effect waves-light"  onClick={this.showBookings}>on this date</button>
                                                <div id="modal1" className="modal bottom-sheet">
                                                        <h4>Bokings on this Date</h4>
                                                        <p>A bunch of text</p>
                                                    <ul className="collection">

                                                    { this.state.thisDate.map((booking,index) =>{
                                                        return (
                                                            <li className="collection-item avatar" key={index}>
                                                                    <span className="title">{booking.name}</span>
                                                                    <p>{booking.time} <br />
                                                                        {"Floor: "+booking.floor +"  Room: "+booking.room}
                                                                    </p>
                                                            </li>
                                                        )
                                                    })}

                                                    </ul>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="column is-three-quarters is-primary">

                                            <div className="box rooms">
                                                <label className="subtitle has-text-left">Rooms:</label>

                                                <div className="row" >
                                                    { this.state.floor.map((room,index) =>{
                                                        return (
                                                            <div className="col-md-3 roomsCol"  key={index}>
                                                                <button className="hvr-bounce-in room " onClick={this.selectSeat} value={room.name} key={index}>{room.name}</button>

                                                            </div>
                                                        )
                                                    })}
                                                </div>

                                            </div>

                                        </div>
                                        <div className="column">
                                            <div className="row">
                                                <div className="col s4">
                                                    <p className="subtitle has-text-left"><b>Name:</b></p>
                                                </div>
                                                <div className="col s8">
                                                    <p className="subtitle has-text-left" id="showName">{''}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col s4">
                                                    <p className="subtitle has-text-left"><b>Floor:</b></p>
                                                </div>
                                                <div className="col s8">
                                                    <p className="subtitle has-text-left" id="showFloor">{''}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col s4">
                                                    <p className="subtitle has-text-left"><b>Date:</b></p>
                                                </div>
                                                <div className="col s8">
                                                    <p className="subtitle has-text-left" id="showDate">{''}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col s4">
                                                    <p className="subtitle has-text-left"><b>Time:</b></p>
                                                </div>
                                                <div className="col s8">
                                                    <p className="subtitle has-text-left" id="showTime">{''}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col s4">
                                                    <p className="subtitle has-text-left"><b>Room:</b></p>
                                                </div>
                                                <div className="col s8">
                                                    <p className="subtitle has-text-left" id="showRoom">{''}</p>
                                                </div>
                                            </div>
                                            <button className="btn waves-effect waves-light" onClick={this.submit}>Submit
                                                <i className="material-icons right">send</i>
                                            </button>
                                        </div>
                                    </div>

                                </article>
                            </div>
                        </div>
            </section>

            </div>
        )
    }
});

module.exports =Room;
