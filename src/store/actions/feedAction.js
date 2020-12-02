import axios from "axios";

import * as actionTypes from "./actionTypes";

export const fetchingFeedStart = () => {
  return {
    type: actionTypes.FETCHING_FEED_START,
  };
};

export const fetchingFeedSuccess = (feeds) => {
  return {
    type: actionTypes.FETCHING_FEED_SUCCESS,
    feeds,
  };
};
export const fetchingFeedFail = (error) => {
  return {
    type: actionTypes.FETCHING_FEED_FAIL,
    error,
  };
};

export const fetchingFeed = () => {
  var datas = [];
  var fomatedData = [];
  var sortedData = [];
  return (dispatch) => {
    dispatch(fetchingFeedStart());

    const option1 = {
      method: "GET",
      url: "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/hourly",
      params: { lat: "25.5941", lon: "85.1376", hours: "5" },
      headers: {
        "x-rapidapi-key": "08a2040344mshfc40fbda451fa75p150e3djsn8b2e42596596",
        "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
      },
    };
    const option2 = {
      method: "GET",
      url: "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/hourly",
      params: { lat: "22.5726", lon: "88.3639", hours: "5" },
      headers: {
        "x-rapidapi-key": "08a2040344mshfc40fbda451fa75p150e3djsn8b2e42596596",
        "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
      },
    };
    const option3 = {
      method: "GET",
      url: "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/hourly",
      params: { lat: "18.5204", lon: "73.8567", hours: "5" },
      headers: {
        "x-rapidapi-key": "08a2040344mshfc40fbda451fa75p150e3djsn8b2e42596596",
        "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
      },
    };

    axios
      .all([
        axios.request(option1),
        axios.request(option2),
        axios.request(option3),
      ])
      .then(
        axios.spread((data1, data2, data3) => {
          datas.push(data1, data2, data3);
          datas.map((info, i) => {
            return info.data.data.map((data) => {
              sortedData.push({ city_name: info.data.city_name, data });
              return fomatedData.push({ city_name: info.data.city_name, data });
            });
          });
          sortedData.sort((a, b) => a.data.temp - b.data.temp);
          dispatch(fetchingFeedSuccess(sortedData));
          // console.log("datas", datas, "sorted", sortedData);
        })
      )
      .catch(function (error) {
        dispatch(fetchingFeedFail(error));
        console.log(error, error.message);
      });
  };
};
