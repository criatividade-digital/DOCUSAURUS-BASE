import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

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
  },
  container: {
    width: '100%',
    height: '100%',
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  toggleButton: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    zIndex: 1001,
    padding: '8px 16px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
    transition: 'background-color 0.3s',
  },
  content: {
    textAlign: 'center',
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

// Define the type for a card (optional - if using TypeScript)
/*
interface Card {
  title: string;
  description: string;
  backgroundColor: string;
}
*/

const ToggleableCardSwiper = ({ cards }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

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

  return (
    <div style={isFullScreen ? styles.fullScreenWrapper : styles.normalWrapper}>
      <button 
        onClick={toggleFullScreen} 
        style={{
          ...styles.toggleButton,
          backgroundColor: isFullScreen ? 'rgba(255, 255, 255, 0.8)' : '#fff',
        }}
      >
        {isFullScreen ? <MinimizeIcon /> : <FullscreenIcon />}
      </button>

      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        style={styles.container}
        cardsEffect={{
          slideShadows: false,
          perSlideRotate: 4,
          perSlideOffset: 8,
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div 
              style={{
                ...styles.card,
                backgroundColor: card.backgroundColor,
                color: '#fff'
              }}
            >
              <div style={styles.content}>
                <h2 style={{ marginBottom: '1rem' }}>{card.title}</h2>
                <p>{card.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ToggleableCardSwiper;