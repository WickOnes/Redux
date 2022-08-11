import React from "react";
import styled from "styled-components";
import Post from "../Post/Post";

const MainBlock = styled.div`
  background: #fffcf7;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  height: 600px;
  box-shadow: 0 0 10px 0px #1a1c1f;
  overflow: scroll;
  overflow-x: hidden;
  width: 45%;
`;
const Main = () => {
  return (
    <MainBlock>
      <Post />
    </MainBlock>
  );
};

export default Main;
