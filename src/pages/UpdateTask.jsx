import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { updateTask } from '../apiCalls/task';

import { TaskContext } from '../context/TaskContext';



const UpdateTask = () => {
  const { task } = useContext(TaskContext);

  const { id } = useParams();

  const currentTask = task.find((task) => task._id === id);

  const [taskname, setTaskname] = useState(currentTask.taskname);
  const [description, setDescription] = useState(currentTask.description);
  const [completed, setCompleted] = useState(currentTask.completed);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      "taskname": taskname,
      "description": description,
      "completed": completed
    };

    const res = await updateTask(id, data);

    if (res.status === 200) {
      alert("Update successful.");
      navigate("/");
    }
    else {
      alert(res.response.data.message);
    }
  }

  return (
    <div className = "w-4/5 sm:w-3/5 lg:w-2/5 xl:w-1/4 m-auto text-center" >
      <h1 className = "text-3xl mt-6 mb-12 font-bold">Update task</h1>
      <form
        onSubmit = {handleSubmit}
      >
        <div className="mb-3">
          <input 
            type = "text"
            placeholder = "Title"
            className = "focus:outline-none border-none p-2 rounded w-full"
            value = { taskname }
            onChange = { e => setTaskname(e.target.value) }
          />
        </div>

        <div className="mb-3">
          <textarea
            placeholder = "Description..."
            className = "focus:outline-none border-none p-2 rounded w-full"
            cols = "30"
            rows = "5"
            value = { description }
            onChange = {(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className = "mb-3">
          <select
            className = "focus:outline-none border-none p-2 rounded w-full"
            value = { completed }
            onChange = {(e) => setCompleted(e.target.value)}
          >
            <option value = "false">Not completed</option>
            <option value = "true">Completed</option>
          </select>
        </div>

        <button 
          type = "submit"
          className = "bg-black text-white w-full py-2 hover:bg-neutral-700"
        >
          Update
        </button>
      </form>
    </div>
  )
};

export default UpdateTask;