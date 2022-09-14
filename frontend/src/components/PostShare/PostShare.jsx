import {
  UilLocationPoint,
  UilPlayCircle,
  UilScenery,
  UilSchedule,
  UilTimes,
} from "@iconscout/react-unicons";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadPost } from "../../actions/UploadAction";
import { REACT_APP_PUBLIC_FOLDER } from "../../constants";
import "./PostShare.css";

const PostShare = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const loading = useSelector((state) => state.postReducer.uploading);
  const imageRef = useRef();
  const [image, setImage] = useState(null);
  const desc = useRef();
  const serverPublic = REACT_APP_PUBLIC_FOLDER;

  //handle Image Change
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const reset = () => {
    setImage(null);
    desc.current.value = "";
  };

  //handle post upload
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    //handle image upload
    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      newPost.image = filename;
      console.log(newPost);

      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(uploadPost(newPost));
    reset();
  };

  return (
    <div className="PostNav">
      <img
        src={
          user.coverPicture
            ? serverPublic + user.profilePicture
            : serverPublic + "defaultProfile.png"
        }
        alt="profile"
      />
      <div className="postNav__container">
        <input
          ref={desc}
          required
          className="postInput__input"
          type="text"
          placeholder="What's in your mind?"
        />
        <div className="postOptions">
          <div
            className="postOptions__option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div
            className="postOptions__option"
            style={{ color: "var(--video)" }}
          >
            <UilPlayCircle />
            Video
          </div>
          <div
            className="postOptions__option"
            style={{ color: "var(--location)" }}
          >
            <UilLocationPoint />
            Location
          </div>
          <div
            className="postOptions__option"
            style={{ color: "var(--shedule)" }}
          >
            <UilSchedule />
            Schedule
          </div>
          <button
            className="btn btn--postShare"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Uploading..." : "Share"}
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>

        {image && (
          <div className="previewImg__container">
            <UilTimes
              className="previewImg__icon"
              onClick={() => setImage(null)}
            />
            <img
              className="previewImg"
              src={URL.createObjectURL(image)}
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
