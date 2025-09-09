import { useState } from 'react';
import './Page.css';
import DanceCard from '../components/DanceCard';
import DanceHeader from '../components/DanceHeader';
import '../components/DanceCard.css';

const DancePerformance = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample dance data - you can replace these with your actual images and content
  const danceItems = [
    {
      id: 1,
      image: '/src/assets/dancer.png',
      title: 'Contemporary Solo Performance',
      tags: ['performance', 'contemporary', 'solo'],
      category: 'performance'
    },
    {
      id: 2,
      image: '/src/assets/dancer.png',
      title: 'Dance Workshop: Movement Fundamentals',
      tags: ['teaching', 'workshop', 'fundamentals'],
      category: 'teaching'
    },
    {
      id: 3,
      image: '/src/assets/dancer.png',
      title: 'Exploring Space and Time in Dance',
      tags: ['concepts', 'space', 'time', 'theory'],
      category: 'concepts'
    },
    {
      id: 4,
      image: '/src/assets/dancer.png',
      title: 'Group Choreography: Unity in Motion',
      tags: ['performance', 'group', 'choreography'],
      category: 'performance'
    },
    {
      id: 5,
      image: '/src/assets/dancer.png',
      title: 'Teaching Modern Dance Techniques',
      tags: ['teaching', 'modern', 'techniques'],
      category: 'teaching'
    },
    {
      id: 6,
      image: '/src/assets/dancer.png',
      title: 'The Philosophy of Movement',
      tags: ['concepts', 'philosophy', 'movement'],
      category: 'concepts'
    },
    {
      id: 7,
      image: '/src/assets/dancer.png',
      title: 'Street Dance Performance',
      tags: ['performance', 'street', 'urban'],
      category: 'performance'
    },
    {
      id: 8,
      image: '/src/assets/dancer.png',
      title: 'Dance Therapy Workshop',
      tags: ['teaching', 'therapy', 'healing'],
      category: 'teaching'
    },
    {
      id: 9,
      image: '/src/assets/dancer.png',
      title: 'Cultural Dance Traditions',
      tags: ['concepts', 'culture', 'tradition'],
      category: 'concepts'
    },
    {
      id: 10,
      image: '/src/assets/dancer.png',
      title: 'Experimental Movement Piece',
      tags: ['performance', 'experimental', 'avant-garde'],
      category: 'performance'
    },
    {
      id: 11,
      image: '/src/assets/dancer.png',
      title: 'Beginner Ballet Classes',
      tags: ['teaching', 'ballet', 'beginner'],
      category: 'teaching'
    },
    {
      id: 12,
      image: '/src/assets/dancer.png',
      title: 'The Body as Canvas',
      tags: ['concepts', 'body', 'art', 'expression'],
      category: 'concepts'
    },
    {
      id: 13,
      image: '/src/assets/dancer.png',
      title: 'Flamenco Fusion Performance',
      tags: ['performance', 'flamenco', 'fusion', 'cultural'],
      category: 'performance'
    },
    {
      id: 14,
      image: '/src/assets/dancer.png',
      title: 'Hip-Hop Battle Workshop',
      tags: ['teaching', 'hip-hop', 'battle', 'urban'],
      category: 'teaching'
    },
    {
      id: 15,
      image: '/src/assets/dancer.png',
      title: 'The Art of Improvisation',
      tags: ['concepts', 'improvisation', 'creativity', 'spontaneity'],
      category: 'concepts'
    },
    {
      id: 16,
      image: '/src/assets/dancer.png',
      title: 'Contemporary Duet: Connection',
      tags: ['performance', 'contemporary', 'duet', 'connection'],
      category: 'performance'
    },
    {
      id: 17,
      image: '/src/assets/dancer.png',
      title: 'Dance Anatomy & Movement',
      tags: ['teaching', 'anatomy', 'movement', 'education'],
      category: 'teaching'
    },
    {
      id: 18,
      image: '/src/assets/dancer.png',
      title: 'Cultural Exchange Through Dance',
      tags: ['concepts', 'culture', 'exchange', 'global'],
      category: 'concepts'
    },
    {
      id: 19,
      image: '/src/assets/dancer.png',
      title: 'Jazz Dance Showcase',
      tags: ['performance', 'jazz', 'showcase', 'rhythm'],
      category: 'performance'
    },
    {
      id: 20,
      image: '/src/assets/dancer.png',
      title: 'Partnering Techniques Workshop',
      tags: ['teaching', 'partnering', 'techniques', 'trust'],
      category: 'teaching'
    },
    {
      id: 21,
      image: '/src/assets/dancer.png',
      title: 'Dance as Storytelling',
      tags: ['concepts', 'storytelling', 'narrative', 'expression'],
      category: 'concepts'
    },
    {
      id: 22,
      image: '/src/assets/dancer.png',
      title: 'Modern Dance Ensemble',
      tags: ['performance', 'modern', 'ensemble', 'collective'],
      category: 'performance'
    },
    {
      id: 23,
      image: '/src/assets/dancer.png',
      title: 'Dance for Mental Health',
      tags: ['teaching', 'mental-health', 'therapy', 'wellness'],
      category: 'teaching'
    },
    {
      id: 24,
      image: '/src/assets/dancer.png',
      title: 'The Physics of Movement',
      tags: ['concepts', 'physics', 'movement', 'science'],
      category: 'concepts'
    },
    {
      id: 25,
      image: '/src/assets/dancer.png',
      title: 'Latin Dance Fusion',
      tags: ['performance', 'latin', 'fusion', 'rhythm'],
      category: 'performance'
    },
    {
      id: 26,
      image: '/src/assets/dancer.png',
      title: 'Choreography Composition',
      tags: ['teaching', 'choreography', 'composition', 'creation'],
      category: 'teaching'
    },
    {
      id: 27,
      image: '/src/assets/dancer.png',
      title: 'Dance and Technology',
      tags: ['concepts', 'technology', 'innovation', 'future'],
      category: 'concepts'
    },
    {
      id: 28,
      image: '/src/assets/dancer.png',
      title: 'Acrobatic Dance Performance',
      tags: ['performance', 'acrobatic', 'athletic', 'dynamic'],
      category: 'performance'
    },
    {
      id: 29,
      image: '/src/assets/dancer.png',
      title: 'Dance History & Evolution',
      tags: ['teaching', 'history', 'evolution', 'education'],
      category: 'teaching'
    },
    {
      id: 30,
      image: '/src/assets/dancer.png',
      title: 'The Psychology of Dance',
      tags: ['concepts', 'psychology', 'mind', 'behavior'],
      category: 'concepts'
    }
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'performance', label: 'Performance' },
    { key: 'teaching', label: 'Teaching' },
    { key: 'concepts', label: 'Concepts' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? danceItems 
    : danceItems.filter(item => item.category === activeFilter);

  // Debug: Log the counts
  console.log(`Total dance items: ${danceItems.length}`);
  console.log(`Filtered items: ${filteredItems.length}`);
  console.log(`Active filter: ${activeFilter}`);

  return (
    <div className="page">
      <DanceHeader />
      <div className="page-content dance-page-content">
        {/* Debug info - remove this after confirming all cards display */}
        <div style={{ 
          position: 'fixed', 
          top: '100px', 
          right: '20px', 
          background: 'rgba(0,0,0,0.8)', 
          color: 'white', 
          padding: '10px', 
          borderRadius: '5px',
          zIndex: 1002,
          fontSize: '12px'
        }}>
          Showing: {filteredItems.length} / {danceItems.length} cards
          <br />
          Filter: {activeFilter}
        </div>
        
        {/* Pinterest-style Masonry Layout */}
        {filteredItems.length > 0 ? (
          <div className="dance-masonry">
            {filteredItems.map(item => (
              <DanceCard
                key={item.id}
                image={item.image}
                title={item.title}
                tags={item.tags}
                category={item.category}
              />
            ))}
          </div>
        ) : (
          <div className="dance-empty-state">
            <h3>No items found</h3>
            <p>Try selecting a different category to see more content.</p>
          </div>
        )}
      </div>
      
      {/* Filter Bar - Fixed at bottom with overlay */}
      <div className="dance-filter-bar-overlay">
        <div className="dance-filter-bar">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`dance-filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DancePerformance;
