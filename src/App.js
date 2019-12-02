import React, { Component } from 'react';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import Auth from './components/Auth';

export class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'To watch movie',
        completed: false,
        owner: 1
      },
      {
        id: 2,
        title: 'Make Assignment',
        completed: false,
        owner: 1
      },
      {
        id: 3,
        title: 'To meet my Boss',
        completed: false,
        owner: 2
      }
    ],
    registeredUsers: [
      {
        userId: 1,
        username: 'husmukh',
        password: '12345'
      },
      {
        userId: 2,
        username: 'mpemba',
        password: 'test123'
      }
    ],
    isLogin: false,
    loggedUser: {}
  };

  handleSave = ({ title, owner }) => {
    const todo = {
      id: this.state.todos.length + 1,
      title,
      completed: false,
      owner
    };

    this.setState({ todos: [...this.state.todos, todo] });
  };

  handleDelete = id => {
    if (window.confirm('are you sure')) {
      const todos = this.state.todos.filter(todo => todo.id !== id);
      this.setState({ todos });
    }
  };

  handleRegister = ({ username, password }) => {
    const users = this.state.registeredUsers;
    const user = {
      userId: users.length + 1,
      username,
      password
    };

    this.setState({ registeredUsers: [...users, user] });
    this.setState({ loggedUser: user });
    this.setState({ isLogin: true });
  };

  handleLogin = ({ username, password }) => {
    const loggedUser = this.state.registeredUsers.filter(
      user => user.username === username && user.password === password
    );

    if (loggedUser.length === 0) {
      alert('Incorrect username or password');
    } else {
      this.setState({ loggedUser: loggedUser[0] });
      this.setState({ isLogin: true });
    }
  };

  handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      this.setState({ isLogin: false });
    }
  };

  render() {
    if (this.state.isLogin) {
      return (
        <>
          <Navbar onLogout={this.handleLogout} user={this.state.loggedUser} />
          <div className="wrapper">
            <TodoForm user={this.state.loggedUser} onSave={this.handleSave} />
            <TodoList
              todos={this.state.todos}
              user={this.state.loggedUser}
              onDelete={this.handleDelete}
            />
          </div>
        </>
      );
    } else {
      return (
        <Auth addUser={this.handleRegister} loginUser={this.handleLogin} />
      );
    }
  }
}

export default App;
