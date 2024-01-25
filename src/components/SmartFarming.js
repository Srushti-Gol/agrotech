import React, { useEffect } from 'react';
import './CSS/sf.css';
import Footer from './Footer';

function SmartFarming() {
  useEffect(() => {
    const handleFullscreenButtonClick = () => {
      const fullscreenButton = document.querySelector('.ytp-fullscreen-button');

      if (fullscreenButton) {
        fullscreenButton.click();
      }
    };

    const fullscreenButton = document.querySelector('.ytp-fullscreen-button');

    if (fullscreenButton) {
      fullscreenButton.addEventListener('click', handleFullscreenButtonClick);
    }

    return () => {
      if (fullscreenButton) {
        fullscreenButton.removeEventListener('click', handleFullscreenButtonClick);
      }
    };
  }, []);

  return (
    <div>
      <section>
      <h2>Smart Farming</h2>
        <iframe
          title='1'
          width="33%"
          height="75%"
          src="https://www.youtube.com/embed/l0bpy857deM"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe  title='2' width="33%" height="75%" src="https://www.youtube.com/embed/DcYSSTu3rxw" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe title='3' width="33%" height="75%" src="https://www.youtube.com/embed/4aZhevnaLWw"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe title='4' width="33%" height="75%" src="https://www.youtube.com/embed/bYtTaBqP8R8"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe title='5' width="33%" height="75%" src="https://www.youtube.com/embed/5q2o4stgOBw"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe title='6' width="33%" height="75%" src="https://www.youtube.com/embed/ohjK6gqYBNc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe title='7' width="33%" height="75%" src="https://www.youtube.com/embed/CTvnrLONRaI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe title='8' width="33%" height="75%" src="https://www.youtube.com/embed/VofDR7OuQCo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe title='9' width="33%" height="75%" src="https://www.youtube.com/embed/SxJoOh4a0wM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe title='10' width="33%" height="75%" src="https://www.youtube.com/embed/mYdt6CAwKAY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe title='11' width="33%" height="75%" src="https://www.youtube.com/embed/Oa2apuOj5R4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe title='12' width="33%" height="75%" src="https://www.youtube.com/embed/_fCNXEaKJ1s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>
      <Footer />
    </div>
  );
}

export default SmartFarming;
