import React, { useEffect, useState } from 'react';

import Navigation from '../components/Navigation';
import MusicCard from '../components/MusicCard';
import Reproductor from '../components/Reproductor';
import InformationAlbum from '../components/InformationAlbum';
import { FaSearch } from 'react-icons/fa'

import { GET } from '../utils/API';

import "../static/sass/pages/home.scss"

const Home = () => {

    const [ albums , setAlbums ] = useState([])
    const [ selectedAlbum , setSelectedAlbum ] = useState(null);
    const [ selectedTracks , setSelectedTracks ] = useState(null);

    useEffect(() => { 
        const fetchData = async () => {
            const num = Math.floor(Math.random() * 4);
            console.log(num);
            let letter;
            switch(num) {
                case 0:
                    letter = 'a'
                    break;
                case 1:
                    letter = 'b'
                    break;
                case 2:
                    letter = 'c'
                    break;
                case 3:
                    letter = 'd'
                    break;
                case 4:
                    letter = 'e'
                    break;
                default:
                    letter = 'f'
                    break;
            }

            const [api , err]= await GET(`https://api.deezer.com/search/album/?q=${letter}&limit=10&output=json`);
            if(err) {
                return null
            }
            setAlbums(api.data);
        }
        fetchData();
    } , [])

    console.log(albums)

    return (
        <section className="home">
            <Reproductor album={selectedAlbum} tracks={selectedTracks} />
            <section className="home-grid">
                <div className="home-grid-nav">
                    <Navigation />
                </div>     
                <div className="home-grid-header">
                    <input type="text" placeholder="Buscar" className="home-grid-header__search"/>
                    <FaSearch className="home-grid-header__icon" />
                </div>
                <div className="home-grid-information">
                    <InformationAlbum album={selectedAlbum} onReproduction={(tracks) => setSelectedTracks(tracks)} />
                </div>
                
                <h2 className="home-grid__title">Resultados</h2>
                <section className="home-grid-results">
                    {albums.map(a => (
                        <MusicCard
                         image={a.cover_medium} 
                         title={a.title} 
                         autor={a.artist.name} 
                         key={a.id} 
                         onclick={(album) => setSelectedAlbum(album)} 
                         album={a} 
                        />    
                    ))}
                </section>
            </section>      
        </section>
    )
}

export default Home
