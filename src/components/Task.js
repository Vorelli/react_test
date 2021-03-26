import React, { Component } from 'react';

export default class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: props.index,
      task: props.task,
      editing: false,
    };
  }

  submitTaskEdit(index, event) {
    event.preventDefault();
    const taskInput = event.target.parentNode.querySelector('input').value;
    this.props.submitEdit({ index, task: taskInput });
    this.setState({ editing: false });
  }

  editTask(event) {
    event.preventDefault();
    this.setState({ editing: true });
  }

  render() {
    const { index, task } = this.state;
    const displayOrInput = this.state.editing ? (
      <input type='text' name='taskInput' defaultValue={this.state.task} />
    ) : (
      <li>{this.state.task}</li>
    );

    return (
      <form
        name='taskEdit'
        onSubmit={
          this.state.editing
            ? this.submitTaskEdit.bind(this, index)
            : this.editTask.bind(this)
        }
      >
        <div className='task'>
          <button className='editTask'>
            {this.state.editing ? 'Submit' : 'Edit'}
          </button>
          {displayOrInput}
          <button
            className='deleteTask'
            onClick={this.props.deleteTask.bind(this, index)}
            type='button'
          >
            Delete
          </button>
        </div>
      </form>
    );
  }
}
