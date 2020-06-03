import styled from "styled-components";

type VideoPropsType = {|
  hide: boolean,
|};

const Video = styled("video")`
  display: ${(props: VideoPropsType) => (props.hide ? "none" : "flex")};
  margin: 10px;
`;

const CameraContainer = styled("div")`
  width: 80%;
  height: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Canvas = styled("canvas")`
  margin: 10px;
  display: ${(props: VideoPropsType) => (props.hide ? "none" : "flex")};
`;

const ButtonGroup = styled("div")`
  display: ${(props: VideoPropsType) => (props.hide ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export { Video, CameraContainer, Canvas, ButtonGroup };
