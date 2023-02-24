import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteTask } from '../apiCalls/task';

const TaskItems = ({ item }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (window.confirm("This is a destructive operation and can not be undone. Are you sure?")) {
      const res = await deleteTask(item._id);

      if (res.status === 200) {
        alert(res.data.message);
        window.location.reload();
      }
      else {
        alert(res.response.data.message);
      }
    }
  };

  return (
    <div className = "w-64 h-48 bg-white flex-col rounded-md p-2 px-2">
      <p className = "text-clip overflow-hidden text-2xl m-3 font-bold">{ item.taskname }</p>
      <p className = "m-3 text-xl">{ item.completed ? "Completed" : "Not completed" }</p>
      <div className = "flex gap-2 p-3 pt-5 justify-center">
        <button 
          className="bg-black text-white px-2 py-1.5 rounded text-xl"
          onClick = {() => navigate(`/task/view/${item._id}`)}
        >
          View
        </button>
        <button 
          className="bg-yellow-500 text-white px-2 py-1.5 rounded text-xl"
          onClick = {() => navigate(`/task/update/${item._id}`)}
        >
          Update
        </button>
        <button
          className="bg-red-600 text-white px-2 py-1.5 rounded text-xl"
          onClick = { handleDelete }
        >
          Delete
        </button>
      </div>
    </div>
  )
};

export default TaskItems;