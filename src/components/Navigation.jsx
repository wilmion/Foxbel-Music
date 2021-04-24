import React from 'react';

import FoxbelMusicIconRed from '../static/icons/foxbel-music.png'

import "../static/sass/components/navigation.scss"

const Navigation = () => {
    return (
        <section className="navigation">
            <div className="navigation-eslogan">
                <img src={FoxbelMusicIconRed} alt="Iconó de Foxbel Music"/>
            </div>
            <section className="navigation-section">
                <h4 className="navigation-section__title">Mi Librería</h4>
                <nav className="navigation-section-nav">
                    <ul className="navigation-section-nav-list">
                        <li className="navigation-section-nav-list__item navigation-section-nav-list__item--selected">
                            <div className="navigation-section-nav-list__item--signal navigation-section-nav-list__item--selected--signal"></div>
                            <p className="navigation-section-nav-list__item__text">Recientes</p>
                        </li>
                        <li className="navigation-section-nav-list__item">
                            <p className="navigation-section-nav-list__item__text">Artistas</p>
                        </li>
                        <li className="navigation-section-nav-list__item">
                            <p className="navigation-section-nav-list__item__text">Álbums</p>
                        </li>
                        <li className="navigation-section-nav-list__item">
                            <p className="navigation-section-nav-list__item__text">Canciones</p>
                        </li>
                        <li className="navigation-section-nav-list__item">
                            <p className="navigation-section-nav-list__item__text">Estaciones</p>
                        </li>
                    </ul>
                </nav>
            </section>
            <section className="navigation-section">
                <h4 className="navigation-section__title">Playlist</h4>
                <nav className="navigation-section-nav">
                    <ul className="navigation-section-nav-list">
                        <li className="navigation-section-nav-list__item">
                            <p className="navigation-section-nav-list__item__text">Metal</p>
                        </li>
                        <li className="navigation-section-nav-list__item">
                            <p className="navigation-section-nav-list__item__text">Para Bailar</p>
                        </li>
                        <li className="navigation-section-nav-list__item">
                            <p className="navigation-section-nav-list__item__text">Rock 90s</p>
                        </li>
                        <li className="navigation-section-nav-list__item">
                            <p className="navigation-section-nav-list__item__text">Baladas</p>
                        </li>
                    </ul>
                </nav>
            </section>
        </section>
    )
}

export default Navigation
