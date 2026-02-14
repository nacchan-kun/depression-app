import React, { useState } from 'react';
import './Affirmations.css';

const Affirmations = () => {
  const affirmations = [
    "I am worthy of love and respect.",
    "My feelings are valid.",
    "I am doing the best I can.",
    "It's okay to take things one day at a time.",
    "I am stronger than my struggles.",
    "I deserve peace and happiness.",
    "My mental health matters.",
    "I am not alone in this journey.",
    "Every small step forward is progress.",
    "I am allowed to ask for help.",
    "My past does not define my future.",
    "I am capable of overcoming challenges.",
    "I choose to be kind to myself today.",
    "I am enough, just as I am.",
    "It's okay to rest when I need to.",
    "I am brave for facing each day.",
    "My emotions don't control me.",
    "I am worthy of good things.",
    "I trust myself to get through this.",
    "I am making progress, even if it's slow.",
    "I deserve to take up space.",
    "My journey is unique and valid.",
    "I am learning and growing every day.",
    "It's okay to have bad days.",
    "I am more resilient than I think.",
    "I choose hope over fear.",
    "I am doing my best, and that's enough.",
    "My voice matters.",
    "I am worthy of care and compassion.",
    "I believe in my ability to heal."
  ];

  const [currentAffirmation, setCurrentAffirmation] = useState(
    affirmations[Math.floor(Math.random() * affirmations.length)]
  );
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favoriteAffirmations');
    return saved ? JSON.parse(saved) : [];
  });

  const getNewAffirmation = () => {
    const newAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    setCurrentAffirmation(newAffirmation);
  };

  const toggleFavorite = (affirmation) => {
    let updatedFavorites;
    if (favorites.includes(affirmation)) {
      updatedFavorites = favorites.filter(fav => fav !== affirmation);
    } else {
      updatedFavorites = [...favorites, affirmation];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favoriteAffirmations', JSON.stringify(updatedFavorites));
  };

  const isFavorite = (affirmation) => favorites.includes(affirmation);

  return (
    <div className="affirmations">
      <h2>Daily Affirmations</h2>
      <p className="subtitle">Positive thoughts to brighten your day</p>

      <div className="affirmation-card">
        <div className="affirmation-text">
          "{currentAffirmation}"
        </div>
        <div className="affirmation-actions">
          <button 
            onClick={() => toggleFavorite(currentAffirmation)}
            className={`favorite-btn ${isFavorite(currentAffirmation) ? 'favorited' : ''}`}
          >
            {isFavorite(currentAffirmation) ? '❤️' : '🤍'}
          </button>
          <button onClick={getNewAffirmation} className="new-affirmation-btn">
            Get New Affirmation
          </button>
        </div>
      </div>

      <div className="affirmation-tips">
        <h3>How to use affirmations:</h3>
        <ul>
          <li>Read them slowly and mindfully</li>
          <li>Repeat them out loud or in your mind</li>
          <li>Believe in what you're saying</li>
          <li>Use them daily for best results</li>
          <li>Write down your favorites</li>
        </ul>
      </div>

      {favorites.length > 0 && (
        <div className="favorites-section">
          <h3>Your Favorite Affirmations</h3>
          <div className="favorites-list">
            {favorites.map((fav, index) => (
              <div key={index} className="favorite-item">
                <span>"{fav}"</span>
                <button 
                  onClick={() => toggleFavorite(fav)}
                  className="remove-favorite"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Affirmations;
