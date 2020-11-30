import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function createObject(task) {

  const dataShape = {
  task: task,
  id: Date.now(),
  completed:false,
  }

  return dataShape;
} 


const initialFormData = "";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  changeHandler = (event) => {
    this.setState({formData:event.target.value});
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.setState({ currentList: [...this.state.currentList, createObject(this.state.formData)] });
    this.setState({ formData: initialFormData})
  }

  checkHandler = (item) => {
    const val = item.target.value;
    const newCurrentList = this.state.currentList.map(x=>x);
    if(newCurrentList[val].completed){
      newCurrentList[val].completed = false;
    } else {
      newCurrentList[val].completed = true;
    }
    

    this.setState({
      currentList: newCurrentList
    });
  }

  completedHandler = (item) => {
    const newList = this.state.currentList.filter(item=>{
      return(!item.completed);
    });
    this.setState({
      currentList: newList
    })
  }

  constructor() {
    super();
    this.state = {
      formData: initialFormData,
      currentList: [],
    }
  }
  render() {
    return (
      <div>
        <h2>TodoMan</h2>
        <TodoList theList={this.state.currentList} handleCheck={this.checkHandler}/>
        <TodoForm change={this.changeHandler} submit={this.submitHandler} value={this.state.formData} handleCompleted={this.completedHandler}/>
      </div>
    );
  }
}

export default App;
