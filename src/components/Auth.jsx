import React, { useState } from 'react';

const Auth = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    const user = { username, password };
    isLogin ? props.loginUser(user) : props.addUser(user);
  };

  const changeUsername = e => {
    setUsername(e.target.value);
  };

  const changePassword = e => {
    setPassword(e.target.value);
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          onChange={changeUsername}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={changePassword}
        />
        <button className="btn login-button">
          {isLogin ? 'Login' : 'Sign up'}
        </button>
        <button onClick={handleToggle} type="button" className="auth-toggler">
          {isLogin ? 'Create an account' : 'Login instead'}
        </button>
      </form>
    </div>
  );
};

export default Auth;
