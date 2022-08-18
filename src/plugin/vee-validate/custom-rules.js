/** @format */

export const isPersianAlphabet = (value) => {
  if (!value) {
    return true;
  }
  const pattern = /^[\u0600-\u06FF\s\.]+$/;
  return pattern.test(value);
};

export const isNumber = (value) => {
  if (!value) {
    return true;
  }
  const pattern = /^[0-9]+$/;
  return pattern.test(value);
};

export const isPhoneNumber = (value) => {
  if (!value) {
    return true;
  }
  const pattern = /^(\+98|0)?9\d{9}$/gm;
  return pattern.test(value);
};
