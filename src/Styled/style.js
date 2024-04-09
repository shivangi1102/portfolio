import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  height: 100vh;
  font-size: large;
  overflow: hidden;
`;
export const HomeSection = styled.div`
  width: 100%;
  height: 100vh;
  font-size: large;
  overflow: hidden;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background-color: #f8e8ee;
`;

export const HomeSectionMobile = styled.div`
  width: 100%;
  height: 100vh;
  font-size: large;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8e8ee;
`;
export const NavSection = styled.div`
  width: 100%;
  height: 5vh;
  background-color: #f8e8ee;
`;

export const Art = styled.div`
  top: 30%;
  position: relative;
`;
export const Name = styled.div`
  color: #a40052;
  top: 15%;
  position: absolute;
  align-items: center;
  justify-content: center;
  display: flex;
  left: 35%;
  font-family: "Great Vibes", cursive;
  font-size: 100px;
`;
export const ShortText = styled.div`
  color: #a40052;
  top: 35%;
  position: absolute;
  align-items: center;
  //letter-spacing: 0.5cap;
  display: flex;
  left: 45%;
  font-family: "Dosis", sans-serif;
  font-size: 30px;
`;

export const MobileViewName = styled.div`
  color: #a40052;
  top: 15%;
  position: absolute;
  align-items: center;
  justify-content: center;
  display: flex;
  font-family: "Great Vibes", cursive;
  font-size: 50px;
`;

export const MobileShortText = styled.div`
  color: #a40052;
  top: 28%;
  position: absolute;
  align-items: center;
  display: flex;

  font-family: "Dosis", sans-serif;
  font-size: 20px;
`;
