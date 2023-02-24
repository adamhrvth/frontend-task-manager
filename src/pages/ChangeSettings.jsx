import React, { useContext, useState } from 'react';

import { UserContext } from '../context/UserContext';

import { useNavigate } from 'react-router-dom';

import { updateUser } from '../apiCalls/user';



const ChangeSettings = () => {
  const { user, setUser } = useContext(UserContext);

  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username,
      email
    };

    const res = await updateUser(data);

    if (res.status === 200) {
      alert("Update successful.");
      setUser(res.data.user);
      navigate("/user/profile");
    }
    else {
      alert(res.response.data.message);
    }
  };

  return (
    <div className = "w-4/5 sm:w-3/5 lg:w-2/5 xl:w-1/4 m-auto text-center">
      <h1 className = "text-3xl mt-6 mb-12 font-bold">
        Change profile settings
      </h1>

      <form onSubmit = { handleSubmit }>
        <div className="mb-3">
          <input 
            type = "text"
            placeholder = "New name"
            className = "focus:outline-none border-none p-2 rounded w-full"
            value = { username }
            onChange = { e => setUsername(e.target.value) }
          />
        </div>

        <div className="mb-3">
          <input 
            type = "email"
            placeholder = "New e-mail"
            className = "focus:outline-none border-none p-2 rounded w-full"
            value = { email }
            onChange = { e => setEmail(e.target.value) }
          />
        </div>

        <button 
          type = "submit"
          className = "bg-black text-white w-full py-2 hover:bg-neutral-700"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default ChangeSettings;