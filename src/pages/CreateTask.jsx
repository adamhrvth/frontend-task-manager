import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createTask } from '../apiCalls/task';



const CreateTask = () => {
  const [taskname, setTaskname] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {
      "taskname": taskname,
      "description": description
    };

    const res = await createTask(data);

    if (res.status === 201) {
      alert("Task created successfully.");
      navigate("/");
    }
    else {
      alert(res.response.data.message);
    }
  }

  return (
    <div className = "w-4/5 sm:w-3/5 lg:w-2/5 xl:w-1/4 m-auto text-center">
      <h1 className = "text-3xl mt-6 mb-12 font-bold">
        Create task
      </h1>
      <form onSubmit = { handleSubmit }>
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

        <button 
          type = "submit"
          className = "bg-black text-white w-full py-2 hover:bg-neutral-700"
        >
          Create
        </button>
      </form>
    </div>
  )
};

export default CreateTask;