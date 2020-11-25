import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {filmType} from '../../types';
import {getFilmScreenFullPath} from '../film-screen/route';

const VIDEO_PLAY_TIMEOUT = 1000;

const FilmCard = (props) => {
  const {film} = props;
  const {id, name, posterImage, previewVideoLink} = film;
  const video = useRef();
  const [isPlay, setPlayStatus] = useState(false);
  let timeout;

  const handleMouseEnter = useCallback(() => {
    setPlayStatus(true);
    timeout = setTimeout(() => {
      if (!isPlay && video.current) {
        video.current.muted = true;
        video.current.play();
      }
    }, VIDEO_PLAY_TIMEOUT);
  }, [video]);

  const handleMouseLeave = useCallback(() => {
    setPlayStatus(false);
    clearTimeout(timeout);
    video.current.load();
  }, [video]);

  useEffect(() => {
    if (!video.current) {
      setPlayStatus(false);
      return;
    }
    return;
  }, [video.current]);

  return (
    <article className="small-movie-card catalog__movies-card">
      <Link to={getFilmScreenFullPath(id)}>
        <div
          className="small-movie-card__image"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video src={previewVideoLink} poster={posterImage} width="280" height="175" ref={video}/>
        </div>
      </Link>
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
};


export default FilmCard;
