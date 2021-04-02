import React, { useState } from "react";
import axios from "axios";

function Form(props) {
  const [userName, setUserName] = useState("");

  function handleClick(event) {
    const value = event.target.value;
    setUserName(value);
  }

  function UrlExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    if (http.status === 404) {
      userName !== "" && alert("Seems like the username you have entered doesn't exist! Please try again with a correct username.");
      setUserName("");
    }
}

  function handleSubmit(event) {
    event.preventDefault();
    var userurl = `https://api.github.com/users/${userName}`;
    UrlExists(userurl);
    if (userName === "") {
      alert("Enter Username!");
    } else {
      axios.get(userurl).then((resp) => {
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
