const Input = ({
  id,
  name,
  type,
  placeholder,
  inputValue,
  changedHandler,
  bluredHandler,
  error,
  touched,
  label,
  children,
}) => {
  return (
    <div className="form-input">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={inputValue}
        onChange={changedHandler}
        onBlur={bluredHandler}
      />
      {children}
    </div>
  );
};

export default Input;
