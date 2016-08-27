import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'
import NavBar from './navbar'
import {Button, Card, Row, Col,Input,Icon} from 'react-materialize';
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
});

var Building1 =
    [
        {
            floor:'G',
            rooms:[
                {
                    "name":"A1",
                    "capacity":"5",

                },
                {
                    "name":"A5",
                    "capacity":"5",

                },
                {
                    "name":"NC",
                    "capacity":"5",

                },
                {
                    "name":"R",
                    "capacity":"5",

                },
                {
                    "name":"R2",
                    "capacity":"5",

                },
                {
                    "name":"00",
                    "capacity":"7"
                }
            ]
        },
        {
            floor:'1',
            rooms:[
                {
                    "name":"g1",
                    "capacity":"5",

                },
                {
                    "name":"g2",
                    "capacity":"5",

                },
                {
                    "name":"g3",
                    "capacity":"5",

                },
                {
                    "name":"g4",
                    "capacity":"5",

                },
            ]
        }
    ];
var Room = React.createClass({
    getInitialState:function(){
        return {
            selected: 'no',
            name:'',
            date:'',
            floor:[],
        }
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
        if (this.state.selected === 'no'){
            this.setState({
                selected: 'yes'
            });
            console.log(e.target.value, this.state.selected);

        } else {
            this.setState({
                selected: 'no'
            })
            console.log(e.target.value,this.state.selected);
        }
        document.getElementById('showTime').innerHTML = $('#selectedFrom ').val() + ' - '+ $('#selectedTo').val()

        document.getElementById('showRoom').innerHTML = e.target.value;

    },
    submit: function () {
        var name =$('#showName').text();
        var floor =$('#showFloor').text()
        var date=$('#showDate').text()
        var time =$('#showTime').text()
        var room =$('#showRoom').text()

        var booking ={
            name:name,
            floor:floor,
            date:date,
            time:time,
            room:room
        }
        console.log(booking)
    },
    render: function () {
        return (
            <div>
                <NavBar/>


                <section className="hero is-fullheight">
                        <div className="container has-text-centered">
                            <div className="row">
                                <div className="column is-three-quarters">
                                    <h1 className="title">
                                        Book a Room
                                    </h1>
                                    <h2 className="subtitle">
                                        Select a floor
                                    </h2>
                                </div>
                            </div>

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

                                    <p className="title">Select a Room</p>
                                    <p className="subtitle">You can only book one room at a time</p>
                                    <div className="columns">
                                        <div className="column is-three-quarters is-primary">

                                            <div className="box rooms">
                                                <label className="label has-text-left">Rooms</label>

                                                <div className="row" >
                                                    { this.state.floor.map((room,index) =>{
                                                        return (


                                                            <div className="col-md-2 roomsCol"  key={index}>
                                                                <button className={"hvr-bounce-in room "  +this.state.selected} onClick={this.selectSeat} value={room.name} key={index}>{room.name}</button>
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
