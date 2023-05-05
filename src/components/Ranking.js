import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import axios from "axios";
import { RANKING_LIST_URL, IMG_BASE_URL } from "./UrlLists";

const Ranking = () => {
  const [showModal, setShowModal] = useState(false);
  const [clickedImg, setClickedImg] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [overView, setOverView] = useState("");

  const getMovieRanking = () => {
    axios
      .get(RANKING_LIST_URL)
      .then((Response) => {
        console.log(Response.data.results);
        setMovieList(Response.data.results);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  useEffect(() => {
    getMovieRanking();
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
    <RakingBox>
      <RankingHeader>오늘 대한민국의 TOP 10 영화</RankingHeader>
      <RankingList>
        {movieList.map((item, index) => (
          <RankingItem>
            <RankingNum>{index + 1}</RankingNum>
            <RankPostImg
              src={IMG_BASE_URL + item.poster_path}
              onClick={() =>
                handleImgClick(IMG_BASE_URL + item.poster_path, item.overview)
              }
            />
          </RankingItem>
        ))}
        {showModal && (
          <Modal
            img={clickedImg}
            overView={overView}
            closeModal={handleClosebtnClick}
          />
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
