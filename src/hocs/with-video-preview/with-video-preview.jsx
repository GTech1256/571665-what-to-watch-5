import React, {PureComponent} from 'react';
import Player from "../../components/film-card-video/film-card-video";
import withVideo from "../with-video/with-video";

const TIMEOUT_DELAY = 1000;

const VideoPlayer = withVideo(Player);
let timeout = null;

const withVideoPreview = (Component) => {
  class WithVideoPreview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
      this.startVideo = this.startVideo.bind(this);
      this.stopVideo = this.stopVideo.bind(this);
      this.clearTimeout = this.clearTimeout.bind(this);
    }

    render() {
      const {isPlaying} = this.state;

      return <Component
        {...this.props}
        renderVideoPreview={(src, poster) => {
          return (
            <VideoPlayer
              src={src}
              poster={poster}
              isPlaying={isPlaying}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            />
          );
        }}
      />;
    }

    startVideo() {
      this.setState({
        isPlaying: true
      });
    }

    stopVideo() {
      this.setState({
        isPlaying: false
      });
    }

    clearTimeout() {
      if (timeout) {
        clearTimeout(timeout);
      }
    }

    handleMouseEnter() {
      this.clearTimeout();

      timeout = setTimeout(this.startVideo, TIMEOUT_DELAY);
    }

    handleMouseLeave() {
      this.clearTimeout();

      this.stopVideo();
    }

    componentWillUnmount() {
      this.clearTimeout();
    }
  }

  WithVideoPreview.propTypes = {};

  return WithVideoPreview;
};

export default withVideoPreview;
