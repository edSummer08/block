import { useAppDispatch, setComponent } from "../../context";

export const List = () => {
  const dispatch = useAppDispatch();

  return (
    <ul className="nav nav-underline nav-pills">
      <li className="nav-item">
        <button onClick={() => setComponent(dispatch, "text")} className="nav-link">
          Text
        </button>
      </li>
      <li className="nav-item">
        <button
          onClick={() => setComponent(dispatch, "image")}
          className="nav-link"
        >
          Image
        </button>
      </li>
      <li className="nav-item">
        <button
          onClick={() => setComponent(dispatch, "shape")}
          className="nav-link"
        >
          Shape
        </button>
      </li>
      <li className="nav-item">
        <button
          onClick={() => setComponent(dispatch, "button")}
          className="nav-link"
        >
          Button
        </button>
      </li>
      <li className="nav-item">
        <button
          onClick={() => setComponent(dispatch, "video")}
          className="nav-link"
        >
          Video
        </button>
      </li>
    </ul>
  );
};
