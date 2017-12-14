import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'react-native-elements';
import Todo from './Todo'
 

export default class TodoList extends Component {
    static propTypes = {
        todos: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                completed: PropTypes.bool.isRequired,
                text: PropTypes.string.isRequired
            }).isRequired
        ).isRequired,
        onTodoClick: Proptypes.func.isRequired
      }
    
    render() {
        const { todos, onTodoClick } = this.props;

        return (
            <List>
                {
                    todos.map((todo) => {
                        return (
                            <Todo
                                key = {todo.id}
                                {...todo}
                                onClick={ () => onTodoClick(todo.id) }
                            />
                        );
                    })
                }
            </List>
        )
    }
}