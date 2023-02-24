import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../context/UserContext';

import { deleteUser, logout } from '../apiCalls/user';



const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    const res = await logout();

    if (res.status === 200) {
      setUser({});
      navigate("/user/login");
    }
    else {
      alert(res.response.data.message);
    }
  };

  const handleDeleteAccount = async (e) => {
    if (window.confirm("This is a destructive operation and can not be undone. Are you sure you want to delete your account?")) {
      const res = await deleteUser();
      
      if (res.status === 201) {
        alert("User deleted successfully.");
        setUser({});
        navigate("/");
      }
      else {
        alert(res.response.data.message);
      }
    }
  };

  return (
    <div className = "w-4/5 sm:w-3/5 lg:w-2/5 xl:w-1/4 m-auto text-center">
      <h1 className = "text-3xl mt-6 mb-12 font-bold">
        Profile
      </h1>

      <div className = "mt-3">
        <h2 className = "text-xl">
          Name: {user.username}
        </h2>
        <h2 className = "text-xl">
          E-mail: {user.email} 
        </h2>
      </div>

      <div className="mt-3">
        <button
          className = "my-2 bg-yellow-500 text-white w-full py-2 hover:bg-yellow-300"
          onClick = {() => navigate("/user/changesettings")}
        >
          Update profile
        </button>

        <button
          className = "my-2 bg-yellow-500 text-white w-full py-2 hover:bg-yellow-300"
          onClick = {() => navigate("/user/updatepassword")}
        >
          Change password
        </button>

        <button
          className = "my-2 bg-black text-white w-full py-2 hover:bg-neutral-700"
          onClick = { handleLogout }
        >
          Logout
        </button>

        <button
          className = "my-2 bg-red-600 text-white w-full py-2 hover:bg-red-500"
          onClick = { handleDeleteAccount }
        >
          Delete account
        </button>
      </div>
    </div>
  )
}

export default Profile;