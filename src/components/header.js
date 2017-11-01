import React, {Component} from 'react';


export default class Header extends Component {


    render(){

        return (
            <div>
                <h4 className="taskTitle">Username: <b>{this.props.username}</b></h4>
                <h4 className="taskTitle">Task Lists</h4>
                <div className="filter fr" onClick={this.props.toggle}><img className="filterImg"
                                                                            src="/images/filter.png"/></div>
                {
                    this.props.showfilter ? <div className="filter-options">
                        <ul>
                            <li onClick={()=> {this.props.filterTask('ALL')}}>All</li>
                            <li onClick={()=> {this.props.filterTask('ASSIGNED')}}>Assigned</li>
                            <li onClick={()=> {this.props.filterTask('FINISHED')}}>Finished</li>
                        </ul>
                    </div> : null
                }
            </div>
        )
    }
}
