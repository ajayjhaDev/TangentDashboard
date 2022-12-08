import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.svg";
import adduser from "../assets/adduser.svg";
import user from "../assets/user.svg";
import weather from "../assets/weather.svg";

let menu = {
  color: "#a1e0ff",
  cursor: "pointer",
};

let menustyle = {
  backgroundColor: "#b3bdc4",
  color: "white",
  cursor: "pointer",
};

const SiderbarMenu = () => {
  const [state, setState] = useState(false);
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);

  const Navigate = useNavigate();

  const handleClickAdd = () => {
    Navigate("/adduser");
    setState(true);
    setState1(false);
    setState2(false);
  };

  const handleClickUser = () => {
    Navigate("/user");
    setState(false);
    setState1(true);
    setState2(false);
  };

  const handleClickWeather = () => {
    Navigate("/weather");
    setState(false);
    setState1(false);
    setState2(true);
  };

  return (
    <section className="d-flex flex-md-column align-items-center flex-row justify-content-between">
      <div className="mt-3 d-none d-md-block">
        <img src={logo} alt={"logo"} />
      </div>
      <div
        className="mt-4"
        style={state ? menustyle : menu}
        onClick={handleClickAdd}
      >
        <img src={adduser} alt={"adduser"} />
        <span>Add User</span>
      </div>
      <div
        className="mt-4"
        style={state1 ? menustyle : menu}
        onClick={handleClickUser}
      >
        <img src={user} alt={"user"} />
        <span>User</span>
      </div>
      <div
        className="mt-4"
        style={state2 ? menustyle : menu}
        onClick={handleClickWeather}
      >
        <img src={weather} alt={"weather"} />
        <span>Weather</span>
      </div>
    </section>
  );
};

export default SiderbarMenu;
