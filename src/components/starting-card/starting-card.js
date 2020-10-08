import React from 'react';
import './starting-card.css';

const StartingCard = () => {
  return (
    <div className="container col-sm-6">
      <div className="card border-primary mt-3">
        <div className="card-body ml-3 mr-3">
          <h5 className="card-title">Добро пожаловать в «Shopping helper»!</h5>
          <p>
            Задавались ли Вы когда-нибудь вопросом что выгоднее купить: упаковку
            с меньшим объемом по меньшей цене или же ту, что чуть-чуть дороже,
            но у которой больший объём?
          </p>
          <p>
            Данное приложение поможет Вам выбрать наиболее выгодный товар. Оно
            поможет расчитать стоимость единицы продукции в упаковке. Чтобы
            начать пользоваться заполните карточку товара.
          </p>
          <p>
            Например, чтобы узнать стоимость 1 мл молока в бутылке, укажите
            стоимость 1 бутылки и количество миллилитров молока в ней.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartingCard;
