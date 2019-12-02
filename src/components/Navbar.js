import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="logo">TODO APP</li>
          <li>
            Welcome: {this.props.user.username} |
            <button
              style={{ marginLeft: 5 }}
              onClick={() => this.props.onLogout()}
              className="btn btn-delete"
            >
              logout
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
