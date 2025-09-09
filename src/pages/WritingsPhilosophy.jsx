import './Page.css';

const WritingsPhilosophy = () => {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Writings & Philosophy</h1>
        <p>Thoughts, ideas, and philosophical musings</p>
      </div>
      <div className="page-content">
        <div className="content-grid">
          <div className="content-card">
            <h3>Philosophical Essays</h3>
            <p>Exploring deep questions about life, existence, and human nature through writing.</p>
          </div>
          <div className="content-card">
            <h3>Creative Writing</h3>
            <p>Expressing ideas and emotions through poetry, fiction, and creative non-fiction.</p>
          </div>
          <div className="content-card">
            <h3>Reflections</h3>
            <p>Sharing personal insights and reflections on experiences and observations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritingsPhilosophy;
