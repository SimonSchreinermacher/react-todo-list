import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Control from '../components/control.js'
import React from 'react'

class Home extends React.Component {

  render(){
    return(
      <div>
        <Control></Control>
      </div>
    );
  }
}

export default Home;
