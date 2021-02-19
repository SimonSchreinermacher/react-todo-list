import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Control from '../components/control.js'
import React from 'react'

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items : [],
      newItemName : "",
      id: ""
    }
  }

  generateRandomId(){
    return Math.floor(Math.random() * 1000000)
  }

  addItemToList(e){
    e.preventDefault();
    const newItem = {
      name : this.state.newItemName,
      id: this.generateRandomId()
    };
    const newItemList = [...this.state.items, newItem]
    this.setState({
      items : newItemList,
      newItemName : "",
      id : ""
    });
    console.log(this.state.items)
  }

  updateControlInput(e){
    this.setState({newItemName : e.target.value});
    console.log(this.state.newItemName)
  }

  render(){
    return(
      <div>
        <Control itemname = {this.state.newItemName} updateinput = {this.updateControlInput.bind(this)} addtolist = {this.addItemToList.bind(this)} ></Control>
      </div>
    );
  }
}

export default Home;
