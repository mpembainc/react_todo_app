import React, { Component } from 'react';

export class TodoForm extends Component {
  state = {
    todo: {
      title: '',
      owner: ''
    }
  };
  handleChange = e => {
    this.setState({
      todo: { title: e.target.value, owner: this.props.user.userId }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSave(this.state.todo);
    this.setState({ todo: { title: '' } });
  };

  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.todo.title}
            name="title"
            onChange={this.handleChange}
            required
          />
          <button className="btn submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
