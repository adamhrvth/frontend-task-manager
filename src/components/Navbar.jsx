import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { UserContext } from '../context/UserContext';

import { logout } from '../apiCalls/user';

const Navbar = () => {
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

  return (
    <div className = {
      "bg-green-600 py-3 text-black flex flex-wrap items-center justify-center sm:justify-between"
    }>
      <h1 className = "mx-3 font-bold text-3xl">
        Task manager
      </h1>
      <ul className = {
        "flex mt-2 sm:mt-0"
      }>
      { user._id &&
        <>
          <li className = "mx-3 text-xl">
            <Link
              className = "hover:text-neutral-300"
              to = "/"
            >
              Home
            </Link>
          </li>
          <li className = "mx-3 text-xl">
          <Link 
            className = "hover:text-neutral-300"
            to = "/user/profile"
          >
            Profile
          </Link>
          </li>
          <li 
            className = "mx-3 text-xl"
            onClick = { handleLogout }
          >
            <Link 
              className = "hover:text-neutral-300"
            >
              Log out
            </Link>
          </li>
        </>
      }
      { !user._id &&
        <>
          <li className = "mx-3 text-xl">
            <Link 
              className = "hover:text-neutral-300"
              to = "/user/register"
            >
              Register
            </Link>
          </li>
          <li className = "mx-3 text-xl">
            <Link 
              className = "hover:text-neutral-300"
              to = "/user/login"
            >
              Log in
            </Link>
          </li>
        </>
      }
      </ul>
    </div>
  )
}

export default Navbar;