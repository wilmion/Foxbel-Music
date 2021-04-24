import React from 'react';

import Navigation from '../components/Navigation';
import MusicCard from '../components/MusicCard';
import Reproductor from '../components/Reproductor';
import InformationAlbum from '../components/InformationAlbum';
import { FaSearch } from 'react-icons/fa'

import "../static/sass/pages/home.scss"

const Home = () => {
    return (
        <section className="home">
            <Reproductor />
            <section className="home-grid">
                <div className="home-grid-nav">
                    <Navigation />
                </div>     
                <div className="home-grid-header">
                    <input type="text" placeholder="Buscar" className="home-grid-header__search"/>
                    <FaSearch className="home-grid-header__icon" />
                </div>
                <div className="home-grid-information">
                    <InformationAlbum />
                </div>
                
                <h2 className="home-grid__title">Resultados</h2>
                <section className="home-grid-results">
                    <MusicCard image="https://blogmistermusic.files.wordpress.com/2016/03/bad-michael-jackson.jpg" title="Bad" autor="Michael Jackson" />    
                </section>
            </section>      
        </section>
    )
}

export default Home
