import { connect } from "react-redux";

import {
  requestFaceDetection,
  selectDetectedFace,
  resetDetectedFace,
} from "../../redux/ai";
import FaceDetection from "./FaceDetection.component";

const mapStateToProps = (state) => ({
  detectedFace: selectDetectedFace(state),
});

const mapDispatchToProps = (dispatch) => ({
  startFaceDetection: (image) => {
    dispatch(requestFaceDetection(image));
  },
  deleteImage: () => {
    dispatch(resetDetectedFace());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FaceDetection);
