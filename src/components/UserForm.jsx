import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addUser } from "../slice/slice";

function UserForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      name,
      email,
      id: uuid(),
    };
    dispatch(addUser(newUser));
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={handleName} />
        <label htmlFor="">Email</label>
        <input type="text" value={email} onChange={handleEmail} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
