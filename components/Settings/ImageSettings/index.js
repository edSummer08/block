import { useState } from "react";
import { Input } from "../../Common/Input";

export const ImageSettings = () => {
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg", "image/jpg"];

  function handleChange(e) {
    let selectedFile = e.target.files[0];

    if (selectedFile) {
      if (types.includes(selectedFile.type)) {
        console.log(selectedFile);
        // uploadImage(dispatch, {
        //   ...selectedBlock,
        //   props: {
        //     ...selectedBlock.props,
        //     image: {
        //       preview: URL.createObjectURL(selectedFile),
        //       raw: selectedFile,
        //     },
        //   },
        // });
        setError(null);
      } else {
        setError("Please select an image file (png or jpg)");
      }
    }
  }

  return (
    <div>
      <label htmlFor="upload-button" className="form-label w-100">
        <span className="btn btn-lg btn-dark w-100">Choose image</span>
      </label>
      <Input
        type="file"
        handleChange={handleChange}
        id="upload-button"
        className="form-control"
        styles={{ display: "none" }}
      />
      {error && <div className="form-text">{error}</div>}
    </div>
  );
};
