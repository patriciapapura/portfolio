import './Page.css';

const Videography = () => {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Videography & Content Creation</h1>
        <p>Visual storytelling and creative content</p>
      </div>
      <div className="page-content">
        <div className="content-grid">
          <div className="content-card">
            <h3>Documentary Films</h3>
            <p>Capturing real stories and experiences through compelling documentary filmmaking.</p>
          </div>
          <div className="content-card">
            <h3>Creative Content</h3>
            <p>Producing engaging visual content for digital platforms and social media.</p>
          </div>
          <div className="content-card">
            <h3>Event Coverage</h3>
            <p>Professional video coverage of performances, events, and special occasions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videography;
