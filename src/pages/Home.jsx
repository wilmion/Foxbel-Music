import React, { useEffect, useState } from 'react';

import Navigation from '../components/Navigation';
import MusicCard from '../components/MusicCard';
import Reproductor from '../components/Reproductor';
import InformationAlbum from '../components/InformationAlbum';
import { FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import Loading from '../components/Loading';

import { GET } from '../utils/API';

import "../static/sass/pages/home.scss"

const Home = () => {

    const [ albums , setAlbums ] = useState([]);
    const [ results , setResults ] = useState([]);
    const [ selectedAlbum , setSelectedAlbum ] = useState(null);
    const [ selectedTracks , setSelectedTracks ] = useState(null);
    const [ loading , setLoading ] = useState(false);
    const [showMenu , setShowMenu] = useState(false);

    useEffect(() => { 
        const fetchData = async () => {
            setLoading(true);
            const num = Math.floor(Math.random() * 4);
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
            setResults(api.data);
            setLoading(false);
        }
        fetchData();
    } , [])

    const handleSearch = async () => {
        setLoading(true)
        setResults([]);
        const value = document.querySelector('#search_music').value;

        if(value === ''){
            setResults(albums);
            setLoading(false)
        }

        const [ searchApi , err ] = await GET(`https://api.deezer.com/search?q=${value}&limit=5`);
        const [ albumApi , errAlbm ] = await GET(`https://api.deezer.com/search/album/?q=${value}&limit=5&output=json`);

        if(err || errAlbm) {
            return null;
        }
        setResults([...searchApi.data , ...albumApi.data]);
        setLoading(false);
        
    }
    const toggleMenu = () => {
        const navigation = document.querySelector('.navigation-home-cellphone');

        if(showMenu) {
            navigation.style.transform = "translateX(-100%)";
            setShowMenu(false);
        }else {
            navigation.style.transform = `translateX(0)`;
            setShowMenu(true);
        }

        
    }
    return (<>
        <section className="navigation-home-cellphone">
            <Navigation />
        </section>
        <section className="home">
            <Reproductor album={selectedAlbum} tracks={selectedTracks} />
            <section className="home-grid">
                <div className="home-grid-nav">
                    <Navigation />
                </div>     
                <div className="home-grid-header">
                    <div className="home-grid-header-search">
                        <input
                            type="text" 
                            id="search_music" 
                            onKeyUp={(e) => {e.key.toLowerCase() === 'enter' && handleSearch()}} 
                            placeholder="Buscar" 
                            className="home-grid-header-search__search"
                        />
                        <FaSearch onClick={handleSearch} className="home-grid-header-search__icon" />
                    </div>
                    <div className="home-grid-header-homeIcon">
                        <GiHamburgerMenu className="home-grid-header-homeIcon--icon" onClick={toggleMenu} />
                    </div>
                </div>
                <div className="home-grid-information">
                    <InformationAlbum album={selectedAlbum} onReproduction={(tracks) => setSelectedTracks(tracks)} />
                </div>
                
                <h2 className="home-grid__title">Resultados</h2>
                <section className="home-grid-results">
                    {results.map(a => {
                        if(a.cover_medium === null ){
                            return '';
                        }
                        return (
                            <MusicCard
                            image={a.cover_medium || a.album.cover_medium } 
                            title={a.title} 
                            autor={a.artist.name} 
                            key={a.id} 
                            onclick={(album) => setSelectedAlbum(album)} 
                            album={a} 
                            />    
                        )
                    })}
                    {(results.length === 0 && !loading) && <h5 className="home-grid-results__not_results">Ninguna canción o album coincide con su busqueda </h5> }
                    {loading && <Loading />}
                </section>
            </section>      
        </section>
    </>)
}

export default Home
