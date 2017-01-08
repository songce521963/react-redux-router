import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text,onDeleteClick }) => (
	<tr>
		<td
		    onClick={onClick}
		    style={{
		      textDecoration: completed ? 'line-through' : 'none'
		    }}
		  >
    	{text}
  		</td> 
		<td>
		  	<button onClick={onDeleteClick} >delete</button>
		</td>
	</tr>
  

)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo