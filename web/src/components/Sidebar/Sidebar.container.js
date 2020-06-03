import { connect } from "react-redux";

import { selectSidebarState, setSidebarState } from "../../redux/sidebar";
import Sidebar from "./Sidebar.component";

const mapStateToProps = (state) => ({
  open: selectSidebarState(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCloseSidebar: () => {
    dispatch(setSidebarState(false));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
