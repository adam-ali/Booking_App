import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'
import Index from './pages/index.jsx'
import rooms from './pages/rooms.jsx'
import addRoom  from './pages/addRoom.jsx'
import ReactDOM from 'react-dom';


var App = React.createClass({
    render: function () {

        return (
            <Router history={hashHistory}>
                <Route path="/" component={Index}/>
                <Route path="/rooms" component={rooms}/>
                <Route path="/addRoom" component={addRoom}/>
            </Router>
        )
    }
});
ReactDOM.render(<App />, document.getElementById('app'));