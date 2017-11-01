import React, { Component } from 'react';


export default class Tasks extends Component {

    render() {
        return (
            <div className="card-deck">
                {this.props.tasks.map((task) => {
                    return <div className="card" key={task.id} onClick={()=> {this.props.cardClickHandler(task.id)}}>
                        <div className="card-block">
                            <h4 className='card-title'>{task.title}</h4>
                            <div className='card-text'>{task.description}</div>
                            <div className="card-footer">
                                <div className='card-text'>
                                    <small>Deadline : {task.finishBy}</small>
                                </div>
                                <div className='card-text'>
                                    <small>status : {task.status}</small>
                                </div>
                            </div>
                        </div>

                    </div>
                })}
            </div>
        );
    }
}