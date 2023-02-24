import React from 'react'

import TaskList from '../components/TaskList';



const Home = () => {
  return (
    <div className = "w-5/6 m-auto text-center">
      <h1 className = "text-3xl mt-6 mb-12 font-bold">Tasks</h1>
      <TaskList />
    </div>
  )
}

export default Home;