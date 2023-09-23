import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import lpu2 from '../assets/lpu2.jpg';
import lpu3 from '../assets/lpu3.jpg';

const images = [
  { url: 'https://static.toiimg.com/photo/msid-91687633/91687633.jpg' },
  { url: lpu2 },
  { url: lpu3 }
];

const Carosel = () => {
  return (
    <div data-aos='fade-left' style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <SimpleImageSlider
        width={'100%'}
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlayDelay={3000} // Set the auto-play delay to 3 seconds (3000 milliseconds)
        className='carosel'
      />
    </div>
  );
};

export default Carosel;
