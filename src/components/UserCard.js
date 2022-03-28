import React from "react";
import { Buttons, Icons, ImgContainer, InfoContainer } from "./UserCardStyle";
import man from "../assets/man.svg";
import mail from "../assets/mail.svg";
import age from "../assets/growing-up-man.svg";
import map from "../assets/map.svg";
import phone from "../assets/phone.svg";
import padlock from "../assets/padlock.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import AddUser from "./AddUser";

const UserCard = () => {
  let result1 = document.getElementById("sent1");
  let result2 = document.getElementById("sent2");
  const [users, setUsers] = useState("");
  const [userAdd, setUserAdd] = useState([]);

  const getUser = () => {
    axios.get(`https://randomuser.me/api/`).then((response) => {
      setUsers(response.data);
      console.log(users);
    });
  };

  const changeUserProperties = (e) => {
    const selection = e.target.id;
    if (selection === "name") {
      result1.innerHTML = "My name is";
      result2.innerHTML =
        users.results[0].name.title +
        " " +
        users.results[0].name.first +
        " " +
        users.results[0].name.last;
    } else if (selection === "mail") {
      result1.innerHTML = "My email is";
      result2.innerHTML = users.results[0].email;
    } else if (selection === "age") {
      result1.innerHTML = "My age is";
      result2.innerHTML = users.results[0].dob.age;
    } else if (selection === "map") {
      result1.innerHTML = "My street is";
      result2.innerHTML = users.results[0].location.street.name;
    } else if (selection === "phone") {
      result1.innerHTML = "My phone is";
      result2.innerHTML = users.results[0].phone;
    } else if (selection === "pass") {
      result1.innerHTML = "My password is";
      result2.innerHTML = users.results[0].login.password;
    }
  };

  const addUser = () => {
    userAdd.includes(users)
      ? alert("User already added.")
      : setUserAdd([...userAdd, users]);
    console.log(userAdd);
  };

  useEffect(() => getUser(), []);

  return (
    <div>
      {users ? (
        <>
          <ImgContainer>
            <img
              src={users.results[0].picture.medium}
              alt=""
              className="img-circle"
            />
          </ImgContainer>
          <InfoContainer>
            <p id="sent1">My name is</p>
            <h1 id="sent2">
              {users.results[0].name.title} {users.results[0].name.first}{" "}
              {users.results[0].name.last}
            </h1>
          </InfoContainer>
          <Icons>
            <img
              src={man}
              alt=""
              onMouseOver={changeUserProperties}
              id="name"
            />
            <img
              src={mail}
              alt=""
              onMouseOver={changeUserProperties}
              id="mail"
            />
            <img src={age} alt="" onMouseOver={changeUserProperties} id="age" />
            <img src={map} alt="" onMouseOver={changeUserProperties} id="map" />
            <img
              src={phone}
              alt=""
              onMouseOver={changeUserProperties}
              id="phone"
            />
            <img
              src={padlock}
              alt=""
              onMouseOver={changeUserProperties}
              id="pass"
            />
          </Icons>
          <Buttons>
            <button onClick={getUser}>New User</button>
            <button onClick={addUser}>Add User</button>
          </Buttons>
          {userAdd.length > 0 ? <AddUser useradd={userAdd} /> : null}
        </>
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
};

export default UserCard;
