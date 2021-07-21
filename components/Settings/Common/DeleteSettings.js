import { Button } from "../../Common/Button";

export const DeleteSettings = ({ selected, dispatch, onDelete }) => {
  function handleDelete() {
    onDelete(dispatch, selected);
  }

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col">
          <Button
            type="button"
            caption="Delete"
            handleClick={handleDelete}
            className="btn btn-dark"
          />
        </div>
      </div>
    </li>
  );
};
