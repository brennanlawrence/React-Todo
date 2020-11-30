import React from "react";
import "./Todo.css";

class Todo extends React.Component {
    render() {
        return(
            <li value={this.props.index} className={this.props.todo.completed ? "completed" : ""} onClick={this.props.handleCheck}>
                {this.props.todo.task}
            </li>
        )
    }
}

export default Todo;