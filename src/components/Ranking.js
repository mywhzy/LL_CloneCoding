import React, { useState } from "react";
import styled from "styled-components";
import tempdata from "../tempdata/data.json";
import Modal from "./Modal";

const Ranking = () => {
  const [showModal, setShowModal] = useState(false);
  const [clickedImg, setClickedImg] = useState("");

  const handleImgClick = (img) => {
    setShowModal(true);
    setClickedImg(img);
  };

  const handleClosebtnClick = () => {
    setShowModal(false);
  };
  return (
    <RakingBox>
      <RankingHeader>오늘 대한민국의 TOP 10 영화</RankingHeader>
      <RankingList>
        {tempdata.posterImgList.map((item) => (
          <RankingItem>
            <RankingNum>{item.id}</RankingNum>
            <RankPostImg
              src={item.image}
              onClick={() => handleImgClick(item.image)}
            />
          </RankingItem>
        ))}
        {showModal && (
          <Modal img={clickedImg} closeModal={handleClosebtnClick} />
        )}
      </RankingList>
    </RakingBox>
  );
};

export default Ranking;

const RakingBox = styled.div`
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
