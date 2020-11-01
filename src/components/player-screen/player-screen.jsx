import React from "react";
import PropTypes from "prop-types";
import PlayerScreenVideoWrapper from "../player-screen-video/player-screen-video";
import withVideo from "../../hocs/with-video/with-video";
import {getHumanizedDuration} from "../../bl/film";
import {filmType} from "../../types";

const PlayerScreenVideo = withVideo(PlayerScreenVideoWrapper);

const PlayerScreen = ({
  film: {
    videoLink,
    posterImage,
  },
  state: {
    isFullscreen,
    isPlaying,
    progress,
    duration
  },
  onExitClick,
  onPlayBtnClick,
  onProgressChange,
  onFullscreenClick,
  onFullscreenExit,
  onPlayStart,
  onPlayStop
}) => {
  const humanizedDuration = getHumanizedDuration(duration);

  return (
    (
      <div className="player">
        <PlayerScreenVideo
          classNameVideo="player__video"
          isPlaying={isPlaying}
          isFullscreen={isFullscreen}
          src={videoLink}
          poster={posterImage}
          withSound
          onPlayStart={onPlayStart}
          onPlayStop={onPlayStop}
          onProgressChange={onProgressChange}
          onFullscreenExit={onFullscreenExit}
        />
        <button type="button" className="player__exit" onClick={onExitClick}>
          Exit
        </button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={progress} max="100"></progress>
              <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{humanizedDuration}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play" onClick={onPlayBtnClick}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref={isPlaying ? `#pause` : `#play-s`}></use>
              </svg>
              <span>
                {isPlaying ? `Pause` : `Play`}
              </span>
            </button>
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen" onClick={onFullscreenClick}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    )
  );
};

PlayerScreen.propTypes = {
  film: PropTypes.exact(filmType).isRequired,
  state: PropTypes.exact({
    isFullscreen: PropTypes.bool.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    progress: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired
  }).isRequired,
  onPlayBtnClick: PropTypes.func.isRequired,
  onProgressChange: PropTypes.func.isRequired,
  onFullscreenClick: PropTypes.func.isRequired,
  onFullscreenExit: PropTypes.func.isRequired,
  onPlayStart: PropTypes.func.isRequired,
  onPlayStop: PropTypes.func.isRequired,
  onExitClick: PropTypes.func
};

PlayerScreen.defaultProps = {
  onExitClick: () => {}
};

export default PlayerScreen;
