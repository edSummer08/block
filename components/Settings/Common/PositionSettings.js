import { Input } from "../../Common/Input";

export const PositionSettings = ({
  selected,
  dispatch,
  onChangePosition,
}) => {
  function handleChange(e) {
    onChangePosition(dispatch, {
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
            <span className="input-group-text">X</span>
            <Input
              type="number"
              name="top"
              value={selected.props.styles.top}
              handleChange={handleChange}
              className="form-control"
            />
            <span className="input-group-text">px</span>
          </div>
        </div>
        <div className="col">
          <div className="input-group input-group-sm">
            <span className="input-group-text">Y</span>
            <Input
              type="number"
              name="left"
              value={selected.props.styles.left}
              handleChange={handleChange}
              className="form-control"
            />
            <span className="input-group-text">px</span>
          </div>
        </div>
      </div>
    </li>
  );
};
