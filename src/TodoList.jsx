import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTaskVal = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((preTodo) => todos.filter((preTodo) => preTodo.id != id));
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  //
  let UpperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  //
  let taskMark = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone,
            
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <>
      <div>
        <input
          placeholder="add a task"
          value={newTodo}
          onChange={updateTaskVal}
        />
        <button onClick={addNewTask}>Add a Task</button>
        <br /> <br /> <br />
        <hr />
        <h4>Tasks Todo</h4>
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>

                
                  <span
          style={{
            textDecoration: todo.isDone ? "line-through" : "none",
          }}
        >
          {todo.task}
        </span>


                &nbsp; &nbsp; &nbsp;
                <button onClick={() => deleteTodo(todo.id)}>delete</button>
                &nbsp; &nbsp; &nbsp;
                <button onClick={() => UpperCaseOne(todo.id)}>
                  UpperCaseOne
                </button>
                &nbsp; &nbsp; &nbsp;
                <button onClick={() => taskMark(todo.id)}> {todo.isDone ? "Undo" : "Done Task"}</button>
              </li>
            );
          })}
        </ul>
        <br />
        <button onClick={upperCaseAll}>UpperCase All</button>
      </div>
    </>
  );
}
