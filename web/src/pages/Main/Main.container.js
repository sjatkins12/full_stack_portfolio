import { connect } from "react-redux";

import { requestCV, selectCV } from "../../redux/contactInfo";
import MainComponent from "./Main.component";

const mapStateToProps = (state) => ({
  cv: selectCV(state),
});

const mapDispatchToProps = (dispatch) => ({
  getCV: () => {
    dispatch(requestCV());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
