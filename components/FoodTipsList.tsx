import React from 'react';
import FoodTipCard from './FoodTipCard';
import './FoodTipsList.css';

// Mock data for food tips
const foodTips = [
  {
    id: 1,
    title: 'Eat More Leafy Greens',
    description: 'Leafy greens are packed with vitamins, minerals, and fiber. Try to include spinach, kale, or collard greens in your daily diet.',
    imageUrl: 'https://source.unsplash.com/random/800x600/?salad'
  },
  {
    id: 2,
    title: 'Choose Whole Grains',
    description: 'Whole grains provide more nutrients and fiber than refined grains. Opt for whole wheat bread, brown rice, and oatmeal.',
    imageUrl: 'https://source.unsplash.com/random/800x600/?wholegrain'
  },
  {
    id: 3,
    title: 'Stay Hydrated',
    description: 'Drinking enough water is crucial for your body. Aim for 8 glasses a day and eat water-rich foods like cucumbers and watermelon.',
    imageUrl: 'https://source.unsplash.com/random/800x600/?water'
  }
];

const FoodTipsList: React.FC = () => {
  return (
    <div className="food-tips-list">
      <h2>Healthy Eating Tips</h2>
      <div className="tips-container">
        {foodTips.map((tip) => (
          <FoodTipCard key={tip.id} {...tip} />
        ))}
      </div>
    </div>
  );
};

export default FoodTipsList;

