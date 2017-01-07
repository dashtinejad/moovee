import { ipcRenderer } from 'electron';
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';

export default class Home extends Component {
  constructor(props) {
    super(props)

    ipcRenderer.on('movie-loader', (event, response) => {
      console.log('loading')
    })

    ipcRenderer.on('movie-fetched', (event, response) => {
      this.setState({
        movie: response
      })
    })

    this.state = {
      movie: {
        
      }
    }
  }

  loadData() {
    ipcRenderer.send('crawl-movie', 'tt1345836')
  }

  render() {
    return (
      <div>
        <button onClick={this.loadData}>Load Data</button>
        
        <h1>{this.state.movie.title}</h1>
        

        <div className={styles.container}>
          <h2>Home</h2>
          
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
