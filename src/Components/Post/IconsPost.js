import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import styled from "styled-components";

const ImageIcon = styled.img`
  height: 30px;
  width: 30px;
`;
const IconText = styled.p`
  width: 50px;
  color: red;
`;
const BoxIcons = styled.div`
  display: flex;
`;
const addLike =
  "https://cdn-icons-png.flaticon.com/512/1067/1067447.png";
const removeLike = "https://cdn-icons-png.flaticon.com/512/889/889140.png";

const repost =
  "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-repost-influencer-marketing-flaticons-lineal-color-flat-icons-2.png";
const comments =
  "https://img.icons8.com/external-others-inmotus-design/2x/external-Comment-round-icons-others-inmotus-design-10.png";

const IconsPost = ({
  likesElement,
  likesPost,
  likeValue,
  repostValue,
  repostPost,
  repostElement,
  commentsValue,
  commentsElement,
  commentsPost,
}) => {
  const reducer = useDispatch();
  const [likeIcon, setLikeIcon] = useState(removeLike);

  function changeLike(e) {
    if (likeValue) {
      reducer({ type: "REMOVE_LIKE", payload: likesElement });
      setLikeIcon(removeLike);
    } else {
      reducer({ type: "ADD_LIKE", payload: likesElement });
      setLikeIcon(addLike);
    }
  }
  function changeRepost(e) {
    if (repostValue) {
      reducer({ type: "REMOVE_REPOST", payload: repostElement });
    } else {
      reducer({ type: "ADD_REPOST", payload: repostElement });
    }
  }
  function changeComments(e) {
    if (commentsValue) {
      reducer({ type: "REMOVE_COMMENT", payload: repostElement });
    } else {
      reducer({ type: "ADD_COMMENT", payload: repostElement });
    }
  }
  return (
    <BoxIcons>
      <ImageIcon
        alt="none"
        src={likeIcon}
        onClick={changeLike}
        likesElement={likesElement}
        likeValue={likeValue}
      />
      <IconText>{likesPost}</IconText>
      <ImageIcon
        alt="none"
        src={repost}
        onClick={changeRepost}
        RepostElement={repostElement}
        repostValue={repostValue}
      />
      <IconText>{repostPost}</IconText>
      <ImageIcon
        alt="none"
        src={comments}
        onClick={changeComments}
        CommentsElement={commentsElement}
        CommentsValue={commentsValue}
      />
      <IconText>{commentsPost}</IconText>
    </BoxIcons>
  );
};

export default IconsPost;
