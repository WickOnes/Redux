import styled from "styled-components";

export const PostBox = styled.div`
  width: 80%;
`;
export const PostContent = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 300px;
  border-radius: 50px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Avtor = styled.div`
  height: 30%;
  width: 100%;
  margin-top: 10px;
  display: flex;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-left: 10px;
`;

export const AvtorInfo = styled.div`
  display: flex;
  width: 90%;
`;

export const Name = styled.p`
  margin: 0;
  margin-right: 10px;
`;
export const NickName = styled.p`
  margin: 0;
  width: 30%;
  color: gray;
`;
export const Date = styled.p`
  margin: 0;
  color: gray;
`;
export const AvtorBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Publication = styled.div`
  width: 90%;
`;

export const Content = styled.div`
  height: 70%;
  width: 80%;
`;

export const ContentPost = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImgPublication = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
