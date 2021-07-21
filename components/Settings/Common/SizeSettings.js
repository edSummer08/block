import { RangeInput } from "../../Common/InputRange";
import { Input } from "../../Common/Input";

export const SizeSettings = ({ selected, dispatch, onChangeSize }) => {
  function handleChange(e) {
    onChangeSize(dispatch, {
      ...selectedBlock,
      //   props: {
      //     ...selectedBlock.props,
      //     size: {
      //       ...selectedBlock.props.size,
      //       [e.target.name]: Number(e.target.value),
      //     },
      //   },
    });
  }

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col">
          <div className="input-group input-group-sm">
            <span className="input-group-text">W</span>
            <Input
              type="name"
              name="width"
              value={selected.props.styles.width}
              handleChange={handleChange}
              className="form-control"
            />
            <span className="input-group-text">px</span>
          </div>
        </div>
        <div className="col">
          <div className="input-group input-group-sm">
            <span className="input-group-text">H</span>
            <Input
              type="name"
              name="height"
              value={selected.props.styles.height}
              handleChange={handleChange}
              className="form-control"
            />
            <span className="input-group-text">px</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="input-group">
            <RangeInput
              type="range"
              name="w"
              min="0"
              max="1200"
              value={selected.props.styles.width}
              handleChange={handleChange}
              className="form-range"
            />
          </div>
        </div>
      </div>
    </li>
  );
};
