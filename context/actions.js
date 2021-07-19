export function setComponent(dispatch, type) {
  switch (type) {
    case "text":
      const newTextItem = {
        id: Date.now(),
        name: "Text",
        type: "div",
        props: {
          text: "Lorem Ipsum is simply dummy text of the printing.",
          position: {
            x: 0,
            y: 0,
          },
          size: {
            w: 300,
            h: "auto",
          },
          styles: {
            border: {
              color: "#000000",
              style: "solid",
              width: "1",
              radius: 0,
            },
          },
        },
      };
      dispatch({ type: "SET_COMPONENT", payload: newTextItem });
      break;
    case "image":
      const newImageItem = {
        id: Date.now(),
        name: "Image",
        type: "img",
        props: {
          image: {
            preview: "",
            raw: "",
          },
          position: {
            x: 0,
            y: 0,
          },
          size: {
            w: 200,
            h: 200,
          },
          styles: {
            border: {
              color: "#000000",
              style: "solid",
              width: "1",
              radius: 0,
            },
            backgroundColor: "#cccccc",
            opacity: 1,
          },
        },
      };
      dispatch({ type: "SET_COMPONENT", payload: newImageItem });
      break;
    case "shape":
      const newShapeItem = {
        id: Date.now(),
        name: "Shape",
        type: "div",
        props: {
          position: {
            x: 0,
            y: 0,
          },
          size: {
            w: 100,
            h: 100,
          },
          styles: {
            border: {
              color: "#000000",
              style: "solid",
              width: "1",
              radius: 0,
            },
            backgroundColor: "#f1e20e",
            opacity: 1,
          },
        },
      };
      dispatch({ type: "SET_COMPONENT", payload: newShapeItem });
      break;
    case "button":
      const newButtonItem = {
        id: Date.now(),
        name: "Button",
        type: "button",
        props: {
          caption: "Let's start",
          position: {
            x: 0,
            y: 0,
          },
          size: {
            w: 100,
            h: 38,
          },
          styles: {
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: "0",
            borderRadius: 0,
            backgroundColor: "#f1e20e",
            opacity: 1,
          },
        },
      };
      dispatch({ type: "SET_COMPONENT", payload: newButtonItem });
      break;
    case "video":
      const newVideoItem = {
        id: Date.now(),
        name: "Video",
        type: "video",
        props: {
          src: "",
          position: {
            x: 0,
            y: 0,
          },
          size: {
            w: 300,
            h: 200,
          },
          styles: {
            border: {
              color: "#000000",
              style: "solid",
              width: "1",
              radius: 0,
            },
            backgroundColor: "#cccccc",
          },
        },
      };
      dispatch({ type: "SET_COMPONENT", payload: newVideoItem });
      break;
    case "html":
      const newHtmlItem = {
        id: Date.now(),
        type: "Html",
        props: {
          position: {
            x: 0,
            y: 0,
          },
          size: {
            w: 300,
            h: 200,
          },
          styles: {},
        },
      };
      dispatch({ type: "SET_COMPNENT", payload: newHtmlItem });
      break;
    default:
      break;
  }
}

export function selectComponent(dispatch, component) {
  dispatch({ type: "SELECT_COMPONENT", payload: component });
}

export function changeBlockPosition(dispatch, payload) {
  dispatch({ type: "CHANGE_BLOCK_POSITION", payload: payload });
}

export function changeBlockSize(dispatch, payload) {
  dispatch({ type: "CHANGE_BLOCK_SIZE", payload: payload });
}

export function changeBlockStyle(dispatch, payload) {
  dispatch({ type: "CHANGE_BLOCK_STYLE", payload: payload });
}

export function deleteBlock(dispatch, payload) {
  dispatch({ type: "DELETE_BLOCK", payload: payload });
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
