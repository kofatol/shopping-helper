import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { itemAdded } from '../../actions';
import { connect } from 'react-redux';
import ItemInputField from '../item-input-field';
import {
  required,
  maxLength30,
  maxLength10,
  number,
  minValue0,
  alphaNumeric,
} from '../../utils/validators';
import './item-add-form.css';

const ItemAddForm = ({ handleSubmit, reset, pristine, itemAdded }) => {
  const submit = (formData) => {
    itemAdded(formData);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="container col-sm-6">
        <div className="card border-primary">
          <div className="card-body">
            <h5 className="card-title text-center ">Карточка товара</h5>
            <Field
              name="itemName"
              component={ItemInputField}
              type="text"
              id="inputItemName"
              className="form-control"
              placeholder="Товар 1"
              label="Наименование товара:"
              validate={[required, maxLength30, alphaNumeric]}
            />
            <Field
              name="itemPrice"
              component={ItemInputField}
              type="number"
              id="inputItemPrice"
              className="form-control "
              label="Стоимость одной упаковки товара:"
              placeholder="100"
              min="1"
              step="0.01"
              validate={[required, maxLength10, number, minValue0]}
            />
            <Field
              name="itemWVolume"
              component={ItemInputField}
              type="number"
              id="inputItemVolume"
              className="form-control"
              label="Количество товара в упаковке:"
              placeholder="1000"
              min="1"
              step="0.01"
              validate={[required, maxLength10, number, minValue0]}
            />
            <div className="row container mx-auto">
              <button
                type="button"
                disabled={pristine}
                className="btn btn-danger btn-reset d-block mr-auto col-sm-5"
                onClick={reset}
              >
                Очистить карточку
              </button>

              <button
                type="submit"
                className="btn btn-primary btn-add-item d-block ml-auto col-sm-5"
              >
                Добавить товар
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const ItemAddReduxForm = reduxForm({
  form: 'itemForm',
})(ItemAddForm);

const mapDispatchToProps = { itemAdded };

export default connect(null, mapDispatchToProps)(ItemAddReduxForm);
