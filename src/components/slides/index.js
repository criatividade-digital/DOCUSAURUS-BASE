import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// Import required modules
import { EffectCards } from 'swiper/modules';

// You might want to add these styles to your CSS file
const styles = {
  container: {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    minHeight: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    color: '#333',
  }
};

const CardSwiper = () => {
  return (
    <div style={styles.container}>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div style={styles.card}>Card 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={styles.card}>Card 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={styles.card}>Card 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={styles.card}>Card 4</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={styles.card}>Card 5</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CardSwiper;