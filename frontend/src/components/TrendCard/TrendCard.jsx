import React from 'react';
import './TrendCard.css';
import { trendsData } from '../../data/trendsData';

const TrendCard = () => {
  return (
    <div className='trendCard'>
      <h3>What's Trending?</h3>
      {trendsData.map((trend) => {
        return (
          <div className='trend'>
            <span className='trend__name'>#{trend.name}</span>
            <span className='trend__shares'>{trend.shares}K shares</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrendCard;
