import {tasks, users} from '../dataStore/data';

const INITIAL_STATE = {tasks: tasks, showFilter: false, taskDetail: null};

export default function (state = INITIAL_STATE, action) {

    const payload = action.payload;

    switch (action.type) {

        case "ADD_NEW":
            return state;
        case "TOGGLE_FILTER":
            return {...state, showFilter: !state.showFilter};
        case "FILTER_TASK":
            return {...state, tasks: payload};
        case "TASK_DETAIL":
            return {...state, taskDetail: payload};
        case "USER_TASK_LIST":
            return {...state, tasks: payload};
        case "EDIT_TASK_STATUS":
            return {...state, tasks: payload};
        default:
            return state;

    }
}
