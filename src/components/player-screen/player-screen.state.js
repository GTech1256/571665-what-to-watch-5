import {withState} from "../../hocs/with-state/with-state";
import PlayerScreen from "./player-screen";

export default withState(
    {
      isFullscreen: false,
      isPlaying: false,
      progress: 0,
      duration: 0
    },
    (
        setState,
        _props,
        {
          isPlaying
        }
    ) => ({
      onPlayBtnClick() {
        setState({isPlaying: !isPlaying});
      },
      onPlayStart() {
        setState({isPlaying: true});
      },
      onPlayStop() {
        setState({isPlaying: false});
      },
      onProgressChange(currentTime, duration) {
        setState({
          progress: Math.round((currentTime / duration) * 100),
          duration
        });
      },
      onFullscreenClick() {
        setState({
          isFullscreen: true
        });
      },
      onFullscreenExit() {
        setState({
          isFullscreen: false
        });
      }
    })
)(PlayerScreen);
