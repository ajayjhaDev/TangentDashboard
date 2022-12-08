import { userActions } from "./userSlice";
import axios from "axios";

export const getWeatherData = (cityName) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a7edebea5d006c1065da3436f6aa06b5`
      )
      .then((res) => {
        dispatch(userActions.getWeather(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
