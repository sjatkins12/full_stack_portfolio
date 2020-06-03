import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import Page from "../../components/Page";
import Camera from "../../components/Camera";

type PropsType = {
  classes: { [name: string]: string },
  startFaceDetection: (image) => void,
  detectedFace: string,
  deleteImage: () => void,
};
type StateType = {
  waitingForImage: boolean,
  displayBackdrop: boolean,
  rederCamera: boolean,
};

class FaceDetection extends React.Component<PropsType, StateType> {
  constructor(props) {
    super(props);

    this.state = {
      waitingForImage: false,
      displayBackdrop: false,
      renderCamera: false,
    };
  }

  componentDidUpdate(prevProps: PropsType) {
    const { detectedFace } = this.props;

    if (detectedFace && !prevProps.detectedFace) {
      this.setState({ waitingForImage: false });
    }
  }

  renderBackdrop() {
    const { detectedFace } = this.props;
    const { waitingForImage } = this.state;

    if (detectedFace) {
      return <img src={detectedFace} alt="Face Detection" />;
    } else if (waitingForImage) return <CircularProgress color="inherit" />;
  }

  render() {
    const { classes, startFaceDetection, deleteImage } = this.props;
    const { displayBackdrop, renderCamera } = this.state;

    return (
      <Page
        pageTitle="Face Detection"
        headerImg={"/face_detection_header.jpeg"}
      >
        <div className={classes.Content}>
          <Paper className={classes.Explanation}>
            <div className={classes.Text}>
              Welcome to a rather simple face detector! Don't be fooled, the
              purpose of this applet is not to show you a demonstration of
              OpenCV's distributed datasets. What I have done here is created an
              asynchronus backend worker queue to handle requests not managable
              in a simple http request/response design. Using Celery, we have a
              microservice that has a shared volume with our backend API,
              creating a flexible backend which can be used to simplify the flow
              of information through a ML pipeline.
              <br />
              Simplified, this website calls a backend service that can be
              easily scaled to manage a large number of requests, and can be
              easily extended to handle different jobs other than detecting
              faces.
              <br />
              <br />
            </div>
            {!renderCamera && (
              <div className={classes.Text}>
                With respect to your privacy, I pose the question to you...
                <Button
                  variant="contained"
                  className={classes.Button}
                  onClick={() => {
                    this.setState({ renderCamera: true });
                  }}
                >
                  Start Camera
                </Button>
              </div>
            )}
          </Paper>
          {renderCamera && (
            <div className={classes.Camera}>
              <Camera
                stopCamera={() => {
                  this.setState({ renderCamera: false });
                }}
                onSubmit={(image) => {
                  deleteImage();
                  startFaceDetection(image);
                  this.setState({
                    displayBackdrop: true,
                    waitingForImage: true,
                  });
                }}
              />
            </div>
          )}
        </div>

        <Backdrop
          className={classes.Backdrop}
          open={displayBackdrop}
          onClick={() => {
            deleteImage();
            this.setState({ displayBackdrop: false });
          }}
        >
          {this.renderBackdrop()}
        </Backdrop>
      </Page>
    );
  }
}

export default FaceDetection;
