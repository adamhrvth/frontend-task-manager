import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { getTask } from '../apiCalls/task';



const ViewTask = () => {
  const [task, setTask] = useState({});

  const { id } = useParams();

  const getFormattedDate = (mongoDBDate) => {
    let date = new Date(mongoDBDate);
    date = date.toLocaleString('en-US', {day:'numeric', month: 'numeric', year:'numeric', hour: 'numeric', minute: 'numeric', second:'numeric'});
    return date;
  };

  const fetchData = async () => {
    const res = await getTask(id);

    if (res.status === 200) {
      setTask(res.data.task);
    }
    else {
      alert(res.response.data.message);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className = "w-4/5 sm:w-3/5 lg:w-2/5 xl:w-1/4 text-center bg-white m-auto rounded py-2 mt-10"
    >
      {task ? 
        <div className = "m-8">
          <h1 className = "text-3xl my-2 font-bold break-words">Title: { task.taskname }</h1>
          <p className = "my-4 text-xl">
            <span className = "font-bold">
              Description: 
            </span> 
            { " " + task.description}
          </p>
          <p className = "my-4 text-xl">
            <span className = "font-bold">
              Completed: 
            </span>
            { task.completed ? " Completed" : " Not completed" }
          </p>
          <p className = "my-4">
            <span className = "font-bold">
              Created: 
            </span>
            { " " + getFormattedDate(task.createdAt)}
          </p>
          <p className = "my-4">
            <span className = "font-bold">
              Updated:  
            </span>
            { " " + getFormattedDate(task.updatedAt)}
          </p>
        </div>
      : ""
      }
    </div>
  )
};

export default ViewTask;