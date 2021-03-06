import React from 'react';

import "../static/sass/components/music-card.scss";

const MusicCard = ({image , title , autor , album , onclick}) => {
    return (
        <article className="music-card">
            <div className="music-card__image" onClick={ () => onclick(album) } >
                <img src={image} alt={`Imagen de ${title}`} />
            </div>
            <h3 className="music-card__title">{title}</h3>
            <p className="music-card__autor">{autor}</p>
        </article>
    )
}

export default MusicCard;
