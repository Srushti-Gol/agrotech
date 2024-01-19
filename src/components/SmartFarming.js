import './CSS/sf.css'
import Footer from './Footer';
import React, { useRef } from 'react';

function SmartFarming() {
  const iframeRef = useRef(null);

  const handleFullScreen = () => {
    const iframe = iframeRef.current;

    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
      iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen();
    }
  };
  return (
    <div>
      <section>
            <h2>Smart Farming</h2>
            <iframe  ref={iframeRef} title='1' width="33%" height="75%" src="https://www.youtube.com/embed/l0bpy857deM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe  title='2' width="33%" height="75%" src="https://www.youtube.com/embed/DcYSSTu3rxw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe title='3' width="33%" height="75%" src="https://www.youtube.com/embed/4aZhevnaLWw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe title='4' width="33%" height="75%" src="https://www.youtube.com/embed/bYtTaBqP8R8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe title='5' width="33%" height="75%" src="https://www.youtube.com/embed/5q2o4stgOBw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe title='6' width="33%" height="75%" src="https://www.youtube.com/embed/ohjK6gqYBNc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe title='7' width="33%" height="75%" src="https://www.youtube.com/embed/CTvnrLONRaI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe title='8' width="33%" height="75%" src="https://www.youtube.com/embed/VofDR7OuQCo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe title='9' width="33%" height="75%" src="https://www.youtube.com/embed/SxJoOh4a0wM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe title='10' width="33%" height="75%" src="https://www.youtube.com/embed/mYdt6CAwKAY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe title='11' width="33%" height="75%" src="https://www.youtube.com/embed/Oa2apuOj5R4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe title='12' width="33%" height="75%" src="https://www.youtube.com/embed/_fCNXEaKJ1s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <button onClick={handleFullScreen}>Go Fullscreen</button>
        </section>

        <Footer />
    </div>
  )
}

export default SmartFarming
