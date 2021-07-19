import React, { useCallback, useState, useEffect, useRef } from "react";
// import { DRAG_TYPES } from "../constants/DragTypes";
// import ComponentName from "../components/ComponentName";
// import PreviewContainer from "./PreviewContainer";
import {
  useAppDispatch,
  useAppState,
  selectComponent,
  changeBlockPosition,
} from "../context";
import Canvas from "../pages/canvas";
import { Draggable } from "./Draggable";
import styles from "../styles/Main.module.css";

function PreviewContainer({
  index,
  component,
  focused = false,
  onClick,
  children,
  ...restProps
}) {
  const clickHandler = useCallback(() => {
    onClick(index, component);
  }, [onClick]);
  return (
    <div onClick={clickHandler} {...restProps}>
      <Draggable>{children}</Draggable>
    </div>
  );
}

function Text() {
  return (
    <div
      contentEditable={true}
      suppressContentEditableWarning={true}
    >
      {'text'}
    </div>
  );
}
function Image() {
  return <img alt="picture"/>;
}
function Shape() {
  return <div>Test Shape Component</div>;
}
function Button() {
  return <button>Test Button Component</button>;
}
function Video() {
  return <video>Test Video Component</video>;
}

const PreviewComponents = {
  Text,
  Image,
  Shape,
  Button,
  Video
};

export default function Preview(props) {
  const dispatch = useAppDispatch();
  const [focused, setFocused] = useState(null);
  const { components } = useAppState();

  // const [{ isOver, isOverCurrent }, drop] = useDrop({
  //   accept: DRAG_TYPES.COMPONENT,
  //   drop(item, monitor) {
  //     const didDrop = monitor.didDrop();
  //     if (didDrop) {
  //       return;
  //     }
  //     console.log("item dropped!", item);
  //     const componentStructure = {
  //       name: item.id,
  //       props: {},
  //     };
  //     setComponents((prevValue) => [...prevValue, componentStructure]);
  //   },
  //   collect: (monitor) => ({
  //     isOver: monitor.isOver(),
  //     isOverCurrent: monitor.isOver({ shallow: true }),
  //   }),
  // });

  const clickHandler = useCallback(
    (index, component) => {
      if (focused === index) setFocused(null);
      setFocused(index);
      selectComponent(dispatch, component);
    },
    [focused, setFocused]
  );

  const componentPreview =
    components.length > 0 &&
    components.map((component, index) => {
      if (typeof PreviewComponents[component.name] !== "undefined") {
        const NewComponent = React.createElement(
          PreviewComponents[component.name],
          {
            // @TODO: Use a hash here?
            key: index,
            ...component.props,
          }
        );
        return React.createElement(
          PreviewContainer,
          {
            key: index,
            index,
            component,
            onClick: clickHandler,
            focused: focused === index ? true : false,
          },
          [NewComponent]
        );
      }
    });
  return (
    <div className={styles.wrapper}>
      <Canvas />
      {componentPreview}
    </div>
  );
}
