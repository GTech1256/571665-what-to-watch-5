import React, {useCallback, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {filmType} from '../../types';
import {getFilmScreenFullPath} from '../film-screen/route';

const VIDEO_PLAY_TIMEOUT = 1000;

const FilmCard = ({
  film,
  onClick
}) => {
  const {id, name, posterImage, previewVideoLink} = film;
  let timeout;

  const video = useRef();

  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  }, [timeout]);

  const handleMouseEnter = useCallback(() => {
    timeout = setTimeout(() => {
      video.current.play();
    }, VIDEO_PLAY_TIMEOUT);
  }, [video.current]);

  const handleMouseLeave = useCallback(() => {
    clearTimeout(timeout);
    video.current.load();
  }, [video.current]);

  return (
    <article className="small-movie-card catalog__movies-card">
      <div
        className="small-movie-card__image"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        <video src={previewVideoLink} poster={posterImage} width="280" height="175" ref={video} muted/>
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={getFilmScreenFullPath(id)}>
          {name}
        </Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.exact(filmType).isRequired,
  onClick: PropTypes.func.isRequired,
};


export default FilmCard;
