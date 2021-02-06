import React from "react";
import requests from "../requests";
import Banner from "./Banner";
import "./HomeScreen.css";
import Nav from "./Nav";
import Row from "./Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Horror Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Romance Movies" fetchUrl={requests.fetchTopRated} />
      <Row title="Documentaries" fetchUrl={requests.fetchNetflixOriginals} />
    </div>
  );
}

export default HomeScreen;
