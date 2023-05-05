import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import axios from "axios";
import {
  GLOBAL_SERIRES_LIST_URL,
  POPULAR_SERIRES_LIST_URL,
  IMG_BASE_URL,
} from "./UrlLists";

const Series = () => {
  const [showModal, setShowModal] = useState(false);
  const [clickedImg, setClickedImg] = useState("");
  const [globalSeries, setGlobalSeries] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [overView, setOverView] = useState("");

  const getGlobalSeries = () => {
    axios
      .get(GLOBAL_SERIRES_LIST_URL)
      .then((Response) => {
        console.log(Response.data.results);
        setGlobalSeries(Response.data.results);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  const getPopularSeries = () => {
    axios
      .get(POPULAR_SERIRES_LIST_URL)
      .then((Response) => {
        console.log(Response.data.results);
        setPopularSeries(Response.data.results);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  useEffect(() => {
    getGlobalSeries();
    getPopularSeries();
  }, []);

  const handleImgClick = (img, overView) => {
    setShowModal(true);
    setClickedImg(img);
    setOverView(overView);
  };

  const handleClosebtnClick = () => {
    setShowModal(false);
  };

  return (
    <SeriesBox>
      <SeriseHeader>해외 시리즈</SeriseHeader>
      <SeriseList>
        {globalSeries.map((item) => (
          <SerisePoster
            src={IMG_BASE_URL + item.poster_path}
            onClick={() =>
              handleImgClick(IMG_BASE_URL + item.poster_path, item.overview)
            }
          />
        ))}
        {showModal && (
          <Modal
            img={clickedImg}
            overView={overView}
            closeModal={handleClosebtnClick}
          />
        )}
      </SeriseList>
      <SeriseHeader>시리즈</SeriseHeader>
      <SeriseList>
        {popularSeries.map((item) => (
          <SerisePoster
            src={IMG_BASE_URL + item.poster_path}
            onClick={() =>
              handleImgClick(IMG_BASE_URL + item.poster_path, item.overview)
            }
          />
        ))}
        {showModal && (
          <Modal
            img={clickedImg}
            overView={overView}
            closeModal={handleClosebtnClick}
          />
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
