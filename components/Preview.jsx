import React, { useCallback, useState, useEffect, useRef } from "react";
// import { DRAG_TYPES } from "../constants/DragTypes";
// import ComponentName from "../components/ComponentName";
// import PreviewContainer from "./PreviewContainer";
import {
  useAppDispatch,
  useAppState,
  selectComponent,
  changeComponentPosition,
} from "../context";
import Canvas from "../pages/canvas";
import { Draggable } from "./Draggable";
import styles from "../styles/Main.module.css";

function PreviewContainer({
  id,
  component,
  focused = false,
  onClick,
  onDragDown,
  onDragMove,
  children,
  ...restProps
}) {
  const clickHandler = useCallback(() => {
    onClick(id, component);
  }, [onClick]);

  const handleDragDown = useCallback(
    (data) => {
      onDragDown(data);
    },
    [onDragDown]
  );

  const handleDragMove = useCallback(
    (data) => {
      onDragMove(data);
    },
    [onDragMove]
  );

  return (
    <div
      // style={{ border: focused && "1px solid blue" }}
      onClick={clickHandler}
      {...restProps}
    >
      <Draggable
        id={id}
        component={component}
        onDragDown={handleDragDown}
        onDragMove={handleDragMove}
      >
        {children}
      </Draggable>
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
  return <div>Image Component</div>;
}
function Shape() {
  return <div>Shape Component</div>;
}
function Button() {
  return <div>Button Component</div>;
}
function Video() {
  return <div>Video Component</div>;
}

const PreviewComponents = {
  Text,
  Image,
  Shape,
  Button,
  Video
};

export default function Preview(props) {
  const { components, selectedComponent } = useAppState();
  const dispatch = useAppDispatch();
  const [focused, setFocused] = useState(null);

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
    (id, component) => {
      if (focused === id) setFocused(null);
      setFocused(id);
      selectComponent(dispatch, component);
    },
    [focused, setFocused]
  );

  const handleDragDown = useCallback(
    (component) => {
      selectComponent(dispatch, component);
      console.log("down", component);
    },
    [dispatch]
  );

  const handleDragMove = useCallback(
    (data) => {
      changeComponentPosition(dispatch, {
        ...selectedComponent,
        props: {
          ...selectedComponent.props,
          styles: {
            ...selectedComponent.props.styles,
            left: data.translation.x,
            top: data.translation.y,
          }
        }
      });
    },
    [dispatch, selectedComponent]
  );

  const componentPreview =
    components.length > 0 &&
    components.map((component) => {
      if (typeof PreviewComponents[component.name] !== "undefined") {
        const NewComponent = React.createElement(
          PreviewComponents[component.name],
          {
            key: component.props.attr.id,
            ...component.props,
          }
        );
        return React.createElement(
          PreviewContainer,
          {
            key: component.props.attr.id,
            id: component.props.attr.id,
            component,
            onClick: clickHandler,
            onDragDown: handleDragDown,
            onDragMove: handleDragMove,
            focused: focused === component.props.attr.id ? true : false,
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
