import React from "react";
import Header from "../../components/Header";
import ContactModal from "../../components/Contact";
import Sidebar from "../../components/Sidebar";

type PropsType = {
  children: Node,
  pageTitle: string,
  openSidebar: () => void,
  headerImg: string,
};
type StateType = {
  openContactInfo: boolean,
};
class Page extends React.Component<PropsType, StateType> {
  constructor(props) {
    super(props);

    this.state = {
      openContactInfo: false,
      openSidebar: false,
    };
  }

  closeContactInfo = () => {
    console.log("Closing Contact");
    this.setState({ openContactInfo: false });
  };

  openContactInfo = () => {
    this.setState({ openContactInfo: true });
  };

  toggleSidebar = () => {
    const { openSidebar } = this.props;

    openSidebar();
  };

  render() {
    const { openContactInfo } = this.state;
    const { children, pageTitle, headerImg } = this.props;

    return (
      <div>
        <Header
          onOpenContactInfo={this.openContactInfo}
          onToggleSidebar={this.toggleSidebar}
          pageTitle={pageTitle}
        />
        <ContactModal
          open={openContactInfo}
          handleClose={this.closeContactInfo}
        />
        <Sidebar />
        {headerImg && (
          <img
            src={headerImg}
            style={{
              width: "100%",
            }}
            alt="Page Header"
          />
        )}
        {children}
      </div>
    );
  }
}
export default Page;
