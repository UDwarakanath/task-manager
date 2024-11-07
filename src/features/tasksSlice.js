import { createSlice } from "@reduxjs/toolkit";

const loadTasksFromStorage = () => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
};

const saveTasksToStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: loadTasksFromStorage(),
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      saveTasksToStorage(state);
    },
    deleteTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
      saveTasksToStorage(state);
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        saveTasksToStorage(state);
      }
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.title = title;
        task.description = description;
        saveTasksToStorage(state);
      }
    },
    clearTasks: (state) => {
      const newState = [];
      saveTasksToStorage(newState);
      return newState;
    },
  },
});

export const {
  addTask,
  deleteTask,
  toggleTaskCompletion,
  editTask,
  clearTasks,
} = tasksSlice.actions;
export default tasksSlice.reducer;
