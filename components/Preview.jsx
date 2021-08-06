import React, { useCallback, useState } from "react";
import PreviewContainer from "./PreviewContainer";
import {
  useAppDispatch,
  useAppState,
  selectComponent,
  changeComponentPosition,
} from "../context";
import Canvas from "../pages/canvas";
import styles from "../styles/Main.module.css";

import { Text } from "../components/Components/Text";
import { Image } from "../components/Components/Image";
import { Shape } from "../components/Components/Shape";
import { Button } from "../components/Components/Button";
import { Video } from "../components/Components/Video";

const PreviewComponents = {
  Text,
  Image,
  Shape,
  Button,
  Video,
};

export default function Preview(props) {
  const { components, selectedComponent } = useAppState();
  const dispatch = useAppDispatch();
  const [focused, setFocused] = useState(null);

  const clickHandler = useCallback(
    (id) => {
      if (focused === id) setFocused(null);
      setFocused(id);
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
          },
        },
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
