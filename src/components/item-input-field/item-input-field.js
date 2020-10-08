import React from 'react';
import './item-input-field.css';

const ItemInputField = ({
  input,
  placeholder,
  className,
  label,
  type,
  id,
  min,
  step,
  meta: { touched, error },
}) => (
  <div className="form-group row mx-auto">
    <label htmlFor={id} className="col-sm-12 col-form-label text-left pb-0">
      {label}
    </label>

    <div className="col-sm-12">
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        className={className}
        id={id}
        min={min}
        step={step}
        list={type}
      />
      <datalist id="text">
        <option value="Товар 1" />
        <option value="Товар 2" />
        <option value="Товар 3" />
      </datalist>
    </div>

    <div className="col">
      {touched && error && (
        <small className="form-text text-danger">{error}</small>
      )}
    </div>
  </div>
);

export default ItemInputField;
