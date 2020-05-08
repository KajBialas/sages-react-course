import React from 'react';
import { connect } from 'react-redux';
import {selectTodosProgress, selecTodosCompleted} from '../modules/todo/todo.selector';

function TodoListComponent({todoList, todoListCompleted, actionMarkTodo}) {
  const renderTodos = (todoList) => todoList.map((todoElement) =>
    <div key={todoElement.id} onClick={() => actionMarkTodo(todoElement.id)}>
      {todoElement.name}
    </div>
  );
  return (
    <div className="App">
      <h2>Lista Todo Aktywnych:</h2>
      {renderTodos(todoList)}
      <h2>Lista Todo Wykonanych:</h2>
      {renderTodos(todoListCompleted)}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todoList: selectTodosProgress(state),
    todoListCompleted: selecTodosCompleted(state),
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actionMarkTodo: (value) => dispatch({type: 'MARK_TODO', todoId: value})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);