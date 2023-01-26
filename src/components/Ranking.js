import React from "react";
import styled from "styled-components";
import test from "../images/profile.png";

const RakingBox = styled.div`
  background-color: black;
  padding: 78px 3.5% 0 3.5%;
`;

const RankingHeader = styled.h3`
  color: white;
  font-size: 22px;
  height: 37px;
  margin-bottom: 0;
`;

const RankingList = styled.div`
  display: flex;
  overflow: auto;
  margin-top: -40px;
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

const RankingItem = styled.div`
  display: flex;
  margin-right: 10px;
  align-items: center;
`;

const RankingNum = styled.div`
  font-size: 225px;
  margin-top: -25px;
  margin-right: -45px;
  color: black;
  text-shadow: -4px 0 #a7a7a7, 0 4px #a7a7a7, 4px 0 #a7a7a7, 0 -4px #a7a7a7;
`;

const RankPostImg = styled.img`
  width: 130px;
  height: 170px;
`;

const Ranking = () => {
  return (
    <RakingBox>
      <RankingHeader>오늘 대한민국의 TOP 10 영화</RankingHeader>
      <RankingList>
        <RankingItem>
          <RankingNum>1</RankingNum>
          <RankPostImg src={test} />
        </RankingItem>
        <RankingItem>
          <RankingNum>2</RankingNum>
          <RankPostImg src={test} />
        </RankingItem>
        <RankingItem>
          <RankingNum>3</RankingNum>
          <RankPostImg src={test} />
        </RankingItem>
        <RankingItem>
          <RankingNum>4</RankingNum>
          <RankPostImg src={test} />
        </RankingItem>
        <RankingItem>
          <RankingNum>5</RankingNum>
          <RankPostImg src={test} />
        </RankingItem>
        <RankingItem>
          <RankingNum>6</RankingNum>
          <RankPostImg src={test} />
        </RankingItem>
        <RankingItem>
          <RankingNum>7</RankingNum>
          <RankPostImg src={test} />
        </RankingItem>
        <RankingItem>
          <RankingNum>8</RankingNum>
          <RankPostImg src={test} />
        </RankingItem>
        <RankingItem>
          <RankingNum>9</RankingNum>
          <RankPostImg src={test} />
        </RankingItem>
        <RankingItem>
          <RankingNum>10</RankingNum>
          <RankPostImg src={test} />
        </RankingItem>
      </RankingList>
    </RakingBox>
  );
};

export default Ranking;
