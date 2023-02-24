import { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import FreeRoutes from './components/FreeRoutes';
import ProtectedRoutes from './components/ProtectedRoutes';

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
    setUser(res.data.user);
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
          element = {
            <FreeRoutes loggedIn = {user._id ? true : false}>
              <Register />
            </FreeRoutes>
        } />

        <Route 
          path = "/user/login" 
          element = {
            <FreeRoutes loggedIn = {user._id ? true : false}>
              <Login />
            </FreeRoutes>
        } />

        <Route 
          path = "/user/profile" 
          element = {
            <ProtectedRoutes loggedIn = {user._id ? true : false}>
              <Profile />
            </ProtectedRoutes>
        } />

        <Route 
          path = "/user/changesettings" 
          element = {
            <ProtectedRoutes loggedIn = {user._id ? true : false}>
              <ChangeSettings />
            </ProtectedRoutes>
        } />

        <Route 
          path = "/user/updatepassword" 
          element = {
            <ProtectedRoutes loggedIn = {user._id ? true : false}>
              <UpdatePassword />
            </ProtectedRoutes>
        } />

        <Route 
          path = "/task/create" 
          element = {
            <ProtectedRoutes loggedIn = {user._id ? true : false}>
              <CreateTask />
            </ProtectedRoutes>
        } />

        <Route 
          path = "/task/view/:id" 
          element = {
            <ProtectedRoutes loggedIn = {user._id ? true : false}>
              <ViewTask />
            </ProtectedRoutes>
        } />

        <Route 
          path = "/task/update/:id" 
          element = {
            <ProtectedRoutes loggedIn = {user._id ? true : false}>
              <UpdateTask />
            </ProtectedRoutes>
        } />
      </Routes>
    </div>
  );
}

export default App;
