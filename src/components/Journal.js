import React, { useState, useEffect } from 'react';
import './Journal.css';

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [currentEntry, setCurrentEntry] = useState('');
  const [isWriting, setIsWriting] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    const savedEntries = localStorage.getItem('journalEntries');
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  const saveEntry = () => {
    if (currentEntry.trim()) {
      const newEntry = {
        id: Date.now(),
        content: currentEntry,
        date: new Date().toISOString(),
        timestamp: Date.now()
      };
      
      const updatedEntries = [newEntry, ...entries];
      setEntries(updatedEntries);
      localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
      
      setCurrentEntry('');
      setIsWriting(false);
      alert('Entry saved! Writing can be a powerful tool for healing.');
    }
  };

  const deleteEntry = (id) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      const updatedEntries = entries.filter(entry => entry.id !== id);
      setEntries(updatedEntries);
      localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
      setSelectedEntry(null);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const journalPrompts = [
    "What am I grateful for today?",
    "What made me smile recently?",
    "What's one thing I accomplished today, no matter how small?",
    "How am I feeling right now, and why?",
    "What do I need to let go of?",
    "What would I tell a friend who feels the way I do?",
    "What are three things I like about myself?",
    "What's something positive that could happen tomorrow?",
    "What's been weighing on my mind?",
    "What made today better than yesterday?"
  ];

  return (
    <div className="journal">
      <h2>Personal Journal</h2>
      <p className="subtitle">A safe space for your thoughts</p>

      {!isWriting && !selectedEntry && (
        <>
          <button onClick={() => setIsWriting(true)} className="new-entry-btn">
            ✏️ New Journal Entry
          </button>

          <div className="journal-prompts">
            <h3>Writing Prompts</h3>
            <p>Need inspiration? Try answering one of these:</p>
            <div className="prompts-list">
              {journalPrompts.map((prompt, index) => (
                <div 
                  key={index} 
                  className="prompt-item"
                  onClick={() => {
                    setCurrentEntry(prompt + '\n\n');
                    setIsWriting(true);
                  }}
                >
                  {prompt}
                </div>
              ))}
            </div>
          </div>

          <div className="entries-list">
            <h3>Your Entries</h3>
            {entries.length === 0 ? (
              <p className="no-entries">No entries yet. Start writing to express yourself!</p>
            ) : (
              <div className="entries-grid">
                {entries.map((entry) => (
                  <div 
                    key={entry.id} 
                    className="entry-preview"
                    onClick={() => setSelectedEntry(entry)}
                  >
                    <div className="entry-date">{formatDate(entry.date)}</div>
                    <div className="entry-snippet">
                      {entry.content.substring(0, 100)}
                      {entry.content.length > 100 ? '...' : ''}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}

      {isWriting && (
        <div className="writing-area">
          <textarea
            value={currentEntry}
            onChange={(e) => setCurrentEntry(e.target.value)}
            placeholder="Start writing... Let your thoughts flow freely. This is your private space."
            autoFocus
            rows="15"
          />
          <div className="writing-controls">
            <button onClick={saveEntry} className="save-btn">
              Save Entry
            </button>
            <button onClick={() => {
              setIsWriting(false);
              setCurrentEntry('');
            }} className="cancel-btn">
              Cancel
            </button>
          </div>
          <div className="word-count">
            Words: {currentEntry.trim().split(/\s+/).filter(w => w.length > 0).length}
          </div>
        </div>
      )}

      {selectedEntry && (
        <div className="entry-view">
          <button onClick={() => setSelectedEntry(null)} className="back-btn">
            ← Back to Entries
          </button>
          <div className="entry-full">
            <div className="entry-header">
              <h3>{formatDate(selectedEntry.date)}</h3>
              <button 
                onClick={() => deleteEntry(selectedEntry.id)} 
                className="delete-btn"
              >
                🗑️ Delete
              </button>
            </div>
            <div className="entry-content">
              {selectedEntry.content}
            </div>
          </div>
        </div>
      )}

      <div className="journal-benefits">
        <h3>Benefits of Journaling:</h3>
        <ul>
          <li>Helps process emotions and experiences</li>
          <li>Reduces stress and anxiety</li>
          <li>Improves self-awareness</li>
          <li>Tracks patterns in thoughts and moods</li>
          <li>Provides a healthy outlet for feelings</li>
        </ul>
      </div>
    </div>
  );
};

export default Journal;
