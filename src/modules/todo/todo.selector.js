export const selectTodosProgress = (state) =>
  state.todo.todo.filter(element => !element.completed);

export const selecTodosCompleted = (state) =>
  state.todo.todo.filter(element => element.completed);