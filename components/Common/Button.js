export const Button = ({ caption, handleClick }) => {
  return (
    <button onClick={handleClick} type="button" className="btn btn-dark">
      {caption}
    </button>
  );
};
