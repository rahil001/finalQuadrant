import React from 'react';

const TaskDetail = (props) => {

    let task = props.task[0];
    return (
        <div className="task-container">
            <div className="back" onClick={()=> {props.backToListHandler(task.id)}}>&lt;<span className="Back-to-list"> Back To Tasks</span></div>
            <div className="task-info">
                <span className="task-key">Task Id</span>
                <span className="task-value">{task.id}</span>
            </div>
            <div className="task-info">
                <span className="task-key">Title</span>
                <span className="task-value">{task.title}</span>
            </div>
            <div className="task-info">
                <span className="task-key">Description</span>
                <span className="task-value">{task.description}</span>
            </div>
            <div className="task-info">
                <span className="task-key">Finish By</span>
                <span className="task-value">{task.finishBy}</span>
            </div>
            <div className="task-info">
                <span className="task-key">Status</span>
                {task.status !== 'finished'? <input className="task-input" placeholder={task.status} onChange={(e)=> {props.onInputTaskChange(e.target.value, task.id, props.userId)}}/>: <span className="task-value">{task.status}</span>}
            </div>
            <div className="task-info">
                <span className="task-key">Assignee</span>
                <span className="task-value">{props.user}</span>
            </div>

        </div>
    )
};

export default TaskDetail;