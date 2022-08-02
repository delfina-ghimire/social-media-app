import React from 'react';
import './FollowersCard.css';

import { Followers } from '../../data/followersData';

const FollowersCard = () => {
  return (
    <div className='followersCard'>
      <h3 className='followersCard__heading'>Who is following You</h3>
      {Followers.map((follower, id) => {
        return (
          <div className='followersCard__follower'>
            <div className='follower__container'>
              <img src={follower.img} alt='' className='follower__img' />
              <div className='follower__details'>
                <span className='follower__name'>{follower.name}</span>
                <span className='follower__username'>@{follower.username}</span>
              </div>
            </div>
            <button className='btn btn--follow'>Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
