import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import img1 from '../assets/11.jpg';
import img2 from '../assets/10.jpg';
import img3 from '../assets/4.jpg';
import './home.css';
const items = [
  {
    img: img1,
    title: 'First Slide',
    description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    img: img2,
    title: 'Second Slide',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    img: img3,
    title: 'Third Slide',
    description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
  },
];

function Home() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        swipe={true}
        indicators={false}
        cycleNavigation={true}
        animation="slide"
        navButtonsAlwaysVisible={true}
        navButtonsAlwaysInvisible={false}
      >
        {items.map((item, index) => (
          <Paper key={index}>
            <div style={{ position: 'relative' }}>
              <img src={item.img} alt={item.title} style={{ width: '100%', height: '550px' }} />
              <div className='item-container'>
                <h1 className='item-title'>{item.title}</h1>
                <p className='item-discreption'>{item.description}</p>
              </div>
            </div>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
}

export default Home;
