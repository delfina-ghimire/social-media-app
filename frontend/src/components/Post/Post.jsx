import { useState } from "react";
import { useSelector } from "react-redux";
import { likePost } from "../../api/PostRequest";
import { REACT_APP_PUBLIC_FOLDER } from "../../constants";
import Comment from "../../img/comment.png";
import Heart from "../../img/like.png";
import NotLiked from "../../img/notlike.png";
import Share from "../../img/share.png";
import "./Post.css";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  const handleLike = () => {
    setLiked((prev) => !prev);
    likePost(data._id, user._id);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };
  return (
    <div className="post">
      <img
        className="post__image"
        src={data.image ? REACT_APP_PUBLIC_FOLDER + data.image : " "}
        alt="post data"
      />

      <div className="post__reaction">
        <img
          src={liked ? Heart : NotLiked}
          alt="liked"
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "14px" }}>
        {likes} Likes
      </span>
      <div className="post__details">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
