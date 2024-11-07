import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilters from "./components/TaskFilters";
import "./styles.css";
import { useDispatch } from "react-redux";
import { clearTasks } from "./features/tasksSlice";

const App = () => {
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");

  const dispatch = useDispatch();

  const clearAllTasks = () => {
    dispatch(clearTasks());
  };

  return (
    <div className="app">
      <h1>Task Management</h1>
      <TaskForm />
      <TaskFilters
        setFilter={setFilter}
        setSortOrder={setSortOrder}
        clearAllTasks={clearAllTasks}
      />
      <TaskList filter={filter} sortOrder={sortOrder} />
    </div>
  );
};

export default App;
