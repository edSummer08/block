import { useEffect, useCallback, useState } from "react";

const POSITION = { x: 0, y: 0 };
const DIMENSION = { w: 200, h: 100 };

export function Resizable({ elementRef, focused, onResize }) {
  const [state, setState] = useState({
    isResizing: false,
    origin: POSITION,
    dimension: DIMENSION,
    last: DIMENSION,
  });

  const mouseDownHandler = useCallback(({ clientX, clientY }) => {
    // const styles = window.getComputedStyle(elementRef.current);
    let w = parseInt(state.dimension.w, 10);
    let h = parseInt(state.dimension.h, 10);

    setState((state) => ({
      ...state,
      isResizing: true,
      origin: { x: clientX, y: clientY },
      dimension: { w, h },
    }));
  }, []);

  const mouseMoveHandler = useCallback(
    ({ clientX, clientY }) => {
      const dx = clientX - state.origin.x;
      const dy = clientY - state.origin.y;

      // Adjust the dimension of element
      let width = state.dimension.w + dx;
      let height = state.dimension.h + dy;

      setState((state) => ({
        ...state,
        dimension: { w: width, h: height },
      }));

        onResize({ width, height });
    },
    [onResize]
  );

  const mouseUpHandler = useCallback(() => {
    window.removeEventListener("mousemove", mouseMoveHandler);
    window.removeEventListener("mouseup", mouseUpHandler);

    setState((state) => ({
      ...state,
      isResizing: false,
    }));
  }, [mouseMoveHandler]);

  useEffect(() => {
    if (state.isResizing) {
      window.addEventListener("mousemove", mouseMoveHandler);
      window.addEventListener("mouseup", mouseUpHandler);
    } else {
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("mouseup", mouseUpHandler);
    }
  }, [state.isResizing, mouseMoveHandler, mouseUpHandler]);

  return (
    <>
      {focused && (
        <>
          <div
            onMouseDown={mouseDownHandler}
            className="resizer resizer-r"
          ></div>
          <div
            onMouseDown={mouseDownHandler}
            className="resizer resizer-b"
          ></div>
        </>
      )}
    </>
  );
}
