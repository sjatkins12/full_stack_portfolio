import React from "react";
import IconButton from "@material-ui/core/IconButton";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import DeleteIcon from "@material-ui/icons/Delete";
import PublishIcon from "@material-ui/icons/Publish";
import StopIcon from "@material-ui/icons/Stop";

import { Video, CameraContainer, Canvas, ButtonGroup } from "./Camera.style";

type PropsType = {
  classes: { [name: string]: string },
  onSubmit: (image) => void,
  stopCamera: () => void,
};
type StateType = {
  hasMedia: boolean,
  photoTaken: boolean,
  videoSrc: ?stream,
  photo: Blob,
};

class Camera extends React.Component<PropsType, StateType> {
  videoRef = { current: HTMLVideoElement };
  canvasRef = { current: HTMLCanvasElement };
  stream: ?MediaStream;

  constructor(props) {
    super(props);

    this.state = {
      hasMedia: false,
      photoTaken: false,
      videoSrc: null,
      photo: null,
    };
    this.canvasRef = React.createRef();
    this.videoRef = React.createRef();
    this.stream = null;
  }

  componentDidMount() {
    if (navigator.getUserMedia) {
      navigator.getUserMedia(
        { video: true },
        (stream) => {
          this.setState({
            hasMedia: true,
          });
          this.videoRef.current.srcObject = stream;
          this.videoRef.current.play();
          this.stream = stream;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  componentWillUnmount() {
    const stream = this.stream;
    if (stream) {
      if (typeof stream.stop === "function") stream.stop();
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      this.stream = null;
    }
  }

  captureImage() {
    const canvas = this.canvasRef.current;
    const context = canvas.getContext("2d");
    context.drawImage(this.videoRef.current, 0, 0, 800, 600);
    canvas.toBlob((blob) => {
      this.setState({ photo: blob });
    });
    this.setState({ photoTaken: true });
  }

  renderButtonGroup() {
    const { photoTaken, photo } = this.state;
    const { onSubmit, stopCamera } = this.props;

    if (photoTaken) {
      return (
        <>
          <IconButton
            color="inherit"
            aria-label="photo"
            onClick={() => {
              onSubmit(photo);
            }}
          >
            <PublishIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="photo"
            onClick={() => this.setState({ photoTaken: false })}
          >
            <DeleteIcon />
          </IconButton>
        </>
      );
    } else {
      return (
        <>
          <IconButton
            color="inherit"
            aria-label="photo"
            onClick={() => this.captureImage()}
          >
            <PhotoCameraIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="photo"
            onClick={() => {
              stopCamera();
            }}
          >
            <StopIcon />
          </IconButton>
        </>
      );
    }
  }

  render() {
    const { hasMedia, photoTaken } = this.state;

    return (
      <CameraContainer>
        <Video
          id="video-player"
          ref={this.videoRef}
          width="800"
          height="600"
          hide={photoTaken || !hasMedia}
        />
        <Canvas
          ref={this.canvasRef}
          width="800"
          height="600"
          hide={!photoTaken}
        />
        <ButtonGroup hide={!hasMedia}>{this.renderButtonGroup()}</ButtonGroup>
      </CameraContainer>
    );
  }
}

export default Camera;
