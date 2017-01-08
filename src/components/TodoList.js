import React, { Component, PropTypes } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  render() {
   const { todos, onTodoClick ,onDeleteClick} = this.props;
   return (
    <table>
      <thead>
        <tr>
          <th>name</th>
        <th>edit</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo =>
            <Todo
              key={todo.id}
              {...todo}
              onClick={() => onTodoClick(todo.id)}
              onDeleteClick={()=>onDeleteClick(todo.id)}
            />
       )}
      </tbody>
    </table>
  )
 }
}
/*const TodoList = ({ todos, onTodoClick ,onDeleteClick}) => (
  
)*/

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

//export default TodoList