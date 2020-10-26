import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

const DOCUMENT_FULLSCREEN_ELEMENT_EMPTY_VALUE = null;

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        isLoading: true
      };
    }

    componentDidMount() {
      const {
        src,
        onProgressChange,
        onFullscreenExit,
        onPlayStart,
        onPlayStop
      } = this.props;
      const video = this._videoRef.current;

      video.src = src;

      video.oncanplaythrough = () => this.setState({
        isLoading: false,
      });

      video.ondurationchange = () => {
        const {duration} = video;

        video.ontimeupdate = () => {
          onProgressChange(video.currentTime, duration);
        };
      };

      video.onfullscreenchange = () => {
        if (document.fullscreenElement === DOCUMENT_FULLSCREEN_ELEMENT_EMPTY_VALUE) {
          onFullscreenExit();
        }
      };

      video.onplaying = onPlayStart;
      video.onpause = onPlayStop;
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.oncanplaythrough = null;
      video.ontimeupdate = null;
    }

    render() {
      const {
        classNameVideo,
        isPlaying,
        withSound,
        poster,
      } = this.props;

      return (
        <Component
          {...this.props}
        >
          <video
            className={classNameVideo}
            width="280"
            height="175"
            autoPlay={isPlaying}
            poster={poster}
            ref={this._videoRef}
            muted={!withSound}
          />
        </Component>
      );
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      const {
        isPlaying,
        isFullscreen
      } = this.props;

      if (isPlaying) {
        video.play();
      } else {
        video.load();
      }

      if (isFullscreen && document.fullscreenElement === DOCUMENT_FULLSCREEN_ELEMENT_EMPTY_VALUE) {
        video.requestFullscreen();
      }
    }
  }

  WithVideo.propTypes = {
    classNameVideo: PropTypes.string,
    src: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    isFullscreen: PropTypes.bool,
    withSound: PropTypes.bool,
    onProgressChange: PropTypes.func,
    onFullscreenExit: PropTypes.func,
    onPlayStart: PropTypes.func,
    onPlayStop: PropTypes.func,
  };

  WithVideo.defaultProps = {
    className: ``,
    withSound: false,
    isFullscreen: false,
    onProgressChange: () => {},
    onFullscreenExit: () => {},
    onPlayStart: () => {},
    onPlayStop: () => {},
  };

  return WithVideo;
};

export default withVideo;
