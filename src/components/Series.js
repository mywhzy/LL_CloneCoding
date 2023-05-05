import React, { useState } from "react";
import styled from "styled-components";
import tempdata from "../tempdata/data.json";
import Modal from "./Modal";

const Series = () => {
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
    <SeriesBox>
      <SeriseHeader>해외 시리즈</SeriseHeader>
      <SeriseList>
        {tempdata.posterImgList.map((item) => (
          <SerisePoster
            src={item.image}
            onClick={() => handleImgClick(item.image)}
          />
        ))}
        {showModal && (
          <Modal img={clickedImg} closeModal={handleClosebtnClick} />
        )}
      </SeriseList>
      <SeriseHeader>시리즈</SeriseHeader>
      <SeriseList>
        {tempdata.posterImgList.map((item) => (
          <SerisePoster
            src={item.image}
            onClick={() => handleImgClick(item.image)}
          />
        ))}
        {showModal && (
          <Modal img={clickedImg} closeModal={handleClosebtnClick} />
        )}
      </SeriseList>
    </SeriesBox>
  );
};

export default Series;

const SeriesBox = styled.div`
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
