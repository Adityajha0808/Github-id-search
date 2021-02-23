import React, { useState } from "react";
import axios from "axios";

function Form(props) {
  const [userName, setUserName] = useState("");

  function handleClick(event) {
    const value = event.target.value;
    setUserName(value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (userName === "") {
      alert("Enter Username!");
    } else {
      axios.get(`https://api.github.com/users/${userName}`).then((resp) => {
        props.onSubmit(resp.data);
        setUserName("");
      });
    }
  }

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        className="text-input"
        type="text"
        value={userName}
        onChange={handleClick}
        placeholder="Enter Username"
      />

      <input className="submit-input" type="submit" value="Search" />
    </form>
  );
}

export default Form;
