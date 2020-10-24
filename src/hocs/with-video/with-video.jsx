import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

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
        isPlaying,
        withSound,
        poster,
      } = this.props;

      return (
        <Component{...this.props}>
          <video
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

      if (this.props.isPlaying) {
        video.play();
      } else {
        video.load();
      }
    }
  }

  WithVideo.propTypes = {
    src: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    withSound: PropTypes.bool,
  };

  WithVideo.defaultProps = {
    withSound: false,
  };

  return WithVideo;
};

export default withVideo;
