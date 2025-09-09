import './Page.css';

const PlanetwideCollective = () => {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Planetwide Collective</h1>
        <p>Global community and collaborative projects</p>
      </div>
      <div className="page-content">
        <div className="content-grid">
          <div className="content-card">
            <h3>Global Initiatives</h3>
            <p>Leading and participating in worldwide collaborative projects and movements.</p>
          </div>
          <div className="content-card">
            <h3>Community Building</h3>
            <p>Creating and nurturing communities that span across cultures and continents.</p>
          </div>
          <div className="content-card">
            <h3>Cultural Exchange</h3>
            <p>Facilitating meaningful connections and exchanges between diverse communities.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetwideCollective;
