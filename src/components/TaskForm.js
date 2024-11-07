import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasksSlice";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    dispatch(
      addTask({
        id: Date.now(),
        title,
        description,
        dateCreated: new Date().toISOString(),
        completed: false,
      })
    );

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
