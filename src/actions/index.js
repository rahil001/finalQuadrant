import {tasks} from '../dataStore/data';
let userTaskList;
export function loginAction(data) {

    return {
        type: "LOGIN_ACTION",
        payload: data
    }
}

export function loggedInUser(data) {
    return {
        type: "LOGGEDIN_USER",
        payload: data
    }
}

export function toggleFilter() {

    return {
        type: "TOGGLE_FILTER"
    }
}

export function filterUserTask(id) {
    userTaskList = getUserTaskList(tasks, id);
    return {
        type: 'USER_TASK_LIST',
        payload: userTaskList
    };
}

export function filterTaskItem(filterName) {

    return {
        type: "FILTER_TASK",
        payload: getFilteredUserTask(filterName, userTaskList)
    }
}

const getFilteredUserTask = (filterName, userTaskList) => {

    if (filterName.toLowerCase() === 'all') {
        return userTaskList;
    }

    else return userTaskList.filter((task)=> {

        if (task.status === filterName.toLowerCase()) {
            return task
        }
    });
};

export function showTaskDetails(taskId) {
    return {
        type: "TASK_DETAIL",
        payload: getTaskDetail(taskId)
    }
}

export function showLoader(data){

    return {
        type: "SHOW_LOADER",
        payload: data
    }
}

export function showErrorMsg(data){

    return {
        type: 'SHOW_ERROR',
        payload: data
    }
}

export function editTaskStatus(value, taskId, userId){

    return {
        type: "EDIT_TASK_STATUS",
        payload: editTaskValueForAUser(getUserTaskList(tasks, userId), taskId, value)
    }
}

const getTaskDetail = (taskId) => {
    if(!taskId)
        return;

    return tasks.filter((task)=> {
        if(task.id === taskId){
            return task;
        }
    })

};

const editTaskValueForAUser = (taskList, taskId, value) => {
      taskList.forEach((task)=> {
          if(task.id === taskId){
            task.status = value;
          }
      });
    return taskList;
};

// function to get list of task for loggedIn User
const getUserTaskList = (tasks, userId)=> {

    let userTask = tasks.filter((task)=> {
        if (task.assignee === userId)
            return task;
    });

    return userTask;
};
