import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import PropTypes from 'prop-types'; 
import './index.css';

// Define the styles object
const styles = {
  normalWrapper: {
    maxWidth: '300px',
    height: '400px',
    margin: '20px auto',
    position: 'relative',
  },
  fullScreenWrapper: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: '#000',
    zIndex: 1000,
  }
};

const FullscreenIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M1.5 1h4v1.5h-2.5v2.5h-1.5v-4zm13 0v4h-1.5v-2.5h-2.5v-1.5h4zm-13 13v-4h1.5v2.5h2.5v1.5h-4zm13 0h-4v-1.5h2.5v-2.5h1.5v4z"/>
  </svg>
);

const MinimizeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M5.5 1h-4v1.5h2.5v2.5h1.5v-4zm5 0v4h1.5v-2.5h2.5v-1.5h-4zm-5 13v-4h-1.5v2.5h-2.5v1.5h4zm5 0h4v-1.5h-2.5v-2.5h-1.5v4z"/>
  </svg>
);

// Dynamic text styles based on screen size and mode
const getTextStyles = (isFullScreen) => {
  const baseStyles = {
    title: {
      marginBottom: '1rem',
      transition: 'font-size 0.3s ease',
    },
    description: {
      transition: 'font-size 0.3s ease',
    }
  };

  // Normal mode (non-fullscreen) styles
  if (!isFullScreen) {
    return {
      title: {
        ...baseStyles.title,
        fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
      },
      description: {
        ...baseStyles.description,
        fontSize: 'clamp(0.875rem, 3vw, 1rem)',
      }
    };
  }

  // Fullscreen mode styles with responsive sizes
  return {
    title: {
      ...baseStyles.title,
      fontSize: 'clamp(1.5rem, 5vw, 3rem)',
      '@media (max-width: 768px)': {
        fontSize: 'clamp(1.25rem, 4vw, 2rem)',
      },
    },
    description: {
      ...baseStyles.description,
      fontSize: 'clamp(1rem, 3vw, 1.5rem)',
      '@media (max-width: 768px)': {
        fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)',
      },
    }
  };
};

// ... FullscreenIcon and MinimizeIcon components remain the same ...

const ToggleableCardSwiper = ({ cards }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape' && isFullScreen) {
        setIsFullScreen(false);
      }
    };
  
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isFullScreen]);

  const textStyles = getTextStyles(isFullScreen);

  return (
    <div style={isFullScreen ? styles.fullScreenWrapper : styles.normalWrapper}>
      <button 
        onClick={toggleFullScreen} 
        className="toggle-button"
        style={{
          backgroundColor: isFullScreen ? 'rgba(255, 255, 255, 0.8)' : '#fff',
        }}
      >
        {isFullScreen ? <MinimizeIcon /> : <FullscreenIcon />}
      </button>

      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="swiper-container"
        cardsEffect={{
          slideShadows: false,
          perSlideRotate: 4,
          perSlideOffset: 8,
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div 
              className="card"
              style={{
                backgroundColor: card.backgroundColor,
                color: '#fff'
              }}
            >
              <div className="content">
                <h2 
                  style={{
                    ...textStyles.title,
                    wordBreak: 'break-word'
                  }}
                >
                  <div dangerouslySetInnerHTML={{ __html: card.title }} />
                </h2>
                <div 
                  style={{
                    ...textStyles.description,
                    wordBreak: 'break-word'
                  }}
                  dangerouslySetInnerHTML={{ __html: card.description }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

ToggleableCardSwiper.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ToggleableCardSwiper;