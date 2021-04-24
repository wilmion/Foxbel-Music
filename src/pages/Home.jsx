import React from 'react';

import Navigation from '../components/Navigation';
import MusicCard from '../components/MusicCard';

const Home = () => {
    return (
        <section className="home">
            <Navigation />
            <MusicCard image="https://blogmistermusic.files.wordpress.com/2016/03/bad-michael-jackson.jpg" title="Bad" autor="Michael Jackson" />
        </section>
    )
}

export default Home
