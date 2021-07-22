import { useState } from "react";
import { useAppState, useAppDispatch } from "../../../context";
import { Input } from "../../Common/Input";

export const VideoSettings = () => {
  const { selectedBlock } = useAppState();
  const dispatch = useAppDispatch();
  // const [url, setUrl] = useState('');
  const [error, setError] = useState(null);

  function handleChange(e) {
    let selectedUrl = e.target.value;

    if (selectedUrl) {
      // need validation
      if (selectedUrl) {
        setError(null);
        // setUrl(selectedUrl);
        // changeVideoBlock(dispatch, {
        //   ...selectedBlock,
        //   props: {
        //     ...selectedBlock.props,
        //     src: `https://www.youtube.com/embed/${selectedUrl}`,
        //   },
        // });
      } else {
        // setUrl(null);
        setError("Please input valid url");
      }
    }
  }

  return (
    <>
      <li className="list-group-item">
        <div>
          <label className="form-label">Video url</label>
          <Input
            type="text"
            // value={selectedBlock.src || ""}
            handleChange={handleChange}
            className="form-control"
          />
          {error && <div className="form-text">{error}</div>}
        </div>
      </li>
    </>
  );
};
