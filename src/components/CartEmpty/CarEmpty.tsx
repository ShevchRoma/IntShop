import React from "react";
import "./CartEmpty.scss";
import emptyCart from "../../assets/CartIcons/empty--cart.png";

const CarEmpty = () => {
  return (
    <div className="cart-empty">
      <div className="cart-empty__container">
        <h2>Корзина пустая...</h2>
        <p>скорее всего вы еще не добавили товары в корзину 😕</p>
        <div className="cart-empty__img">
          <img src={emptyCart} alt="empty" />
        </div>
      </div>
    </div>
  );
};

export default CarEmpty;
