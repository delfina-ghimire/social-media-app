import React, { useState, useRef } from 'react';
import './PostNav.css';
import ProfileImg from '../../img/profileImg.jpg';
import { UilScenery } from '@iconscout/react-unicons';
import { UilPlayCircle } from '@iconscout/react-unicons';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { UilSchedule } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';

const PostNav = () => {
  const [img, setImg] = useState(null);
  const imgRef = useRef();

  const onImgChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImg({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className='PostNav'>
      <img src={ProfileImg} alt='profile' />
      <div className='postNav__container'>
        <input
          className='postInput__input'
          type='text'
          placeholder="What's in your mind?"
        />
        <div className='postOptions'>
          <div
            className='postOptions__option'
            style={{ color: 'var(--photo)' }}
            onClick={() => imgRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div
            className='postOptions__option'
            style={{ color: 'var(--video)' }}
          >
            <UilPlayCircle />
            Video
          </div>
          <div
            className='postOptions__option'
            style={{ color: 'var(--location)' }}
          >
            <UilLocationPoint />
            Location
          </div>
          <div
            className='postOptions__option'
            style={{ color: 'var(--shedule)' }}
          >
            <UilSchedule />
            Schedule
          </div>
          <button className='btn btn--postShare'>Share</button>
          <div style={{ display: 'none' }}>
            <input
              type='file'
              name='myImage'
              ref={imgRef}
              onChange={onImgChange}
            />
          </div>
        </div>

        {img && (
          <div className='previewImg__container'>
            <UilTimes className='previewImg__icon' onClick={() => setImg(null)} />
            <img className='previewImg' src={img.image} alt='' />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostNav;
