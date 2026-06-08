import { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundVideo from '../assets/background_powerpuff.mp4';
import dancerImg from '../assets/dancer.png';
import contentImg from '../assets/content.png';
import techImg from '../assets/tech.png';
import planetwideImg from '../assets/planetwide.png';
import travelImg from '../assets/travel.png';
import writingImg from '../assets/writing.png';
import './CharacterSlider.css';

const CharacterSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const characters = useMemo(() => [
    {
      id: 'dance-performance',
      title: 'Dance & Performance',
      description: 'Expressive movement and artistic performance',
      color: '#ff6b6b',
      image: dancerImg,
      path: '/dance-performance'
    },
    {
      id: 'videography',
      title: 'Videography & Content Creation',
      description: 'Visual storytelling and creative content',
      color: '#4ecdc4',
      image: contentImg,
      path: '/videography'
    },
    {
      id: 'tech-research',
      title: 'Tech & Research',
      description: 'Innovation and technological exploration',
      color: '#45b7d1',
      image: techImg,
      path: '/tech-research'
    },
    {
      id: 'planetwide-collective',
      title: 'Planetwide Collective',
      description: 'Global community and collaborative projects',
      color: '#96ceb4',
      image: planetwideImg,
      path: '/planetwide-collective'
    },
    {
      id: 'travel-culture',
      title: 'Travel & Culture',
      description: 'World exploration and cultural experiences',
      color: '#feca57',
      image: travelImg,
      path: '/travel-culture'
    },
    {
      id: 'writings-philosophy',
      title: 'Writings & Philosophy',
      description: 'Thoughts, ideas, and philosophical musings',
      color: '#ff9ff3',
      image: writingImg,
      path: '/writings-philosophy'
    }
  ], []);

  const handleScroll = useCallback((e) => {
    const delta = e.deltaY;
    if (delta > 0) {
      // Scroll down - move to next character (circular)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % characters.length);
    } else if (delta < 0) {
      // Scroll up - move to previous character (circular)
      setCurrentIndex((prevIndex) => (prevIndex - 1 + characters.length) % characters.length);
    }
  }, [characters.length]);

  const handleCharacterClick = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + characters.length) % characters.length);
    } else if (e.key === 'ArrowRight') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % characters.length);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCharacterClick(characters[currentIndex].path);
    }
  }, [characters, currentIndex, handleCharacterClick]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + characters.length) % characters.length);
  }, [characters.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % characters.length);
  }, [characters.length]);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleScroll, handleKeyDown]);

  return (
    <div 
      className="character-slider"
      tabIndex={0}
      role="region"
      aria-label="Portfolio sections carousel"
    >
      <video 
        className="background-video" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="video-overlay"></div>
      <button 
        className="arrow-button arrow-left"
        onClick={handlePrevious}
        aria-label="Previous character"
      >
        ←
      </button>
      
      <div className="slider-container">
        {(() => {
          const prevIndex = (currentIndex - 1 + characters.length) % characters.length;
          const nextIndex = (currentIndex + 1) % characters.length;
          const visibleCharacters = [
            { character: characters[prevIndex], index: prevIndex, position: 'prev' },
            { character: characters[currentIndex], index: currentIndex, position: 'active' },
            { character: characters[nextIndex], index: nextIndex, position: 'next' }
          ];
          
          return visibleCharacters.map(({ character, index, position }) => (
            <div
              key={character.id}
              className={`character-card ${position}`}
              style={{ '--character-color': character.color }}
              onClick={() => handleCharacterClick(character.path)}
            >
              <div className="character-image">
                <img 
                  src={character.image} 
                  alt={character.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="character-content">
                <h2 className="character-title">{character.title}</h2>
              </div>
            </div>
          ));
        })()}
      </div>
      
      <button 
        className="arrow-button arrow-right"
        onClick={handleNext}
        aria-label="Next character"
      >
        →
      </button>
      
    </div>
  );
};

export default CharacterSlider;
