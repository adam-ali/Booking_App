import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'
import NavBar from './navbar'
import {Button, Card, Row, Col,Input} from 'react-materialize';
var moment = require('moment');
moment().format();

$(document).ready(function(){
    $('select').material_select();
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
            "name":"A1",
            "capacity":"5",

        },
        {
            "name":"A2",
            "capacity":"5",

        },
        {
            "name":"A3",
            "capacity":"5",

        },
        {
            "name":"A4",
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
            "name":"A",
            "capacity":"5",

        },
        {
            "name":"CC",
            "capacity":"5",

        },

        {
            "name":"R4",
            "capacity":"5",

        },
        {
            "name":"M6",
            "capacity":"5",

        },
        {
            "name":"M1",
            "capacity":"5",

        },
        {
            "name":"M4",
            "capacity":"5",

        },
        {
            "name":"M9",
            "capacity":"5",

        },
        {
            "name":"00",
            "capacity":"7"
        }
    ]

var Room = React.createClass({
    componentDidMount() {
        // Use Materialize custom select input
        $(this.refs.yourSelectTag).material_select(this._handleSelectChange.bind(this));
    },
    getInitialState:function(){
        return {
            selected: 'no',
            name:'',
            date:''
        }
    },
    enterName:function (e) {
        document.getElementById('showName').innerHTML = 'Name: '+ $("#selectedName").val()

        this.setState({
            name: e.target.value
        })
    },
    enterDate:function (e) {
        this.setState({
            date: e.target.value
        });
        document.getElementById('showDate').innerHTML = 'Date: '+document.getElementById('selectedDate').value;

    },
    enterFloor:function (e) {
        console.log(e.target);
        this.setState({
            floor: e.target.value
        });
        document.getElementById('showFloor').innerHTML = 'Flooor: '+$( "#selectedFloor option:selected" ).text();

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
        document.getElementById('showTime').innerHTML = 'Time: '+$('#selectedFrom ').val() + ' - '+ $('#selectedTo').val()

        document.getElementById('showRoom').innerHTML = 'Room: ' +e.target.value;



    },

    render: function () {
        return (
            <div>
                <NavBar/>



                        <div className="container has-text-centered">
                            <h1 className="title">
                                Book a Room
                            </h1>
                            <h2 className="subtitle">
                                Select a floor and time
                            </h2>
                            <div className="tile is-parent ">
                                <article className="tile is-child notification bookingBox">

                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="input-field ">
                                                <label htmlFor="selectedName">Name</label>
                                                <input id="selectedName" onChange={this.enterName} type="text" className="validate" />
                                            </div>
                                        </div>
                                        <div className="col-md-2">

                                            <Row>
                                                <Input s={12} type='select' onChange={this.enterFloor} id="selectedFloor" label="Materialize Select">
                                                    <option value='1'>Option 1</option>
                                                    <option value='2'>Option 2</option>
                                                    <option value='3'>Option 3</option>
                                                </Input>
                                            </Row>

                                            <div className="input-field">
                                                <select className="" onChange={this.enterFloor} id="selectedFloor">
                                                    <option value="" disabled>Select floor</option>
                                                    <option value="G">G</option>
                                                    <option value="1">1</option>
                                                </select>
                                                <label >Floor</label>

                                            </div>

                                        </div>
                                        <div className="col-md-3">
                                            <label className="label">Date</label>
                                            <input className="input " id="selectedDate" onChange={this.enterDate} min={moment().format("YYYY-MM-DD")} type="date" placeholder="Date" />

                                        </div>

                                        <div className="col-md-2">
                                            <label className="label">From</label>

                                            <input className="input selectedFrom" id="selectedFrom"  />

                                        </div>
                                        <div className="col-md-2">
                                            <label className="label">To</label>
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
                                                    { Building1.map((room,index) =>{
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
                                            <p className="subtitle has-text-left" id="showName">Name:</p>
                                            <p className="subtitle has-text-left" id="showFloor">Floor:</p>
                                            <p className="subtitle has-text-left" id="showDate">Date:</p>
                                            <p className="subtitle has-text-left" id="showTime">Time:</p>
                                            <p className="subtitle has-text-left" id="showRoom">Room:</p>

                                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                                <i className="material-icons right">send</i>
                                            </button>
                                        </div>
                                    </div>

                                </article>
                            </div>
                        </div>


            </div>
        )
    }
});

module.exports =Room;
