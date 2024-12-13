import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import FoodTipsList from './components/FoodTipsList';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <main>
        <FoodTipsList />
      </main>
      <Footer />
    </div>
  );
};

export default App;

