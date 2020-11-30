// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
    render() {
        return(
            <div>
                <h3>Current Todos</h3>
                <ul>
                    {this.props.theList.map((e) => {
                        return(
                            <Todo index={this.props.theList.indexOf(e)} todo={e} key={e.id} handleCheck={this.props.handleCheck}/>
                        );
                    })
                    }
                </ul> 
            </div>
            
        )
    }
}

export default TodoList;