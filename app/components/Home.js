// @flow
import { ipcRenderer } from 'electron';
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';

ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg) // prints "pong"
})

export default class Home extends Component {
  openWindow() {
    ipcRenderer.send('asynchronous-message', 'ping')
  }

  render() {
    return (
      <div>
        <button onClick={this.openWindow}>Open Winodw</button>
        <div className={styles.container}>
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
