import React, { useState, useEffect } from "react";
import profile from "../assets/profile.svg";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

import { userActions } from "../store/userSlice";

const User = () => {
  const [usersArr, setUsersArr] = useState([]);

  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(userActions.filterUser(search));

    let users = JSON.parse(localStorage.getItem("users"));

    let usersFilter = JSON.parse(localStorage.getItem("usersFilter"));

    if (usersFilter) {
      setUsersArr(usersFilter);
    } else {
      setUsersArr(users);
    }
  }, [search]);

  return (
    <section
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
      }}
      className="mt-4 p-5"
    >
      <div id="input-container">
        <p>Search</p>
        <input
          type={"search"}
          placeholder={"Search User by name..."}
          onChange={handleChange}
        />
      </div>

      <div className="mt-4">
        <p>Card View</p>

        <div className="row g-2">
          {usersArr?.map((ele) => (
            <div className="card mx-2" key={ele.username}>
              <div>
                <img src={profile} alt={"profile"} className="img-fluid" />
              </div>
              <div>
                <p>{ele.username}</p>
                <p>{ele.dob}</p>
                <p>{ele.state}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <p>List View</p>

        <ul>
          {usersArr?.map((ele) => (
            <li key={uuidv4()} className="mt-4">
              <img
                src={profile}
                alt={"profile"}
                height={"33px"}
                width={"33px"}
                className="img-fluid"
              />
              <span className="ms-2">{ele.username}</span>
              <span className="ms-2">{ele.dob}</span>
              <span className="ms-2">{ele.state}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default User;
