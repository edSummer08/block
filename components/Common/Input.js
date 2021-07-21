export const Input = ({ name, value, handleChange }) => {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={handleChange}
      className="form-control"
    />
  );
};
