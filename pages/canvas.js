import { useRef, useEffect } from "react";
import styles from "../styles/Main.module.css";

export default function Canvas(props) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.fillStyle = "#e3eeff";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, []);

  return <canvas className={styles.canvas} ref={canvasRef} {...props} />;
}
