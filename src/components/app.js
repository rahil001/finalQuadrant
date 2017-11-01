import React, { Component } from 'react';
import Login from '../components/login'
import TaskContainer from '../containers/taskContainer';

export default class App extends Component {

    render() {
        return (
            <div>
                {this.props.isloggedIn ? <TaskContainer/> : <Login {...this.props}/>}
            </div>
        );
    }
}