import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {filmType} from '../../types';
import {getHumanizedDuration} from '../../bl/film';

const INIT_DURATION_PERCENT = `0%`;
const INIT_DURATION_TIME = `00:00:00`;

const PlayerScreen = ({film, onExitButtonClick}) => {
  const {title, backgroundImage, videoLink} = film;

  const [isPlaying, setIsPlaying] = useState(true);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  const video = useRef();

  useEffect(() => {
    if (isPlaying) {
      video.current.play();
    } else {
      video.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    video.current.ondurationchange = () => {
      setDuration(Math.floor(video.current.duration));

      video.current.ontimeupdate = () => {
        if (video.current) {
          setProgress(video.current.currentTime);
        }
      };
    };

    return () => {
      video.current.ondurationchange = null;
      video.current.ontimeupdate = null;
    };
  }, []);

  useEffect(() => {
    video.current.onpause = () => {
      setIsPlaying(false);
    };

    video.current.onplay = () => {
      setIsPlaying(true);
    };

    return () => {
      video.current.onpause = null;
      video.current.onplay = null;
    };
  }, [setIsPlaying]);

  const handlePlayButtonClick = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [setIsPlaying, isPlaying]);

  const handleFullScreenButtonClick = useCallback(() => {
    if (video.current.webkitEnterFullScreen) {
      video.current.webkitEnterFullScreen();
    } else {
      video.current.requestFullscreen();
    }
  }, []);

  return <React.Fragment>
    <div className="player">
      <video poster={backgroundImage} src={videoLink} className="player__video" ref={video} autoPlay={isPlaying}/>

      <button type="button" className="player__exit" onClick={onExitButtonClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max={duration ? duration : 0}></progress>
            <div className="player__toggler" style={{left: duration ? `${(progress / duration) * 100}%` : INIT_DURATION_PERCENT}}>Toggler</div>
          </div>
          <div className="player__time-value">{duration ? getHumanizedDuration(duration - progress) : INIT_DURATION_TIME}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handlePlayButtonClick}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? `#pause` : `#play-s`}></use>
            </svg>
            <span> {isPlaying ? `Pause` : `Play`}</span>
          </button>
          <div className="player__name">{title}</div>

          <button type="button" className="player__full-screen" onClick={handleFullScreenButtonClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  </React.Fragment>;
};

PlayerScreen.propTypes = {
  film: PropTypes.exact(filmType).isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
};

export default memo(PlayerScreen);

