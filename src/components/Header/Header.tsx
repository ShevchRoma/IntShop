import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.jpeg";
import cartIcon from "../../assets/HeaderIcons/button-cart.svg";
import Search from "../Search/Search";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../../typedHook/useTypedSelector";

const Header = () => {
  const { items, totalPrice } = useTypedSelector((state) => state.cart);

  const countItems = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <header className="header">
      <div className="header__column">
        <a href="*" className="header__logo">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="header__column">
        <Search />
      </div>
      <div className="header__column">
        <nav className="header__menu menu">
          <ul className="menu__list">
            <li>
              <a href="*" className="menu__link">
                О нас
              </a>
            </li>
            <li>
              <a href="*" className="menu__link">
                Под заказ
              </a>
            </li>
            <li>
              <a href="*" className="menu__link">
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__column">
        <NavLink to="/cart" className="header__button-cart">
          <div className="header__price">{totalPrice}$</div>
          <div className="header__count">
            <img src={cartIcon} alt="cart" />
            <span>{countItems}</span>
          </div>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
