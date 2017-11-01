import React, { Component } from 'react';
import Tasks from '../components/tasks';
import {toggleFilter, filterTaskItem, showTaskDetails, showLoader, editTaskStatus} from '../actions/index';
import Header from '../components/header';
import TaskDetail from '../components/taskDetail';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {

    let loggedInUser = state.login && state.login.loggedInUser;
    let userId = loggedInUser && loggedInUser.id;
    let username = loggedInUser && loggedInUser.name;
    let showfilter = state.tasks.showFilter;
    let tasksList = state.tasks.tasks;
    let taskDetail = state.tasks.taskDetail;

    return {
        tasks: tasksList,
        userId: userId,
        username: username,
        showfilter: showfilter,
        taskDetail: taskDetail
    }

};

const mapDispatchToProps = (dispatch) => {

    const toggle = () => {
        dispatch(toggleFilter())
    };

    const filterTask = (filterName) => {
        dispatch(filterTaskItem(filterName))
    };

    const cardClickHandler = (taskId) => {
        dispatch(showLoader(true));
        dispatch(showTaskDetails(taskId));
        setTimeout(()=> {
            dispatch(showLoader(false));
        }, 2000)
    };

    const backToListHandler = () => {
        dispatch(showTaskDetails());
    };

    const onInputTaskChange = (value, taskId, userId) => {
        dispatch(editTaskStatus(value, taskId, userId));

    };

    return {
        toggle: toggle,
        filterTask: filterTask,
        cardClickHandler: cardClickHandler,
        backToListHandler: backToListHandler,
        onInputTaskChange: onInputTaskChange
    }

};

class TaskContainer extends Component {

    render() {

        return (
            !!this.props.taskDetail ?
                <div><h1 className="task-detail-text">Task Detail</h1><TaskDetail task={this.props.taskDetail}
                                                                                  user={this.props.username}
                                                                                  backToListHandler={this.props.backToListHandler}
                                                                                  onInputTaskChange={this.props.onInputTaskChange} userId={this.props.userId}/>
                </div> :
                <div className="task-wrapper">
                    <Header {...this.props}/>
                    <Tasks {...this.props}/>
                </div>


        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);