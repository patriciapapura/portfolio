import './Page.css';

const TravelCulture = () => {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Travel & Culture</h1>
        <p>World exploration and cultural experiences</p>
      </div>
      <div className="page-content">
        <div className="content-grid">
          <div className="content-card">
            <h3>Cultural Immersion</h3>
            <p>Deep diving into local cultures, traditions, and ways of life around the world.</p>
          </div>
          <div className="content-card">
            <h3>Adventure Travel</h3>
            <p>Exploring remote destinations and experiencing the world's natural wonders.</p>
          </div>
          <div className="content-card">
            <h3>Documentation</h3>
            <p>Capturing and sharing travel experiences through photography and storytelling.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCulture;
