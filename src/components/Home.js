import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import img1 from '../assets/11.jpg';
import img2 from '../assets/10.jpg';
import img3 from '../assets/4.jpg';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

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

const reviews = [
  {
    img: 'https://d1hbpr09pwz0sk.cloudfront.net/profile_pic/regan-blee-80a9a6a9',
    author: 'John Doe',
    occupation: 'Farmer',
    quote: 'AgroTech has been a game-changer for my farm. The Crop Recommendation feature helped me choose the right crops, and the Crop Yield Prediction was spot-on. It has truly revolutionized the way I plan and manage my harvests.',
  },
  {
    img: 'https://elenasquareeyes.files.wordpress.com/2023/03/sarah-jane-smith.jpg',
    author: 'Jane Smith',
    occupation: 'Agricultural Scientist',
    quote: 'As an agricultural scientist, I appreciate the scientific precision AgroTech brings to farming. The Soil Analysis feature provides invaluable insights into soil health, and the AI-driven Agribot Chat is a fantastic resource for quick and accurate information.',
  },
  {
    img: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/305537_v9_bb.jpg',
    author: 'Michael Johnson',
    occupation: 'Farming Enthusiast',
    quote: 'I\'m impressed with AgroTech\'s commitment to sustainable agriculture. The Fertilizer Recommendation feature has helped me optimize fertilizer usage, reducing waste and maximizing yield. This platform is a must-have for anyone serious about modern farming.',
  },
];


const features = [
  { name: 'Crop Recommendation', description: 'Discover the best crops for your farm.' },
  { name: 'Crop Yield Prediction', description: 'Predict and plan your harvest with accuracy.' },
  { name: 'Fertilizer Recommendation', description: 'Optimize fertilizer usage for maximum yield.' },
  { name: 'Soil Analysis', description: 'Understand your soil health for effective management.' },
  { name: 'Plant Disease Detection', description: 'Detect and diagnose plant diseases early.' },
  { name: 'Agribot Chat', description: 'Get instant answers to your farming queries.' },
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
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center mb-3">
            <h1>Empowering Agriculture with Smart Solutions</h1>
            <p>Revolutionizing the agricultural landscape by integrating advanced technologies.<br /> Transforming traditional farming practices with cutting-edge solutions for increased efficiency, productivity, and sustainability.</p>
          </div>
        </div>

        <div className="row second-row">
          <div className="col-md-4">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="row feature-row left">
                <h3>{feature.name}</h3>
                <h6>{feature.description}</h6>
              </div>
            ))}
          </div>

          <div className="col-md-4 text-center">
            <div className="circular-image"></div>
          </div>

          <div className="col-md-4">
            {features.slice(3).map((feature, index) => (
              <div key={index} className="row feature-row">
                <h3>{feature.name}</h3>
                <h6>{feature.description}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
       
      <div className='reviews'>
        <h2 className='text-center'>Expert Says..</h2>
      <Carousel
        autoPlay={true}
        swipe={true}
        indicators={false}
        cycleNavigation={true}
        animation="slide"
        navButtonsAlwaysVisible={true}
        navButtonsAlwaysInvisible={false}
      >
        {reviews.map((review, index) => (
          <Paper key={index}>
            <div style={{ position: 'relative' }}>
              <img src={review.img} alt={review.author} />
              <div className='review-container'>
                <h3 className='review-title'>{review.author}</h3>
                <h6 className='review-subtitle'>{review.occupation}</h6>
                <p className='review-discreption'>{review.quote}</p>
              </div>
            </div>
          </Paper>
        ))}
      </Carousel>
      </div>

      <footer className="site-footer">
        <div className="container">
          <div className="row w-100">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">Agrotech.com <i>FARMER WANTS TO BE SMART </i>AgroTech is a pioneering initiative at the intersection of agriculture and technology. With a commitment to leveraging cutting-edge advancements in Artificial Intelligence and Machine Learning, we empower farmers with intelligent solutions for modern agriculture.
    Our platform seamlessly integrates features such as Crop Recommendation, Crop Yield Prediction, Fertilizer Optimization, Soil Analysis, Plant Disease Detection, and an AI-driven Agribot Chat. We strive to revolutionize traditional farming practices by providing farmers with accurate insights and recommendations, thereby enhancing efficiency, productivity, and sustainability in agriculture.</p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Services</h6>
              <ul className="footer-links">
                <li><a href="#Crop Recommendationr">Crop Recommendation</a></li>
                <li><a href="#Crop Yield Prediction">Crop Yield Prediction</a></li>
                <li><a href="#Fertilizer Recommendation">Fertilizer Recommendation</a></li>
                <li><a href="#Soil Analysis">Soil Analysis</a></li>
                <li><a href="#Plant Disease Detection">Plant Disease Detection</a></li>
                <li><a href="#Agribot">Agribot</a></li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li><a href="#quick-about">About Us</a></li>
                <li><a href="#quick-contact">Contact Us</a></li>
                <li><a href="#quick-contribute">Contribute</a></li>
                <li><a href="#quick-privacy">Privacy Policy</a></li>
                <li><a href="#quick-sitemap">Sitemap</a></li>
              </ul>
            </div>
            <hr />
          </div>
        </div>
        <div className="container">
          <div className="row w-100">
            <div className="col-md-8">
              <p className="copyright-text">Copyright &copy; 2024 All Rights Reserved by
                <span> Agrotech</span>.
              </p>
            </div>

            <div className="col-md-4">
              <ul className="social-icons">
                <li><a className="twitter" href="#twitter"><i className="fa fa-twitter"></i></a></li>
                <li><a className="dribbble" href="#dribbble"><i className="fa fa-dribbble"></i></a></li>
                <li><a className="linkedin" href="#linkedin"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Home;
