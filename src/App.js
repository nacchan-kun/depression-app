import React, { useState } from 'react';
import './App.css';
import MoodTracker from './components/MoodTracker';
import BreathingExercise from './components/BreathingExercise';
import Affirmations from './components/Affirmations';
import Resources from './components/Resources';
import Journal from './components/Journal';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch(activeTab) {
      case 'mood':
        return <MoodTracker />;
      case 'breathing':
        return <BreathingExercise />;
      case 'affirmations':
        return <Affirmations />;
      case 'resources':
        return <Resources />;
      case 'journal':
        return <Journal />;
      default:
        return (
          <div className="home-content">
            <h1>Welcome to Your Wellness Space</h1>
            <p className="welcome-message">
              You're not alone. This is a safe space for you to find support, 
              track your feelings, and discover tools to help manage anxiety and depression.
            </p>
            <div className="home-cards">
              <div className="home-card" onClick={() => setActiveTab('mood')}>
                <h3>📊 Mood Tracker</h3>
                <p>Track how you're feeling each day</p>
              </div>
              <div className="home-card" onClick={() => setActiveTab('breathing')}>
                <h3>🫁 Breathing Exercises</h3>
                <p>Calm your mind with guided breathing</p>
              </div>
              <div className="home-card" onClick={() => setActiveTab('affirmations')}>
                <h3>💫 Daily Affirmations</h3>
                <p>Positive messages to lift your spirits</p>
              </div>
              <div className="home-card" onClick={() => setActiveTab('journal')}>
                <h3>📝 Journal</h3>
                <p>Express your thoughts and feelings</p>
              </div>
              <div className="home-card" onClick={() => setActiveTab('resources')}>
                <h3>🆘 Crisis Resources</h3>
                <p>Get immediate help when you need it</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Mental Wellness</h1>
        <p className="tagline">You Matter. You're Not Alone.</p>
      </header>

      <nav className="app-nav">
        <button 
          className={activeTab === 'home' ? 'active' : ''} 
          onClick={() => setActiveTab('home')}
        >
          Home
        </button>
        <button 
          className={activeTab === 'mood' ? 'active' : ''} 
          onClick={() => setActiveTab('mood')}
        >
          Mood
        </button>
        <button 
          className={activeTab === 'breathing' ? 'active' : ''} 
          onClick={() => setActiveTab('breathing')}
        >
          Breathe
        </button>
        <button 
          className={activeTab === 'affirmations' ? 'active' : ''} 
          onClick={() => setActiveTab('affirmations')}
        >
          Affirmations
        </button>
        <button 
          className={activeTab === 'journal' ? 'active' : ''} 
          onClick={() => setActiveTab('journal')}
        >
          Journal
        </button>
        <button 
          className={activeTab === 'resources' ? 'active' : ''} 
          onClick={() => setActiveTab('resources')}
        >
          Resources
        </button>
      </nav>

      <main className="app-content">
        {renderContent()}
      </main>

      <footer className="app-footer">
        <p>If you're in crisis, please reach out for help immediately.</p>
        <p>National Suicide Prevention Lifeline: 988 (US)</p>
      </footer>
    </div>
  );
}

export default App;
