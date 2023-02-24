import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../context/UserContext';

import { register } from '../apiCalls/user';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmedPassword) {
      alert("Passwords do not match!");
      return;
    }

    const data = {
      "username": username,
      "email": email,
      "password": password
    };

    const res = await register(data);

    if (res.status === 201) {
      alert("Registration successful.");
      setUser(res.data.user);
      navigate("/");
    }
    else {
      alert(res.response.data.message);
    }
  }

  return (
    <div className = "w-4/5 sm:w-3/5 lg:w-2/5 xl:w-1/4 m-auto text-center">
      <h1 className = "text-3xl mt-6 mb-12 font-bold">
        Register
      </h1>
      <form onSubmit = { handleSubmit }>
        <div className="mb-3">
          <input 
            type = "text"
            placeholder = "Name"
            className = "focus:outline-none border-none p-2 rounded w-full"
            value = { username }
            onChange = { e => setUsername(e.target.value) }
          />
        </div>

        <div className="mb-3">
          <input 
            type = "email"
            placeholder = "E-mail"
            className = "focus:outline-none border-none p-2 rounded w-full"
            value = { email }
            onChange = { e => setEmail(e.target.value) }
          />
        </div>

        <div className="mb-3">
          <input 
            type = "password"
            placeholder = "Password"
            className = "focus:outline-none border-none p-2 rounded w-full"
            value = { password }
            onChange = { e => setPassword(e.target.value) }
          />
        </div>

        <div className="mb-3">
          <input 
            type = "password"
            placeholder = "Confirmed password"
            className = "focus:outline-none border-none p-2 rounded w-full"
            value = { confirmedPassword }
            onChange = { e => setConfirmedPassword(e.target.value) }
          />
        </div>
        <button 
          type = "submit"
          className = "bg-black text-white w-full py-2 hover:bg-neutral-700"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default Register;