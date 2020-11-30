import React from "react";

class TodoForm extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.submit}>
                <input placeholder="Add Todo" onChange={this.props.change} value={this.props.value}/>
                <button>Add Todo</button>
                <button type="button" onClick={this.props.handleCompleted}>Clear Completed</button>
            </form>
            
        );
    }
}

export default TodoForm;