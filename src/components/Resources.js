import React from 'react';
import './Resources.css';

const Resources = () => {
  const crisisLines = [
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "24/7 free and confidential support",
      country: "USA"
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "24/7 crisis support via text",
      country: "USA, Canada, UK"
    },
    {
      name: "SAMHSA National Helpline",
      number: "1-800-662-4357",
      description: "Treatment referral and information service",
      country: "USA"
    },
    {
      name: "Samaritans",
      number: "116 123",
      description: "24/7 emotional support",
      country: "UK & Ireland"
    },
    {
      name: "Lifeline",
      number: "13 11 14",
      description: "24/7 crisis support and suicide prevention",
      country: "Australia"
    }
  ];

  const onlineResources = [
    {
      name: "Psychology Today",
      description: "Find therapists in your area",
      url: "https://www.psychologytoday.com"
    },
    {
      name: "BetterHelp",
      description: "Online therapy and counseling",
      url: "https://www.betterhelp.com"
    },
    {
      name: "MentalHealth.gov",
      description: "Information about mental health",
      url: "https://www.mentalhealth.gov"
    },
    {
      name: "NAMI",
      description: "National Alliance on Mental Illness resources",
      url: "https://www.nami.org"
    },
    {
      name: "Anxiety and Depression Association",
      description: "Information and support for anxiety disorders",
      url: "https://adaa.org"
    }
  ];

  const selfCareActivities = [
    "Take a walk outside",
    "Call a friend or family member",
    "Listen to calming music",
    "Practice deep breathing",
    "Take a warm bath or shower",
    "Write in a journal",
    "Do gentle stretching or yoga",
    "Watch a comforting movie or show",
    "Cook a healthy meal",
    "Spend time with a pet",
    "Read a book",
    "Practice gratitude",
    "Get enough sleep",
    "Limit social media time",
    "Engage in a hobby you enjoy"
  ];

  return (
    <div className="resources">
      <h2>Crisis Resources & Support</h2>
      
      <div className="crisis-alert">
        <h3>⚠️ If you're in immediate danger, please call emergency services (911 in the US)</h3>
      </div>

      <section className="resources-section">
        <h3>📞 Crisis Hotlines</h3>
        <div className="resource-cards">
          {crisisLines.map((line, index) => (
            <div key={index} className="resource-card crisis-line">
              <h4>{line.name}</h4>
              <div className="phone-number">{line.number}</div>
              <p>{line.description}</p>
              <span className="country-tag">{line.country}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="resources-section">
        <h3>🌐 Online Resources</h3>
        <div className="resource-list">
          {onlineResources.map((resource, index) => (
            <div key={index} className="resource-item">
              <h4>{resource.name}</h4>
              <p>{resource.description}</p>
              <a href={resource.url} target="_blank" rel="noopener noreferrer" className="resource-link">
                Visit Website →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="resources-section">
        <h3>💚 Self-Care Activities</h3>
        <p className="section-intro">Small steps can make a big difference. Try these:</p>
        <div className="self-care-grid">
          {selfCareActivities.map((activity, index) => (
            <div key={index} className="self-care-item">
              ✓ {activity}
            </div>
          ))}
        </div>
      </section>

      <section className="resources-section important-reminder">
        <h3>Remember:</h3>
        <ul>
          <li>You are not alone in your struggle</li>
          <li>Seeking help is a sign of strength, not weakness</li>
          <li>Recovery is possible and you deserve support</li>
          <li>Your feelings are valid</li>
          <li>It's okay to not be okay</li>
        </ul>
      </section>
    </div>
  );
};

export default Resources;
