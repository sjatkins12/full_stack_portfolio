import { connect } from "react-redux";

import { setSidebarState } from "../../redux/sidebar";
import Page from "./Page.component";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  openSidebar: () => {
    dispatch(setSidebarState(true));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
