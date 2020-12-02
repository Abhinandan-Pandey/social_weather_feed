import React from "react";
import { connect } from "react-redux";
import Spinner from "../utility/Spinner";
import FeedCard from "../Pages/components/FeedCard";
import Modal from "../utility/Modal";

const NewsFeed = (props) => {
  const { feeds, loading, error } = props;
  // console.log(props.feeds, feeds.city_name, feeds.data);

  const cards =
    feeds &&
    feeds.map((card, i) => (
      <FeedCard
        cityName={card.city_name}
        data={card.data}
        key={i + card.city_name}
      />
    ));
  return (
    <>
      {loading && !error ? (
        <Spinner />
      ) : !loading && error ? (
        <Modal error={error} />
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              backgroundColor: "silver",
            }}
          >
            <div
              style={{
                backgroundColor: "lightgrey",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1>
                Weather report of 3 cities for last 5 hrs in increasing order of
                their Temperature
              </h1>
            </div>
            {cards}
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    feeds: state.feeds.feeds,
    loading: state.feeds.loading,
    error: state.feeds.error,
  };
};

export default connect(mapStateToProps, null)(NewsFeed);
