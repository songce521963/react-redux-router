import { combineReducers } from 'redux'
import { todos, visibilityFilter } from './App'

const reduces = {
	todos,
  	visibilityFilter
}

export default combineReducers({
  	...reduces
})