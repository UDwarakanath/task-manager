import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTaskCompletion } from "../features/tasksSlice";
import EditTaskForm from "./EditTaskForm";

const TaskList = ({ filter, sortOrder }) => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editingTaskId, setEditingTaskId] = useState(null);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  const sortedTasks = filteredTasks.sort((a, b) => {
    return sortOrder === "asc"
      ? new Date(a.dateCreated) - new Date(b.dateCreated)
      : new Date(b.dateCreated) - new Date(a.dateCreated);
  });

  return (
    <ul className="task-list">
      {sortedTasks.map((task) => (
        <li
          key={task.id}
          className={`task-item ${task.completed ? "completed" : ""}`}
        >
          {editingTaskId === task.id ? (
            <EditTaskForm task={task} setEditingTaskId={setEditingTaskId} />
          ) : (
            <>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Date Created: {new Date(task.dateCreated).toLocaleString()}</p>
              <div className="button-list">
                <label>
                  Completed:
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => dispatch(toggleTaskCompletion(task.id))}
                  />
                </label>
                <div className="edit-delete">
                  <button
                    className="edit"
                    onClick={() => setEditingTaskId(task.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => dispatch(deleteTask(task.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
