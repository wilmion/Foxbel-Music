import React from 'react';

import { BsPlayFill } from 'react-icons/bs'

import "../static/sass/components/information-album.scss";
const InformationAlbum = () => {
    return (
        <section className="album-information">
            <div className="album-information__image">
                <BsPlayFill className="album-information__image--icon"/>
                <img src="https://i.pinimg.com/originals/5d/84/c2/5d84c2ad3fd7a2c5f89b4b08661a09dc.jpg" alt=""/>
            </div>
            <section className="album-information-information">
                <h3 className="album-information-information__title">Adele 21</h3>
                <div className="album-information-information-indicators">
                    <h4 className="album-information-information-indicators__subtitle">Lo mejor de Adele</h4>
                    <p className="album-information-information-indicators__followers">321,123 seguidores</p>
                </div>
                <p className="album-information-information__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis at ullam placeat quos accusantium autem sit voluptate tenetur accusamus excepturi, porro ipsam dolorem culpa eos odio. Totam, officia quas! Dicta.</p>
                <div className="album-information-information-buttons">
                    <button className="album-information-information-buttons-button album-information-information-buttons-button--background">Reproducir</button>
                    <button className="album-information-information-buttons-button album-information-information-buttons-button--none-background">Reproducir</button>
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
