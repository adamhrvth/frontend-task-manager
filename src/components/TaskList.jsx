import React, { useContext, useEffect} from 'react';
import { getTasks } from '../apiCalls/task';
import { TaskContext } from '../context/TaskContext';
import TaskItems from './TaskItems';
import plusIcon from '../media/icons8-plus-math-90.png';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const { task, setTask } = useContext(TaskContext);

  const fetchData = async () => {
    const res = await getTasks();

    if (res.status === 200) {
      setTask(res.data.tasks);
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
    <div className = "w-4/5 m-auto flex flex-wrap justify-center gap-5">
      {
        task.length > 0 && task.map(item => {
          return <TaskItems key = { item._id } item = { item } />
        })
      }
      <Link
        to = "/task/create"
      >
        <div className = "w-64 h-48 bg-white rounded-md p-2">
          <p className = "text-2xl m-3 font-bold">Create new</p>
          <img 
            className = "m-auto mt-8"
            src = {plusIcon} alt = "plus-icon" width = {60}
          />
        </div>
      </Link>
    </div>
  )
};

export default TaskList;