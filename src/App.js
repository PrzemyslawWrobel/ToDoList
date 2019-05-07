import  React, { Component } from 'react'
import './App.css'
import ToDoList from '../src/Containers/ToDoList/ToDoList'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1>Hello Service</h1>
        <ToDoList />
      </div>
    )
  }
}

export default App;

