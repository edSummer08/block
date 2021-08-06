import React, { useCallback, useMemo } from "react";
import { Draggable } from "./Draggable";

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
    onClick(id);
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

  const styles = useMemo(
    () => ({
      position: "absolute",
      transform: `translate(${component.props.styles.left}px, ${component.props.styles.top}px)`,
      width: component.props.styles.width,
      height: component.props.styles.height,
      background: "#ccc",
      border: focused && "1px solid blue",
    }),
    [component.props.styles, focused]
  );

  return (
    <Draggable
      id={id}
      component={component}
      onDragDown={handleDragDown}
      onDragMove={handleDragMove}
    >
      <div style={styles} onClick={clickHandler} {...restProps}>
        {children}
      </div>
    </Draggable>
  );
}

export default PreviewContainer;
