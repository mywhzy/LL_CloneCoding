import React from "react";
import styled from "styled-components";
import ageLimitIcon from "../images/age-limit.png";
import adIcon from "../images/audio-description.png";
import subtitlesIcon from "../images/subtitles.png";

const Modal = ({ img, overView, closeModal }) => {
  return (
    <ModalBox>
      <ModalCloseBtn onClick={closeModal}>X</ModalCloseBtn>
      <PrevImg src={img} alt="vod 미리보기" />
      <ModalBottomBox>
        <VodLeftSideInfoBox>
          <VodLeftSideTopInfo>
            <VodConcordanceRate>98% 일치</VodConcordanceRate>
            <div>2023</div>
            <VodLeftSideTopInfoIcon src={ageLimitIcon} />
            <div>에피소드 6개</div>
            <VodQuality>HD</VodQuality>
            <VodLeftSideTopInfoIcon src={adIcon} />
            <VodLeftSideTopInfoIcon src={subtitlesIcon} />
          </VodLeftSideTopInfo>
          <VodSummary>
            {overView ? overView : "줄거리 준비 중입니다 . . ."}
          </VodSummary>
        </VodLeftSideInfoBox>
        <VodRightSideInfoBox>
          <VodRInfoItem>
            <VodRInfoItemType>출연: </VodRInfoItemType>
            <VodRInfoItemContents>
              이민혁, 유기현, 채형원,{" "}
            </VodRInfoItemContents>
            <VodRInfoItemDetailBtn>더 보기</VodRInfoItemDetailBtn>
          </VodRInfoItem>
          <VodRInfoItem>
            <VodRInfoItemType>장르: </VodRInfoItemType>
            <VodRInfoItemContents>
              로맨틱한 드라마, 한국 드라마, 로맨틱 시리즈
            </VodRInfoItemContents>
          </VodRInfoItem>
          <VodRInfoItem>
            <VodRInfoItemType>시리즈 특징: </VodRInfoItemType>
            <VodRInfoItemContents>강력한 몰입감</VodRInfoItemContents>
          </VodRInfoItem>
        </VodRightSideInfoBox>
      </ModalBottomBox>
    </ModalBox>
  );
};

export default Modal;

const ModalBox = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: #242424;
  width: 901px;
  height: 800px;
  border-radius: 10px;
  color: white;
  box-shadow: 0px 0px 100px 5000px #00000087;
`;

const ModalCloseBtn = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  background: #05050573;
  border: none;
  border-radius: 50%;
  color: #ffffffee;
  font-size: 20px;
  width: 35px;
  height: 35px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    border: 2px solid white;
  }
`;

const PrevImg = styled.img`
  width: 901px;
  height: 508px;
  border-radius: 10px 10px 0px 0px;
`;

const ModalBottomBox = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
`;

const VodLeftSideInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const VodLeftSideTopInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const VodConcordanceRate = styled.div`
  color: #50cc50;
  font-weight: bold;
`;

const VodQuality = styled.div`
  border: 1px solid white;
  border-radius: 3px;
  width: 28px;
  height: 15px;
  font-size: 12px;
  text-align: center;
`;

const VodLeftSideTopInfoIcon = styled.img`
  width: 25px;
  height: 25px;
`;

const VodSummary = styled.div``;

const VodRightSideInfoBox = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const VodRInfoItem = styled.div`
  font-size: 14px;
`;

const VodRInfoItemType = styled.span`
  color: gray;
  margin-right: 2px;
`;

const VodRInfoItemDetailBtn = styled.button`
  font-style: italic;
  background: none;
  border: none;
  color: white;
  font-size: 14px;
  padding: 0;
  cursor: pointer;
`;

const VodRInfoItemContents = styled.span``;
