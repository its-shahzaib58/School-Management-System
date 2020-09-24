import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import List from './List';
import Add from './Add';
class Index extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className="mt-2 p-2">
                    <Link className="btn btn-primary" to="/lists" >List </Link>
                    <Link className="btn btn-success ml-2" to="/lists/add" >Add User </Link>
                    <Route exact path="/lists" component={List} />
                    <Route exact path="/lists/add" component={Add} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default Index;
