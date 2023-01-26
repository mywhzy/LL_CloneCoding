import React from "react";
import styled from "styled-components";
import test from "../images/profile.png";

const SeriesBox = styled.div`
  background-color: black;
  padding: 0 3.5% 0 3.5%;
`;

const SeriseHeader = styled.h2`
  color: white;
  font-size: 22px;
  height: 37px;
  margin: 0;
  padding-top: 20px;
`;

const SeriseList = styled.div`
  display: flex;
  overflow: auto;
  margin-bottom: 40px;
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

const SerisePoster = styled.img`
  width: 250px;
  height: 140px;
  margin-right: 6px;
  border-radius: 2%;
  flex-basis: 250px;
  flex-shrink: 0;
`;

const Series = () => {
  return (
    <SeriesBox>
      <SeriseHeader>해외 시리즈</SeriseHeader>
      <SeriseList>
        <SerisePoster src={test} />
        <SerisePoster src={test} />
        <SerisePoster src={test} />
        <SerisePoster src={test} />
        <SerisePoster src={test} />
        <SerisePoster src={test} />
        <SerisePoster src={test} />
      </SeriseList>
      <SeriseHeader>시리즈</SeriseHeader>
      <SeriseList>
        <SerisePoster src={test} />
        <SerisePoster src={test} />
        <SerisePoster src={test} />
        <SerisePoster src={test} />
        <SerisePoster src={test} />
        <SerisePoster src={test} />
        <SerisePoster src={test} />
      </SeriseList>
    </SeriesBox>
  );
};

export default Series;
