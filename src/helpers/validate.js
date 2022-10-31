const validate = (values, rules) => {
  const errorMessages = {};
  const keys = Object.keys(values);

  for (let i = 0; i < keys.length; i++) {
    const mailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const passwordFormat =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const mobileFormat =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (rules[keys[i]].email && !values[keys[i]].match(mailformat)) {
      errorMessages[keys[i]] = `Invalid email`;
    }
    if (rules[keys[i]].password && !values[keys[i]].match(passwordFormat)) {
      errorMessages[keys[i]] = `Your password is week`;
    }
    if (rules[keys[i]].mobile && !values[keys[i]].match(mobileFormat)) {
      errorMessages[keys[i]] = `Invalid mobile number`;
    }
    if (rules[keys[i]].required && values[keys[i]] === '') {
      errorMessages[keys[i]] = `${keys[i]} field is required`;
    }
  }

  const valid = Object.keys(errorMessages).length === 0;
  return { errorMessages, valid };
};

export default validate;
