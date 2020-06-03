import { connect } from "react-redux";

import { selectContactInfo } from "../../redux/contactInfo";
import Contact from "./Contact.component";

const mapStateToProps = (state) => {
  return {
    contactInfo: selectContactInfo(state),
  };
};

export default connect(mapStateToProps)(Contact);
