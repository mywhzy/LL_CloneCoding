import React from "react";
import Header from "../components/Header";
import Ranking from "../components/Ranking";
import Series from "../components/Series";
import styled from "styled-components";

const HomePage = styled.div`
  height: 1000px;
  background-color: black;
`;

const Home = () => {
  return (
    <HomePage>
      <Header />
      <Ranking />
      <Series />
      TO BE CUNTINUE
    </HomePage>
  );
};

export default Home;
