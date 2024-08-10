export const ValidateEmail = (email) => {
  const validate =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  if (!validate) return "Please enter a valid email address.";
  return null;
};

export const ValidatePassword = (password) => {
  const validate =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);
  if (!validate)
    return "Your password must contain between 8 and 60 characters.";
  return null;
};

export const ValidateFullName = (fullName) => {
  const validate = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(fullName);
  if (!validate) return "Please enter a valid Name";
  return null;
};
