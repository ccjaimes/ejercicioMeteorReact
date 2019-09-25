import { Meteor } from 'meteor/meteor';
import {Forecast} from '../imports/api/forecast.js';

Meteor.startup(() => {
  if (Forecast.find().count() === 0) {
    console.log("There are no forecasts");
    let dummyForecasts = [
      { dayName: "Sat", minTemp: 20, maxTemp: 40, status: "Mostly sunny", week: 1, card:"danger", img:"sunny.png" },
      { dayName: "Sun", minTemp: 20, maxTemp: 38, status: "Chilly", week: 1, card:"info", img:"snowflake.png" },
      { dayName: "Mon", minTemp: 20, maxTemp: 42, status: "Nice day", week: 1, card:"danger", img:"sunny.png" },
      { dayName: "Tue", minTemp: 30, maxTemp: 46, status: "Spring like", week: 1, card:"warning", img:"cloudy.png" },
      { dayName: "Wed", minTemp: 38, maxTemp: 52, status: "Rain showers", week: 1, card:"primary", img:"clouds.png" },
      { dayName: "Thu", minTemp: 42, maxTemp: 52, status: "Warm pm shower", week: 1, card:"warning", img:"cloudy.png" },
      { dayName: "Fri", minTemp: 26, maxTemp: 40, status: "Brigth colder", week: 1, card:"info", img:"snowflake.png" },
      { dayName: "Sat", minTemp: 20, maxTemp: 40, status: "Mostly sunny", week: 2, card:"danger", img:"sunny.png" },
      { dayName: "Sun", minTemp: 20, maxTemp: 38, status: "Chilly", week: 2, card:"info", img:"snowflake.png" },
      { dayName: "Mon", minTemp: 20, maxTemp: 42, status: "Nice day", week: 2, card:"danger", img:"sunny.png" },
      { dayName: "Tue", minTemp: 30, maxTemp: 46, status: "Spring like", week: 2, card:"warning", img:"cloudy.png" },
      { dayName: "Wed", minTemp: 38, maxTemp: 52, status: "Rain showers", week: 2, card:"primary", img:"clouds.png" },
      { dayName: "Thu", minTemp: 42, maxTemp: 52, status: "Warm pm shower", week: 2, card:"warning", img:"cloudy.png" },
      { dayName: "Fri", minTemp: 26, maxTemp: 40, status: "Brigth colder", week: 2, card:"info", img:"snowflake.png" },
      { dayName: "Sat", minTemp: 20, maxTemp: 40, status: "Mostly sunny", week: 3, card:"danger", img:"sunny.png" },
      { dayName: "Sun", minTemp: 20, maxTemp: 38, status: "Chilly", week: 3, card:"info", img:"snowflake.png" },
      { dayName: "Mon", minTemp: 20, maxTemp: 42, status: "Nice day", week: 3, card:"danger", img:"sunny.png" },
      { dayName: "Tue", minTemp: 30, maxTemp: 46, status: "Spring like", week: 3, card:"warning", img:"cloudy.png" },
      { dayName: "Wed", minTemp: 38, maxTemp: 52, status: "Rain showers", week: 3, card:"primary", img:"clouds.png" },
      { dayName: "Thu", minTemp: 42, maxTemp: 52, status: "Warm pm shower", week: 3, card:"warning", img:"cloudy.png" },
      { dayName: "Fri", minTemp: 26, maxTemp: 40, status: "Brigth colder", week: 3, card:"info", img:"snowflake.png" },
      { dayName: "Sat", minTemp: 20, maxTemp: 40, status: "Mostly sunny", week: 4, card:"danger", img:"sunny.png" },
      { dayName: "Sun", minTemp: 20, maxTemp: 38, status: "Chilly", week: 4, card:"info", img:"snowflake.png" },
      { dayName: "Mon", minTemp: 20, maxTemp: 42, status: "Nice day", week: 4, card:"danger", img:"sunny.png" },
      { dayName: "Tue", minTemp: 30, maxTemp: 46, status: "Spring like", week: 4, card:"warning", img:"cloudy.png" },
      { dayName: "Wed", minTemp: 38, maxTemp: 52, status: "Rain showers", week: 4, card:"primary", img:"clouds.png" },
      { dayName: "Thu", minTemp: 42, maxTemp: 52, status: "Warm pm shower", week: 4, card:"warning", img:"cloudy.png" },
      { dayName: "Fri", minTemp: 26, maxTemp: 40, status: "Brigth colder", week: 4, card:"info", img:"snowflake.png" }
    ];

    dummyForecasts.forEach(e => {
      Forecast.insert(e);
    })
  }
});