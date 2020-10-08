const required = (value) =>
  value || typeof value === 'number'
    ? undefined
    : 'Поле обязательно для заполнения';

const maxLength = (max) => (value) => {
  return value && value.length > max ? `Не более ${max} символов` : undefined;
};

const number = (value) =>
  value && isNaN(Number(value)) ? 'Должно быть числом' : undefined;

const minValue = (min) => (value) =>
  value && value <= min ? `Число должно быть больше ${min}` : undefined;

const alphaNumeric = (value) =>
  value && /[^А-Яа-яЁё\w\s]/.test(value)
    ? 'Допустимо использование только букв и цифр'
    : undefined;

const maxLength30 = maxLength(30);
const maxLength10 = maxLength(10);
const minValue0 = minValue(0);

export {
  required,
  maxLength,
  number,
  minValue,
  alphaNumeric,
  maxLength30,
  maxLength10,
  minValue0,
};
