import React from "react";
import { Document, pdfjs, Page } from "react-pdf";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";

import { default as PageWrapper } from "../../components/Page";

type PropsType = {
  classes: { [name: string]: string },
};
type StateType = {
  numPages: number,
};

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
class MainComponent extends React.Component<PropsType, StateType> {
  constructor(props) {
    super(props);

    this.state = {
      numPages: 0,
    };
  }

  throttle;
  componentDidMount() {
    const { getCV, cv } = this.props;

    if (!cv) {
      getCV();
    }
  }

  downloadCV() {
    const { cv } = this.props;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(cv);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  renderPDForFailure() {
    const { cv, classes } = this.props;
    const { numPages } = this.state;

    if (typeof cv === "string" && cv === "failure") {
      return "Failed to Load CV";
    }
    if (!cv) {
      return <LinearProgress />;
    }
    return (
      <>
        <Document
          file={cv}
          className={classes.Cv}
          onLoadSuccess={({ numPages }) => {
            this.setState({ numPages });
          }}
        >
          {Array.from(new Array(numPages), (el, index) => {
            return <Page key={`page_${index + 1}`} pageNumber={index + 1} />;
          })}
        </Document>
        <Button
          className={classes.Button}
          variant="contained"
          color="Primary"
          onClick={() => {
            this.downloadCV();
          }}
        >
          Download CV
        </Button>
      </>
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <PageWrapper pageTitle="CV">
        <div className={classes.CVWrapper}>{this.renderPDForFailure()}</div>
      </PageWrapper>
    );
  }
}

export default MainComponent;
