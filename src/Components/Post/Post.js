import React, { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import IconsPost from "./IconsPost";
import {
  Avatar,
  Avtor,
  AvtorBlock,
  AvtorInfo,
  Content,
  ContentPost,
  Date,
  ImgPublication,
  Name,
  NickName,
  PostBox,
  PostContent,
  Publication,
} from "./StylePost";

const Post = () => {
  const users = useSelector((state) => state.usersReducer);

  return (
    <PostBox>
      {users.map((el, i) => (
        <PostContent key={el.key}>
          <Avtor>
            <Avatar src={el.avatar} />
            <AvtorBlock>
              <AvtorInfo>
                <Name>{el.firstName}</Name>
                <NickName>{el.nickName}</NickName>
                <Date> {el.date}</Date>
              </AvtorInfo>
              <Publication>{el.textPublication}</Publication>
            </AvtorBlock>
          </Avtor>
          <Content>
            <ContentPost>
              <ImgPublication
                style={{ backgroundImage: `url(${el.imagePublication})` }}
              />
              <IconsPost
                likeValue={el.valueLike}
                likesElement={i}
                likesPost={el.likes}
                repostElement={i}
                repostPost={el.repost}
                repostValue={el.valueRepost}
                commentsElement={i}
                commentsPost={el.comments}
                commentsValue={el.valueComments}
              />
            </ContentPost>
          </Content>
        </PostContent>
      ))}
    </PostBox>
  );
};

export default Post;
