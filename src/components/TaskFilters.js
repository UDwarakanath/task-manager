import React from "react";

const TaskFilters = ({ setFilter, setSortOrder, clearAllTasks }) => {
  return (
    <div className="filters">
      <div>
        <label>Filter by: </label>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>

      <div>
        <label>Sort by Date: </label>
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <button onClick={() => clearAllTasks()}>Clear</button>
    </div>
  );
};

export default TaskFilters;
