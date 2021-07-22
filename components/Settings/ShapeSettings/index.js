import { useAppState, useAppDispatch } from "../../../context";
import { Input } from "../../Common/Input";

export const ShapeSettings = () => {
  const { selectedComponent } = useAppState();
  const dispatch = useAppDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    // changeBlockStyle(dispatch, {
    //   ...selectedBlock,
    //   props: {
    //     ...selectedBlock.props,
    //     styles: {
    //       ...selectedBlock.props.styles,
    //       [name]: name === "opacity" ? Number(value / 100) : value,
    //     },
    //   },
    // });
  }

  return (
    <>
      <li className="list-group-item">
        <div className="row">
          <label className="col-sm-4 col-form-label">BGCOLOR</label>
          <div className="col-sm-3">
            <Input
              type="color"
              name="backgroundColor"
              //   value={selectedBlock?.props?.styles?.backgroundColor || "#000000"}
              handleChange={handleChange}
              clazz="form-control form-control-color"
            />
          </div>
          <div className="col-sm-5">
            <Input
              type="text"
              name="backgroundColor"
              //   value={selectedBlock?.props?.styles?.backgroundColor || "#000000"}
              handleChange={handleChange}
              clazz="form-control"
            />
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="row">
          <label className="col-sm-4 col-form-label">Opacity</label>
          <div className="col-sm-8">
            <Input
              type="text"
              name="opacity"
              //   value={(selectedBlock?.props?.styles?.opacity * 100).toFixed(0) || 0}
              handleChange={handleChange}
              clazz="form-control"
            />
            <Input
              type="range"
              name="opacity"
              //   value={(selectedBlock?.props?.styles?.opacity * 100).toFixed(0) || 0}
              min="0"
              max="100"
              step="5"
              handleChange={handleChange}
              clazz="form-range"
            />
          </div>
        </div>
      </li>
    </>
  );
};
