import React from "react";
import "./Cart.scss";
import cartIcon from "../../assets/CartIcons/cart.svg";
import trashIcon from "../../assets/CartIcons/trash.svg";
import backIcon from "../../assets/CartIcons/back.svg";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../../typedHook/useTypedSelector";
import CartBlock from "../CartItem/CartItem";
import { useAppDispatch } from "../../redux/store";
import { clearCart } from "../../redux/cart/cartSlice";
import CarEmpty from "../CartEmpty/CarEmpty";

const Cart = () => {
  const { items, totalPrice } = useTypedSelector((state) => state.cart);
  const countItems = items.reduce((sum, item) => sum + item.count, 0);
  const dispatch = useAppDispatch();

  const clearAllFromCart = () => {
    if (window.confirm("Ви хотите очистить корзину ?")) {
      dispatch(clearCart());
    }
  };
  if (!totalPrice) {
    return <CarEmpty />;
  }
  return (
    <div className="cart">
      <div className="container">
        <div className="cart__top">
          <div className="cart__column">
            <div className="cart__icon">
              <img src={cartIcon} alt="cart" />
            </div>
            <h3>Корзина</h3>
          </div>
          <div onClick={clearAllFromCart} className="cart__column">
            <div className="cart__delete">
              <img src={trashIcon} alt="cleanCart" />
            </div>
            <p>Очистить корзину</p>
          </div>
        </div>
        <div className="cart__items">
          {items.map((item) => (
            <CartBlock key={item.id} item={item} />
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__total-order">
            <div className="cart__column">
              <p>Всего меблей:</p>
              <span>{countItems}шт</span>
            </div>
            <div className="cart__column">
              <p>Сумма заказа:</p>
              <span style={{ color: "#FE5F1E" }}>{totalPrice}$</span>
            </div>
          </div>
          <div className="cart__buttons buttons">
            <NavLink to="/" className="buttons__back">
              <img src={backIcon} alt="back" />
              <p>Вернуться назад</p>
            </NavLink>
            <div className="buttons__buy-now">Оплатить сейчас</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
