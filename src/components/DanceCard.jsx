import './DanceCard.css';

const DanceCard = ({ image, title, tags, category }) => {
  return (
    <div className="dance-card" data-category={category}>
      <div className="dance-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="dance-card-content">
        <h3 className="dance-card-title">{title}</h3>
        <div className="dance-card-tags">
          {tags.map((tag, index) => (
            <span key={index} className="dance-card-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DanceCard;
