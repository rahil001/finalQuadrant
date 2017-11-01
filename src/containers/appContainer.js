import React, {Component} from 'react';
import {connect} from 'react-redux';
import App from '../components/app';
import {loginAction, loggedInUser, filterUserTask, showLoader, showErrorMsg} from '../actions/index';
import {users, tasks} from '../dataStore/data';

let userInfo;

const checkValidUser = () => {

    if (!!userInfo) {
        for (let i = 0; i < users.length; i++) {

            if (users[i].password == userInfo.pwd && users[i].name == userInfo.username) {
                return {id: users[i].id, name: users[i].name};
            }

        }
    }
    return null;
};

const mapStateToProps = (state) => {

    let tasks = state.tasks.tasks || [];
    let formInput = state.form.loginForm && state.form.loginForm.values;
    let isloggedIn = state.login.isLogin;
    let showLoader = state.login.showLoader;
    let showError = state.login.showError;
    passValueToMDTP(formInput);

    return {
        tasks: tasks,
        isloggedIn: isloggedIn,
        showLoader: showLoader,
        showError: showError
    }
};

const mapDispatchToProps = (dispatch) => {

    const login = (e) => {
        e.preventDefault();
        dispatch(showLoader(true));
        dispatch(filterUserTask(checkValidUser() && checkValidUser().id));
        dispatch(loginAction(!!checkValidUser()));
       if(!checkValidUser()){
           dispatch(showErrorMsg(true));
       }
        dispatch(loggedInUser(checkValidUser()));
        setTimeout(()=> {
            dispatch(showLoader(false));
        }, 2000)

    };

    return {
        login: login
    }
};

const passValueToMDTP = (form) => {
    userInfo = form;
};


class AppContainer extends Component {

    render() {

        return (
            <div>
                {this.props.showLoader ? <div className="mask"><img src="/images/Spinner.gif"/></div> : <App {...this.props}/>}
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);