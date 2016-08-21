import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'
import NavBar from './navbar'

var Building1 =
[
    {
        "name":"A1",
        "capacity":"5",

    },
    {
        "name":"A1",
        "capacity":"5",

    },
    {
        "name":"A1",
        "capacity":"5",

    },

    {
        "name":"A1",
        "capacity":"5",

    },
    {
        "name":"A2",
        "capacity":"7"
    }
]

var Room = React.createClass({
    getInitialState:function(){
        return {
            selected: 'no'
        }
    },
    selectSeat:function (e) {
        if (this.state.selected === 'no'){
            this.setState({
                selected: 'yes'
            });
            console.log(e.target);

        } else {
            this.setState({
                selected: 'no'
            })
            console.log(e.target);
        }
    },

    render: function () {
        return (
            <div>
                <NavBar/>

                <div className="container">
                    <div className="hero-body ">
                        <div className="container has-text-centered">
                            <h1 className="title">
                                Book a Room
                            </h1>
                            <h2 className="subtitle">
                                Select a floor and time
                            </h2>
                            <div className="tile is-parent">
                                <article className="tile is-child notification is-primary">

                                    <div className="control is-grouped">
                                        <p className="control is-expanded">
                                            <label className="label form">Floor</label>
                                            <select name="cars" className="input">
                                                <option value="Select">0</option>
                                                <option value="1">1</option>
                                            </select>
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
                                        <div className="column is-three-quarters is-primary">

                                            <div className="box rooms">
                                                <label className="label has-text-left">Rooms</label>
                                                <div className="columns">

                                                    { Building1.map((floor,index) =>{
                                                        return (
                                                            <div className="  column is-3 " onClick={this.selectSeat} key={index}>
                                                                <cell className={"hvr-bounce-in room "  +this.state.selected} data={"A"+index} key={index}>{"A"+index}</cell>
                                                            </div>


                                                        )

                                                    })}
                                             </div>
                                            </div>

                                        </div>
                                        <div className="column">
                                            <p className="subtitle ">Floor:</p>
                                            <p className="subtitle has-text-left">Date:</p>
                                            <p className="subtitle has-text-left">Time:</p>
                                            <p className="subtitle has-text-left">Room:</p>

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
