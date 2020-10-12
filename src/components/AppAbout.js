import React from 'react'
import './AppAbout.css'
import Foto from '../images/ggv2.JPG'

const AppAboute = () => {
    return (
        <div className="about">
            <div className="about__photo-container">
                <img className="about__photo" src={Foto} alt="gg.violin" />
            </div>
            <div className="about__text-container">
                <h4>O nas</h4>
                <p className="about__text">W skład zespołu GG.Violin wchodzą bracia Gutek i Gwidon. Obydwaj zawsze byli zafascynowani tworzeniem własnej muzyki. Mimo, iż artystycznie wywodzą się z muzyki klasycznej to ich oryginalne utwory łączą ze sobą elementy różnych stylów takich jak chillout, minimal, indie rocka, czy indie popu. Duże znaczenie w ich twórczości odgrywa muzyka folk. W ich utworach lub aranżacjach można odnaleźć całą paletę barw muzyki świata, od polskiej muzyki ludowej, przez bałkańską, irlandzką, oraz ludową muzykę Ameryki Południowej i Azji.</p>
            </div>
        </div>
    );
}

export default AppAboute;