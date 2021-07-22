import { Input } from "../../Common/Input";

export const SizeSettings = ({ selected, dispatch, onChangeSize }) => {
  function handleChange(e) {
    onChangeSize(dispatch, {
      ...selected,
      props: {
        ...selected.props,
        styles: {
          ...selected.props.styles,
          [e.target.name]: Number(e.target.value),
        },
      },
    });
  }

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col">
          <div className="input-group input-group-sm">
            <span className="input-group-text">W</span>
            <Input
              type="number"
              name="width"
              value={selected.props.styles.width}
              handleChange={handleChange}
              clazz="form-control"
            />
            <span className="input-group-text">px</span>
          </div>
        </div>
        <div className="col">
          <div className="input-group input-group-sm">
            <span className="input-group-text">H</span>
            <Input
              type="number"
              name="height"
              value={selected.props.styles.height}
              handleChange={handleChange}
              clazz="form-control"
            />
            <span className="input-group-text">px</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="input-group">
            <Input
              type="range"
              name="width"
              min="0"
              max="1200"
              value={selected.props.styles.width}
              handleChange={handleChange}
              clazz="form-range"
            />
          </div>
        </div>
      </div>
    </li>
  );
};
