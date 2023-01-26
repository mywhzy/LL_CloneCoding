import React from "react";
import styled from "styled-components";
import logo from "../images/netflix.png";
import search from "../images/search.png";
import notification from "../images/notification.png";
import profile from "../images/profile.png";
import dropdown from "../images/down-arrow.png";

const HeaderBox = styled.div`
  background-color: black;
  height: 68px;
  padding: 0 3.5% 0 3.5%;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`;

const LogoImg = styled.img`
  width: 92px;
  height: 26px;
`;

const MenuList = styled.ul`
  font-size: 0.87vw;
  color: white;
  list-style-type: none;
  display: flex;
  padding-left: 20px;
`;

const MenuItem = styled.li`
  padding-left: 15px;
`;

const SideNav = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const ImgIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 15px;
`;

const NavText = styled.p`
  color: white;
  margin-right: 15px;
  font-size: 0.87vw;
`;

const DropDown = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 10%;
`;

const DropDownImg = styled.img`
  width: 12px;
  height: 11px;
  margin-left: 10px;
  vertical-align: middle;
`;

const Header = () => {
  const menuItemlist = [
    "홈",
    "시리즈",
    "영화",
    "NEW! 요즘 대세 콘텐츠",
    "내가 찜한 콘텐츠",
    "언어별로 찾아보기",
  ];
  return (
    <HeaderBox>
      <LogoImg src={logo} alt="NETFLIX" />
      <MenuList>
        {menuItemlist.map((item) => (
          <MenuItem>{item}</MenuItem>
        ))}
      </MenuList>
      <SideNav>
        <ImgIcon src={search} />
        <NavText>키즈</NavText>
        <ImgIcon src={notification} />
        <DropDown>
          <ProfileImg src={profile} />
          <DropDownImg src={dropdown} />
        </DropDown>
      </SideNav>
    </HeaderBox>
  );
};

export default Header;
