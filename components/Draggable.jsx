import { useState, useCallback, useEffect, useMemo } from "react";

const POSITION = {x: 0, y: 0};

export const Draggable = ({ children, id, onDrag }) => {
  const [state, setState] = useState({
    isDragging: false,
    origin: POSITION,
    translation: POSITION,
    lastTranslation: POSITION,
  });

  const handleMouseDown = useCallback(
    ({ clientX, clientY }) => {
      setState((state) => ({
        ...state,
        isDragging: true,
        origin: { x: clientX, y: clientY },
      }));
      // onDragDown({ id, translation: state.translation });
    },
    []
  );

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
      onDrag({ id, translation });
    },
    [state.origin, state.lastTranslation]
  );

  const handleMouseUp = useCallback(() => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);

    setState((state) => ({
      ...state,
      isDragging: false,
      lastTranslation: { x: state.translation.x, y: state.translation.y },
    }));

    // onDragUp({ id, translation: state.translation });
  }, [handleMouseMove, state.translation]);

  useEffect(() => {
    if (state.isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [state.isDragging, handleMouseMove, handleMouseUp]);

  const styles = useMemo(
    () => ({
      cursor: state.isDragging ? "-webkit-grabbing" : "-webkit-grab",
      transform: `translate(${state.translation.x}px, ${state.translation.y}px)`,
      translation: state.isDragging ? "none" : "transform 500ms",
      zIndex: state.isDragging ? 2 : 1,
      position: "absolute",
      cursor: state.isDragging ? 'move' : 'default'
    }),
    [state.isDragging, state.translation]
  );

  return (
    <div style={styles} onMouseDown={handleMouseDown}>
      {children}
    </div>
  );
};
  