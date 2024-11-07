import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../features/tasksSlice";

const EditTaskForm = ({ task, setEditingTaskId }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTask({ id: task.id, title, description }));
    setEditingTaskId(null);
  };

  return (
    <form onSubmit={handleSubmit} className="task-form edit-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <div className="edit-form-buttons">
        <button type="submit">Save</button>
        <button type="button" onClick={() => setEditingTaskId(null)}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditTaskForm;
