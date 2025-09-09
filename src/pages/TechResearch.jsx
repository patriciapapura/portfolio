import './Page.css';

const TechResearch = () => {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Tech & Research</h1>
        <p>Innovation and technological exploration</p>
      </div>
      <div className="page-content">
        <div className="content-grid">
          <div className="content-card">
            <h3>Software Development</h3>
            <p>Building innovative applications and exploring cutting-edge technologies.</p>
          </div>
          <div className="content-card">
            <h3>Research Projects</h3>
            <p>Conducting research in emerging fields and contributing to technological advancement.</p>
          </div>
          <div className="content-card">
            <h3>Open Source</h3>
            <p>Contributing to open source projects and building tools for the community.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechResearch;
