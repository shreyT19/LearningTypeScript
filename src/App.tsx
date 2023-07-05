import React, { useState } from "react";

import "./App.css";
import InputField from "./components/InputField";

import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  // console.log(todo);

  const handleAddTodos = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos((oldTodos) => [
        ...oldTodos,
        { id: oldTodos.length + 1, todo: todo, isDone: false },
      ]);
      setTodo("");
    }
    // console.log(todos);
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAddTodos={handleAddTodos}
      />
    </div>
  );
};

export default App;
