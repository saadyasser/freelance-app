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
  isError,
}) => {
  let classes = '';

  if (isError) {
    classes = 'Invalid';
  }
  return (
    <div className="form-input">
      <label htmlFor={id}>{label}</label>
      <input
        className={classes}
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
