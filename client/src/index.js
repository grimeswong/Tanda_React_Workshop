import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';
import styles from './styles.module.css';


class Login extends React.Component {
  state = {email: '', password: ''};

  onEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit = () => {
    alert(`Hello + ${this.state}`);
    const { email, password } = this.state
    axios.post(
      'http://social.workshops.tanda.co/login',
       {email, password}
    ).then(res => {
      console.log(res)
      setTimeout(() => {
        this.setState({
          token: res.data.token,
        });
      }, 1000);
    })
    .catch((e) => {
      console.log(e);
      alert('Login Failed');
    });
  }

  render() {
    const color = t ? 'green' : 'blue';
    t = !t;
    return (
      <div style=({backgroundColor: color})>
        <h1>Tanda Social Network</h1>
        <input
          onChange={this.onEmailChange} value={ this.state.email }
          placeholder="Email"
          value={this.state.email}
        />
        <input
          onChange={this.onPasswordChange} value={ this.state.password }
          placeholder="Password"
          value={this.state.password}
        />
      <button onClick={this.onSubmit}>
          Submit
        </button>

    </div>
    );
  }
}

ReactDOM.render(
    <div className={styles.app}>
      <Login />
    </div>,
    document.getElementById('root')
    );

registerServiceWorker();
