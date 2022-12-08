import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    weather: {},
  },
  reducers: {
    AddUser(state, actions) {
      let Items = JSON.parse(localStorage.getItem("users"));
      window.localStorage.removeItem("users");

      if (Items) {
        localStorage.setItem(
          "users",
          JSON.stringify([actions.payload, ...Items])
        );
      } else {
        localStorage.setItem("users", JSON.stringify([actions.payload]));
      }
    },

    filterUser(state, actions) {
      let Items = JSON.parse(localStorage.getItem("users"));

      if (Items) {
        if (actions.payload.length > 0) {
          let userFiltered = Items.filter(
            (ele) => ele.username === actions.payload
          );

          if (userFiltered[0]) {
            localStorage.setItem(
              "usersFilter",
              JSON.stringify([...userFiltered])
            );
          } else {
            window.localStorage.removeItem("users");
            window.localStorage.removeItem("usersFilter");
            localStorage.setItem("users", JSON.stringify([...Items]));
          }
        }
      }
    },

    getWeather(state, actions) {
      state.weather = actions.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
