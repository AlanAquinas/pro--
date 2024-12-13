import React from 'react';
import './FoodTipCard.css';

interface FoodTipProps {
  title: string;
  description: string;
  imageUrl: string;
}

const FoodTipCard: React.FC<FoodTipProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="food-tip-card">
      <img src={imageUrl} alt={title} className="tip-image" />
      <div className="tip-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FoodTipCard;

