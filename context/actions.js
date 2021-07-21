import { v4 as uuidv4 } from 'uuid';

export function setComponent(dispatch, type) {
  switch (type) {
    case "text":
      const newTextItem = {
        name: "Text",
        props: {
          type: "section",
          attr: {
            id: uuidv4(),
            class: "textClass",
          },
          content: "section name",
          styles: {
            position: 'absolute',
            top: 0,
            left: 0,
          },
        },
      };
      dispatch({ type: "SET_COMPONENT", payload: newTextItem });
      break;
    case "image":
      const newImageItem = {
        name: "Image",
        props: {
          type: "img",
          attr: {
            id: uuidv4(),
            class: "imgClass",
            src: "",
            alt: "picture",
          },
          content: "section name",
          styles: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: 200,
            height: 200,
          },
        },
      };
      dispatch({ type: "SET_COMPONENT", payload: newImageItem });
      break;
    case "shape":
      const newShapeItem = {
        name: "Shape",
        props: {
          type: "div",
          attr: {
            id: uuidv4(),
            class: "shapeClass",
          },
          content: "section name",
          styles: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: 200,
            height: 200,
            backgroundColor: "#f1e20e",
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: "0",
            borderRadius: 0,
            opacity: 1,
          },
        },
      };
      dispatch({ type: "SET_COMPONENT", payload: newShapeItem });
      break;
    case "button":
      const newButtonItem = {
        name: "Button",
        props: {
          type: "button",
          attr: {
            id: uuidv4(),
            class: "buttonClass",
          },
          content: "section name",
          styles: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: 200,
            height: 200,
            backgroundColor: "#f1e20e",
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: "0",
            borderRadius: 0,
            opacity: 1,
          },
        },
      };
      dispatch({ type: "SET_COMPONENT", payload: newButtonItem });
      break;
    case "video":
      const newVideoItem = {
        name: "Video",
        props: {
          type: "video",
          attr: {
            id: uuidv4(),
            class: "videoClass",
            src: "",
          },
          content: "section name",
          styles: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: 200,
            height: 200,
            backgroundColor: "#f1e20e",
            borderColor: "#cccccc",
            borderStyle: "solid",
            borderWidth: "0",
            borderRadius: 0,
            opacity: 1,
          },
        },
      };
      dispatch({ type: "SET_COMPONENT", payload: newVideoItem });
      break;

    default:
      break;
  }
}

export function selectComponent(dispatch, component) {
  dispatch({ type: "SELECT_COMPONENT", payload: component });
}

export function deleteComponent(dispatch, payload) {
  dispatch({ type: "DELETE_COMPONENT", payload: payload });
}

export function changeComponentPosition(dispatch, payload) {
  dispatch({ type: "CHANGE_COMPONENT_POSITION", payload: payload });
}

export function changeComponentSize(dispatch, payload) {
  dispatch({ type: "CHANGE_COMPONENT_SIZE", payload: payload });
}

export function changeBlockStyle(dispatch, payload) {
  dispatch({ type: "CHANGE_BLOCK_STYLE", payload: payload });
}


export function changeImageBlock(dispatch, blockProperties) {
  dispatch({ type: "CHANGE_IMAGE_BLOCK", payload: blockProperties });
}
export function changeButtonBlock(dispatch, blockProperties) {
  dispatch({ type: "CHANGE_BUTTON_BLOCK", payload: blockProperties });
}
export function changeVideoBlock(dispatch, blockProperties) {
  dispatch({ type: "CHANGE_VIDEO_BLOCK", payload: blockProperties });
}
