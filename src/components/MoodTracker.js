import React, { useState, useEffect } from 'react';
import './MoodTracker.css';

const MoodTracker = () => {
  const [moods, setMoods] = useState([]);
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState('');

  useEffect(() => {
    const savedMoods = localStorage.getItem('moods');
    if (savedMoods) {
      setMoods(JSON.parse(savedMoods));
    }
  }, []);

  const moodOptions = [
    { emoji: '😊', label: 'Great', value: 5, color: '#4caf50' },
    { emoji: '🙂', label: 'Good', value: 4, color: '#8bc34a' },
    { emoji: '😐', label: 'Okay', value: 3, color: '#ffc107' },
    { emoji: '😔', label: 'Low', value: 2, color: '#ff9800' },
    { emoji: '😢', label: 'Very Low', value: 1, color: '#f44336' }
  ];

  const handleMoodSubmit = () => {
    if (selectedMood) {
      const newMood = {
        ...selectedMood,
        note,
        date: new Date().toISOString(),
        timestamp: Date.now()
      };
      
      const updatedMoods = [newMood, ...moods];
      setMoods(updatedMoods);
      localStorage.setItem('moods', JSON.stringify(updatedMoods));
      
      setSelectedMood(null);
      setNote('');
      alert('Mood logged! Remember, it\'s okay to not be okay.');
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  };

  return (
    <div className="mood-tracker">
      <h2>How are you feeling today?</h2>
      <p className="subtitle">Tracking your mood can help identify patterns</p>
      
      <div className="mood-options">
        {moodOptions.map((mood) => (
          <div
            key={mood.value}
            className={`mood-option ${selectedMood?.value === mood.value ? 'selected' : ''}`}
            onClick={() => setSelectedMood(mood)}
            style={{ borderColor: selectedMood?.value === mood.value ? mood.color : '#ddd' }}
          >
            <div className="mood-emoji">{mood.emoji}</div>
            <div className="mood-label">{mood.label}</div>
          </div>
        ))}
      </div>

      {selectedMood && (
        <div className="mood-input">
          <textarea
            placeholder="Would you like to add any notes about how you're feeling? (optional)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows="3"
          />
          <button onClick={handleMoodSubmit} className="submit-btn">
            Log Mood
          </button>
        </div>
      )}

      <div className="mood-history">
        <h3>Your Mood History</h3>
        {moods.length === 0 ? (
          <p className="no-data">No moods logged yet. Start tracking today!</p>
        ) : (
          <div className="mood-list">
            {moods.slice(0, 10).map((mood, index) => (
              <div key={index} className="mood-entry">
                <span className="mood-entry-emoji">{mood.emoji}</span>
                <div className="mood-entry-details">
                  <div className="mood-entry-label">{mood.label}</div>
                  <div className="mood-entry-date">{formatDate(mood.date)}</div>
                  {mood.note && <div className="mood-entry-note">"{mood.note}"</div>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MoodTracker;
