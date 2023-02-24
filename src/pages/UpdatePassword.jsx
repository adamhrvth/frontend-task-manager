import { React, useState } from "react";

import { useNavigate } from "react-router-dom";

import { updatePassword } from "../apiCalls/user";



const UpdatePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmedPassword) {
      alert("New passwords do not match.");
      return;
    }

    const data = {
      "password": currentPassword,
      "newPassword": password
    };

    const res = await updatePassword(data);

    if (res.status === 200) {
      alert("Update successful.");
      navigate("/user/profile");
    }
    else {
      alert(res.response.data.message);
    }
  };

  return (
    <div className = "w-4/5 sm:w-3/5 lg:w-2/5 xl:w-1/4 m-auto text-center">
      <h1 className = "text-3xl mt-6 mb-12 font-bold">
        Change password
      </h1>

      <form onSubmit = { handleSubmit }>
        <div className="mb-3">
          <input 
            type = "password"
            placeholder = "Current password"
            className = "focus:outline-none border-none p-2 rounded w-full"
            value = { currentPassword }
            onChange = { e => setCurrentPassword(e.target.value) }
          />
        </div>

        <div className="mb-3">
          <input 
            type = "password"
            placeholder = "New password"
            className = "focus:outline-none border-none p-2 rounded w-full"
            value = { password }
            onChange = { e => setPassword(e.target.value) }
          />
        </div>

        <div className="mb-3">
          <input 
            type = "password"
            placeholder = "Confirm new password"
            className = "focus:outline-none border-none p-2 rounded w-full"
            value = { confirmedPassword }
            onChange = { e => setConfirmedPassword(e.target.value) }
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
};

export default UpdatePassword;