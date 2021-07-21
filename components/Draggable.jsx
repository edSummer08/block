import React, { useState, useCallback, useMemo, useEffect } from "react";

const POSITION = { x: 0, y: 0 };

export const Draggable = ({
  children,
  component,
  id,
  onDragDown,
  onDragMove,
}) => {
  const [state, setState] = useState({
    isDragging: false,
    origin: POSITION,
    translation: POSITION,
    lastTranslation: POSITION,
  });

  const handleMouseDown = useCallback(({ clientX, clientY }) => {
    setState((state) => ({
      ...state,
      isDragging: true,
      origin: { x: clientX, y: clientY },
    }));
    onDragDown(component);
  }, []);

  const handleMouseMove = useCallback(
    ({ clientX, clientY }) => {
      const translation = {
        x: clientX - state.origin.x + state.lastTranslation.x,
        y: clientY - state.origin.y + state.lastTranslation.y,
      };

      setState((state) => ({
        ...state,
        translation,
      }));

      onDragMove({ translation, id });
    },
    [state.origin, state.lastTranslation, onDragMove, id]
  );

  const handleMouseUp = useCallback(() => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);

    setState((state) => ({
      ...state,
      isDragging: false,
      origin: { x: 0, y: 0 },
      lastTranslation: { x: state.translation.x, y: state.translation.y },
    }));

    console.log("mouseup");
  }, [handleMouseMove]);

  useEffect(() => {
    if (state.isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);

      // setState((state) => ({ ...state, translation: { x: 0, y: 0 } }));
    }
  }, [state.isDragging, handleMouseMove, handleMouseUp]);

  const styles = useMemo(
    () => ({
      cursor: state.isDragging ? "-webkit-grabbing" : "-webkit-grab",
      transform: `translate(${state.translation.x}px, ${state.translation.y}px)`,
      transition: state.isDragging ? "none" : "transform 500ms",
      zIndex: state.isDragging ? 2 : 1,
      position: "absolute",
      cursor: state.isDragging ? "move" : "default",
      background: "#ccc",
    }),
    [state.isDragging, state.translation]
  );

  return (
    <div style={styles} onMouseDown={handleMouseDown}>
      {children}
    </div>
  );
};
