import React from 'react'
import './home-neon.css'

const HomeNeon = (props) => {

    const isLetterActive = props.active ? "neon__letter" : "neon__letter off"

    return (
        <>
            <section className="neon">
                <section className="neon__word">
                    <div className={isLetterActive}>W</div>
                    <div className={isLetterActive}>E</div>
                </section>
                <section className="neon__word">
                    <div className={isLetterActive}>A</div>
                    <div className={isLetterActive}>R</div>
                    <div className={isLetterActive}>E</div>
                </section>
                <section className="neon__word">
                    <div className={isLetterActive}>G</div>
                    <div className={isLetterActive}>G</div>
                    <div className={isLetterActive}>.</div>
                    <div className="neon__letter broken">V</div>
                    <div className={isLetterActive}>I</div>
                    <div className={isLetterActive}>O</div>
                    <div className={isLetterActive}>L</div>
                    <div className={isLetterActive}>I</div>
                    <div className={isLetterActive}>N</div>
                </section>
            </section>
        </>
    );
}

export default HomeNeon;

