import React , { useState } from 'react';

import { AiFillPlayCircle , AiFillPauseCircle , AiFillSound } from 'react-icons/ai';
import { MdSkipNext } from 'react-icons/md'
import { GoMute } from 'react-icons/go';

import audio from '../static/left-4-dead-2-soundtrack-hip-hop-remix-new-soundtrack-download.mp3'

import "../static/sass/components/reproductor.scss";

const Reproductor = () => {
    return (
        <section className="reproductor">           
            <div className="reproductor-information">
                <picture className="reproductor-information__image">
                    <img src="https://i.pinimg.com/originals/5d/84/c2/5d84c2ad3fd7a2c5f89b4b08661a09dc.jpg" alt="album"/>
                </picture>
                <div className="reproductor-information-details">
                <h3 className="reproductor-information-details__music">Hello</h3>
                <h4 className="reproductor-information-details__artis-albm">Adele - ADELE 21</h4>
                </div>
                
            </div>
            <section className="reproductor-controls">
                <MdSkipNext className="reproductor-controls__skipButton reproductor-controls__skipButton--left" />
                <AiFillPlayCircle className="reproductor-controls__play" />
                <MdSkipNext className="reproductor-controls__skipButton reproductor-controls__skipButton--right" />
            </section>
            <section className="reproductor-settings">
                <label htmlFor="control-sound">
                    <input 
                    className="reproductor-settings__input"
                     type="range" 
                     name="control-sound" 
                     id="control-sound"
                     min="0"
                     max="100"
                    />
                </label>
                <AiFillSound className="reproductor-settings__sound" />
            </section>
            <audio src={audio} className="reproductor-audio" id="audio-player" autoPlay ></audio>
        </section>
    )
}

export default Reproductor
