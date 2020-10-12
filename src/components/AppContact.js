import React from 'react'
import './AppContact.css'
import Foto from '../images/ggv1.JPG'
import Foto_note from '../images/nutka.png'



const AppContact = () => {
    return (
        <div className="contact">
            <div className="contact__photo-container">
                <img className="contact__photo" src={Foto} alt="gg.violin" />
            </div>
            <div className="contact__text-container">
                <h4>Contact</h4>
                <p>W sprawie biznesowej napisz na nasz email: <strong>ggviolin.contact@gmail.com</strong>
                    <br />
                Lub napisz do nas na Instagramie lub Tiktoku: <strong>@gg.violin</strong></p>
            </div>
            <div className="contact__background-container">
                <img className="contact__background-item" src={Foto_note} alt="note" />
            </div>
        </div>
    );
}

export default AppContact;