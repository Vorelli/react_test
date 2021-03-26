import React, { Component } from 'react';
import Overview from './Overview';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };
  }

  submitEdit(task, _) {
    this.setState((state, props) => {
      const tasks = state.tasks.slice(0);
      tasks[task.index] = task.task;
      return { tasks };
    });
  }

  submitTask(event) {
    event.preventDefault();
    const taskInput = event.target.querySelector('input#task');
    const task = taskInput.value;
    taskInput.value = '';
    this.setState((state, _) => {
      return { tasks: state.tasks.concat(task) };
    });
  }

  deleteTask(index) {
    this.setState((state, _) => {
      const tasks = state.tasks
        .slice(0, index)
        .concat(state.tasks.slice(index + 1));
      return {
        tasks,
      };
    });
  }

  render() {
    return (
      <div className='app'>
        <form name='taskInput' onSubmit={this.submitTask.bind(this)}>
          <input
            id='task'
            type='text'
            name='task'
            htmlFor='taskInput'
            placeholder='Task'
          />
          <button>Add Task</button>
        </form>
        <Overview
          tasks={this.state.tasks}
          deleteTask={this.deleteTask.bind(this)}
          submitEdit={this.submitEdit.bind(this)}
        />
      </div>
    );
  }
}
