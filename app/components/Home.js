import { ipcRenderer } from 'electron';
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';

export default class Home extends Component {
  state = { movie: {} }
  
  constructor(props) {
    super(props)

    ipcRenderer.on('movie-loader', (event, response) => {
      console.log('loading')
    })

    ipcRenderer.on('movie-fetched', (event, response) => {
      console.log('movie-fetched')
      console.log(response)

      this.setState({
        movie: response
      })
    })
  }

  loadData = () => {
    this.setState({
      movie: {}
    })

    ipcRenderer.send('crawl-movie', 'tt1345836')
  }

  render() {
    return (
      <div>
        <button onClick={this.loadData}>Load Data</button>
        
        {this.state.movie.title && <h1>{this.state.movie.title}</h1>}
        {this.state.movie.poster && <div><img src={'data:image/png;base64,' + this.state.movie.poster} alt="" /></div>}
        

        <div className={styles.container}>
          <h2>Home</h2>
          
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
