import React , { useEffect, useState } from 'react';

import { AiFillPlayCircle , AiFillPauseCircle , AiFillSound } from 'react-icons/ai';
import { MdSkipNext } from 'react-icons/md';
import { GoMute } from 'react-icons/go';

import FoxbelMusicIconWhite from '../static/icons/foxbel-music-white-icon.png';

import "../static/sass/components/reproductor.scss";

const Reproductor = ({album , music , tracks}) => {
    const [index , setIndex] = useState(0);
    const [albumPlayed , setAlbumPlayed ] = useState(album);
    const [tracksPlayed , setTracksPlayed ] = useState(tracks);
    const [musicTracking , setMusicTracking] = useState('');
    const [isPlaying , setIsPlaying] = useState(false);
    const [volumen , setVolumen] = useState(1);

    const isDiferent = album && tracks && album.md5_image === tracks[0].md5_image;

    useEffect(() => {
        setIndex(0);
        if(isDiferent) {
            setMusicTracking(tracks[0].preview)
            setAlbumPlayed(album);
            setTracksPlayed(tracks);
            setIsPlaying(false);
        }
    } , [album , tracks , music])

    const onPlay = () => {
        const audioPlayer = document.querySelector('audio')
        if(isPlaying) {
            audioPlayer.pause()
        }else {
            audioPlayer.play()
        }
        setIsPlaying(!isPlaying)
    }
    const onPause = () => {
        setIsPlaying(false);

        const audioPlayer = document.querySelector('audio');
        
        if(audioPlayer.duration == audioPlayer.currentTime) {
            if( index + 1 < tracksPlayed.length) {
                setIndex(index + 1)
                setMusicTracking(tracksPlayed[index + 1].preview)
            }else {
                setIndex(0)
                setMusicTracking(tracksPlayed[0].preview)
            }
            
        }
    }
    const onSkip = (left) => {
        if(tracksPlayed.length !== 0) {
            setIsPlaying(false);
        } 
        if(left) {
            if( index + 1 < tracksPlayed.length) {
                setIndex(index + 1)
                setMusicTracking(tracksPlayed[index + 1].preview)
            }else {
                setIndex(0)
                setMusicTracking(tracksPlayed[0].preview)
            }
        }else {
            if( index === 0) {
                setIndex(tracksPlayed.length - 1)
                setMusicTracking(tracksPlayed[tracksPlayed.length - 1].preview)
            }else {
                setIndex(index - 1)
                setMusicTracking(tracksPlayed[index - 1].preview)
            }
        }
        
    }
    const onChange = (e) => {
        const value = e.target.value;
        const audioPlayer = document.querySelector('audio')
        setVolumen(value/100);
        audioPlayer.volume = value/100;
    }

    return (
        <section className="reproductor">           
            <div className="reproductor-information">
                <picture className="reproductor-information__image">
                    <img src={albumPlayed? albumPlayed.cover_medium || albumPlayed.album.cover_medium : FoxbelMusicIconWhite} alt={`portada de la canción`}/>
                </picture>
                <div className="reproductor-information-details">
                <h3 className="reproductor-information-details__music">{tracksPlayed ? tracksPlayed[index].title : 'No seleccionado'}</h3>
                <h4 className="reproductor-information-details__artis-albm">{albumPlayed ? albumPlayed.artist.name : 'No seleccionado'} - {albumPlayed? albumPlayed.type === "track" ? albumPlayed.album.title : albumPlayed.title : 'No seleccionado'}</h4>
                </div>
                
            </div>
            <section className="reproductor-controls">
                <MdSkipNext className="reproductor-controls__skipButton reproductor-controls__skipButton--left" onClick={() => onSkip(false)} />
                {!isPlaying ? <AiFillPlayCircle className="reproductor-controls__play" onClick={onPlay} /> : <AiFillPauseCircle className="reproductor-controls__play" onClick={onPlay} />}
                <MdSkipNext className="reproductor-controls__skipButton reproductor-controls__skipButton--right" onClick={() => onSkip(true)} />
            </section>
            <section className="reproductor-settings">
                <label htmlFor="control-sound">
                    <input 
                    className="reproductor-settings__input"
                     type="range" 
                     name="control-sound" 
                     id="control-sound"
                     value={volumen*100}
                     min="0"
                     max="100"
                     onInput={onChange}
                    />
                </label>
                {volumen === 0 ?<GoMute className="reproductor-settings__sound" /> :<AiFillSound className="reproductor-settings__sound" />}
                
            </section>
            <audio src={musicTracking} onPause={onPause} className="reproductor-audio" id="audio-player" ></audio>
        </section>
    )
}

export default Reproductor
