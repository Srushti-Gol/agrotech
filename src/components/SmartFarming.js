import React from 'react'
import './CSS/sf.css'
function SmartFarming() {
  return (
    <div>
      <section>
      <h2>Courses</h2>
      <div className="videos-container">
        <video src="" width="33%" poster="img/electrochemistry.jpg" controls></video>
        <video src="video/html.m4v" width="33%" poster="img/webdev.png" controls></video>
        <video src="video/maths.mp4" width="33%" poster="img/maths.jpg" controls></video>
      </div>
      <br />
      <br />
      <br />
      <div className="videos-container">
        <video src="video/Electrochemistry Lecture 3.mp4" width="33%" poster="img/electrochemistry l3.jpg" controls></video>
        <video src="video/cpp.mp4" width="33%" poster="img/cpp.jpg" controls></video>
        <video src="video/maths2.mp4" width="33%" poster="img/maths2.jpg" controls></video>
      </div>
    </section>
    </div>
  )
}

export default SmartFarming
