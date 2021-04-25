import React, { useEffect, useState } from 'react';

import { BsPlayFill } from 'react-icons/bs'

import FoxbelMusicIcon from '../static/icons/foxbel-music-icon@3x.png';

import "../static/sass/components/information-album.scss";
import { GET } from '../utils/API';
const InformationAlbum = ({album , onReproduction}) => {
    const [artist , setArtist ] = useState(null);
    const [ tracks , setTracks  ] = useState(null);
    
    useEffect(() => {
        const dataFetching = async () => {
            setTracks(null);
            setArtist(null);

            const [artistApi , err] = await GET(`https://api.deezer.com/artist/${album.artist.id}`);
            const [tracksApi , errT] = await GET(album.tracklist);

            setArtist(artistApi)
            setTracks(tracksApi.data);
        }
        if(album && album.type === "album") {
            dataFetching();
        }else if(album && album.type === "track") {
            setTracks([album]);
            setArtist(album.artist)
        }
        
    }, [album]);
    return (
        <section className="album-information" style={{backgroundImage: `url("${album ? album.artist.picture_big : ''}")`}} >
            <div className="album-information__image">
                <BsPlayFill className="album-information__image--icon"/>
                <img src={album? album.cover_big || album.album.cover_big : FoxbelMusicIcon} alt={`Portada del album ${album && album.title}`}/>
            </div>
            <section className="album-information-information">
                <h3 className="album-information-information__title">{album? album.title : 'No Seleccionado'}</h3>
                <div className="album-information-information-indicators">
                    <h4 className="album-information-information-indicators__subtitle">
                        {album && (album.type === "album"? 'Lo mejor de ' : 'Canción del album ')}{album && (album.type === 'album' ? album.artist.name : album.album.title)}
                    </h4>
                    <p className="album-information-information-indicators__followers">{artist && artist.nb_fan ? `${artist.nb_fan} seguidores` : '' }</p>
                </div>
                <p className="album-information-information__desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti ex, vel, corporis possimus tempora totam, saepe iusto temporibus nulla culpa accusantium architecto laborum omnis dignissimos soluta fugit labore dolorem tenetur.</p>
                <div className="album-information-information-buttons">
                    {tracks && <button className="album-information-information-buttons-button album-information-information-buttons-button--background" onClick={() => onReproduction(tracks)} >Reproducir</button> }
                    <button className="album-information-information-buttons-button album-information-information-buttons-button--none-background">Seguir</button>
                    <div className="album-information-information-buttons__more">
                        <div className="album-information-information-buttons__more--point"></div>
                        <div className="album-information-information-buttons__more--point"></div>
                        <div className="album-information-information-buttons__more--point"></div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default InformationAlbum
