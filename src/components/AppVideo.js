import React from 'react'
import './AppVideo.css'
import Foto from '../images/ggv3.JPG'

const AppVideo = () => {
    return (
        <div className="video">
            <div className="video__photo-container">
                <img className="video__photo" src={Foto} alt="gg.violin" />
            </div>
            <div className="video__main-container">
                <h4>Video</h4>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus hic quae dignissimos, possimus illum quos quibusdam beatae, odio dolore distinctio doloribus non tempore cupiditate voluptatum odit expedita, fuga tenetur quidem!</p> */}
                <div className="video__iFrame-container">
                    <iframe title="one" className="video__iFrame" width="400" height="225" src="https://www.youtube.com/embed/_yRZH0yVMc0" frameBorder="0" allowFullScreen></iframe>
                    <iframe title="two" className="video__iFrame" width="400" height="225" src="https://www.youtube.com/embed/pyiHcGIzD5E" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
}

export default AppVideo;