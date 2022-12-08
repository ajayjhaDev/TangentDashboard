import React, { useEffect, useState } from "react";
import profile from "../assets/profile.svg";

const Header = () => {
  const [date, setDate] = useState("");

  const datefn = () => {
    let myDate = new Date();

    let daysList = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let monthsList = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Aug",
      "Oct",
      "Nov",
      "Dec",
    ];

    let date = myDate.getDate();
    let month = monthsList[myDate.getMonth()];
    let year = myDate.getFullYear();
    let day = daysList[myDate.getDay()];

    let today = `${date} ${month} ${year}, ${day}`;

    let amOrPm;
    let twelveHours = function () {
      if (myDate.getHours() > 12) {
        amOrPm = "PM";
        let twentyFourHourTime = myDate.getHours();
        let conversion = twentyFourHourTime - 12;
        return `${conversion}`;
      } else {
        amOrPm = "AM";
        return `${myDate.getHours()}`;
      }
    };
    let hours = twelveHours();
    let minutes = myDate.getMinutes();

    let currentTime = `${hours}:${minutes} ${amOrPm}`;

    setDate(today + " " + currentTime);
  };

  useEffect(() => {
    datefn();
  }, []);

  return (
    <section
      style={{ backgroundColor: "#FFFFFF", borderRadius: "10px" }}
      className="d-flex justify-content-between align-items-center"
    >
      <div className="ms-3">{date}</div>
      <div className="me-3">
        <strong>Welcome John</strong>{" "}
        <img src={profile} alt={"profile"} className="img-fluid" />
      </div>
    </section>
  );
};

export default Header;
