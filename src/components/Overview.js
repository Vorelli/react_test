import React, { Component } from 'react';
import Task from './Task';

export default class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tasks = this.props.tasks.map((task, index) => {
      return (
        <Task
          key={index + ':' + task}
          task={task}
          index={index}
          submitEdit={this.props.submitEdit.bind(this)}
          deleteTask={this.props.deleteTask.bind(this)}
        />
      );
    });

    return <ul id='taskList'>{tasks}</ul>;
  }
}
