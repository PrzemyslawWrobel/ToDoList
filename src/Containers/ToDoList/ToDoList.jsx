import  React, { Component } from 'react'

import ToDoItem from '../../Components/ToDoItem/ToDoItem'
import NewTodoForm from '../../Components/NewTodoForm/NewTodoForm'

class ToDoList extends Component {
    static defaultProps = {
      tasks: [
        {done: true, text: 'Record a ReactJs video'},
        {done: false, text: 'go for a wack'},
        {done: false, text: 'blas'}
      
      ],
      title: 'Jtools'
    }

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
      list.push({text: draft, done: false})
      this.setState({tasks: list, draft: ''})
    }
  
    render() {
      const { title } = this.props
      const { tasks, draft } = this.state
      return (
        <div>
          <h1>{title}</h1>
          <NewTodoForm
            onSubmit={this.addToDo}
            onChange={this.updateDraft}
            draft={draft} />
          {tasks.map(task => <ToDoItem text={task.text} done={task.done} />)}
        </div>
      )
    }
}

export default ToDoList