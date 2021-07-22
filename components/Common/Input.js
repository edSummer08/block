export const Input = ({
  type,
  name,
  value,
  min,
  max,
  step,
  handleChange,
  id,
  clazz,
  styles
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={handleChange}
      id={id}
      className={clazz}
      style={styles}
    />
  );
};
