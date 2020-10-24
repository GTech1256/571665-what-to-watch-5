import React, {PureComponent} from 'react';
import Player from "../../components/video-player/video-player";
import withVideo from "../with-video/with-video";

const TIMEOUT_DELAY = 1000;

const VideoPlayer = withVideo(Player);

const withVideoPreview = (Component) => {
  class WithVideoPreview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        timeout: null,
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
      if (this.state.timeout) {
        clearTimeout(this.state.timeout);
      }
    }

    handleMouseEnter() {
      this.clearTimeout();

      const timeout = setTimeout(this.startVideo, TIMEOUT_DELAY);

      this.setState({timeout});
    }

    handleMouseLeave() {
      this.clearTimeout();

      this.stopVideo();
    }
  }

  WithVideoPreview.propTypes = {};

  return WithVideoPreview;
};

export default withVideoPreview;
