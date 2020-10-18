import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    const {src} = this.props;
    const video = this._videoRef.current;

    video.src = src;

    video.oncanplaythrough = () => this.setState({
      isLoading: false,
    });
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
  }

  render() {
    const {
      onMouseEnter,
      onMouseLeave,
      isPlaying,
      withSound,
      poster,
    } = this.props;

    return (
      <div
        className="small-movie-card__image"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <video
          width="280"
          height="175"
          autoPlay={isPlaying}
          poster={poster}
          ref={this._videoRef}
          muted={!withSound}
        />
      </div>
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }
}

AudioPlayer.propTypes = {
  withSound: PropTypes.bool,
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

AudioPlayer.defaultProps = {
  withSound: false,
  onMouseEnter: () => {},
  onMouseLeave: () => {},
};
