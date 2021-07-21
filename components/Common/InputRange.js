export const RangeInput = ({ name, value, min, max, step, handleChange }) => {
  return (
    <input
      type="range"
      name={name}
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={handleChange}
      className="form-range"
    />
  );
};
