import React from 'react';

import Navigation from '../components/Navigation';
import MusicCard from '../components/MusicCard';
import Reproductor from '../components/Reproductor';
import InformationAlbum from '../components/InformationAlbum';

const Home = () => {
    return (
        <section className="home">
            <Navigation />
            <InformationAlbum />
            <MusicCard image="https://blogmistermusic.files.wordpress.com/2016/03/bad-michael-jackson.jpg" title="Bad" autor="Michael Jackson" />
            <Reproductor />
        </section>
    )
}

export default Home
