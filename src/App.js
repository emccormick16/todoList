import "./App.css";
import SingleTodo from "./SingleTodo";
import { useState } from "react";

const dummyData = [
  "Get Halloween costume",
  "Scare children",
  "Steal candy fom the children",
  "Eat all the candy",
];

function App() {
  const [todos, setTodos] = useState(dummyData);
  return (
    <div className="App">
      <header className="Header">Todo List</header>
      <div>
        {todos.map((todo) => (
          <SingleTodo key={todo} todoName={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
