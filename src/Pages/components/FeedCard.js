import React from "react";
import moment from "moment";
const FeedCard = (props) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <div style={styles.header}>
        <h2 style={styles}>{props.cityName} </h2>
        <div style={styles.content}>
          <p>Weather Condition</p>
          <p> {props.data.weather.description}</p>
        </div>
        <div style={styles.content}>
          <p>Time</p>
          <p>{moment(props.data.timestamp_local).utc().format("hh:mm")}</p>
        </div>
        <div style={styles.content}>
          <p>Precipation</p>
          <p> {props.data.precip}mm</p>
        </div>
        <div style={styles.content}>
          <p>Wind Speed </p>
          <p> {props.data.wind_spd}Km/hr</p>
        </div>
        <div style={styles.content}>
          <p>Temperature</p>
          <p> {props.data.temp}C</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  header: {
    border: "1px solid black",
    width: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  content: {
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
  },
};

export default FeedCard;
