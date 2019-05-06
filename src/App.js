import  React, { Component } from 'react'




class ToDoList extends Component {
  state = {
    tasks: this.props.tasks,
    draft: ''
  }

  updateDraft = (event) => {
    this.setState({draft: event.target.value})
  }

  addToDo = () => {
    const { tasks, draft } = this.state
    const list = tasks 
    list.push(draft)
    this.setState({tasks: list, draft: ''})
  }

  render() {
    const { title } = this.props
    const { tasks, draft } = this.state
    return (
      <div>
        <h1>{title}</h1>
        <input type='text' onChange={this.updateDraft} value={draft}/>
        <button onClick={this.addToDo}>Add</button>
        {tasks.map(task =><div> <p>{task}</p></div>)}
      </div>
    )
  }
}    

class App extends Component {
  myTasks = [
    'Record a ReactJs video',
    'go for a wack',
    'blas'
  ]

  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
        <ToDoList title='My stuff' tasks={this.myTasks}/>
      </div>
    )
  }
}

export default App;

