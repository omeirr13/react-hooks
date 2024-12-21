import React, { useEffect, useReducer, useState } from 'react'
import Todo from './Todo';


export const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  DELETE_TODO: "DELETE_TODO"
}
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id != action.payload.id);
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => (
        todo.id === action.payload.id ? { ...todo, complete: !todo.complete } : todo
      ))
  }
}

function newTodo(name) {
  return { id: Date.now(), name, complete: false };
}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </form>

      {todos.map(todo =>
        <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
      )}
    </div>
  )
}
