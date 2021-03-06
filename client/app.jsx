import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'
import Index from './pages/index.jsx'
import rooms from './pages/rooms.jsx'
import ViewBookings from './pages/viewBookings.jsx'
import DeleteBooking  from './pages/deleteBooking.jsx'
import ReactDOM from 'react-dom';


var App = React.createClass({
    render: function () {

        return (
            <Router history={hashHistory}>
                <Route path="/" component={Index}/>
                <Route path="/book" component={rooms}/>
                <Route path="/delete" component={DeleteBooking}/>
                <Route path="/view" component={ViewBookings}/>
            </Router>
        )
    }
});
ReactDOM.render(<App />, document.getElementById('app'));