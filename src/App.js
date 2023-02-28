import { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';

import { UserContext } from './context/UserContext';

import { getUser } from './apiCalls/user';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import CreateTask from './pages/CreateTask';
import ChangeSettings from './pages/ChangeSettings';
import UpdatePassword from './pages/UpdatePassword';
import ViewTask from './pages/ViewTask';
import UpdateTask from './pages/UpdateTask';



function App() {
  const { user, setUser } = useContext(UserContext);

  const fetchData = async () => {
    const res = await getUser();
    if (res.status === 200) {
      setUser(res.data.user);
    }
    else {
      setUser({});
    }
    
  };

  // get user on each refresh
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);


  return (
    <div className="App bg-neutral-200">
      <Navbar user = {user} />

      <Routes>
        <Route path = "/" element = {user._id ? <Home /> : <Login />} />
        
        <Route 
          path = "/user/register" 
          element = {user._id ? <Home /> : <Register />}
        />

        <Route 
          path = "/user/login" 
          element = {user._id ? <Home /> : <Login />}
        />

        <Route 
          path = "/user/profile" 
          element = {user._id ? <Profile /> : <Login />} 
        />

        <Route 
          path = "/user/changesettings" 
          element = {user._id ? < ChangeSettings /> : < Login />} 
        />

        <Route 
          path = "/user/updatepassword" 
          element = {user._id ? <UpdatePassword /> : < Login />} />

        <Route 
          path = "/task/create" 
          element = {user._id ? <CreateTask /> : < Login />} />

        <Route 
          path = "/task/view/:id" 
          element = {user._id ? <ViewTask /> : < Login />} />

        <Route 
          path = "/task/update/:id" 
          element = {user._id ? <UpdateTask /> : < Login />} />
      </Routes>
    </div>
  );
}

export default App;
