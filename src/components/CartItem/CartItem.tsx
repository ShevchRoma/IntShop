import React, { FC } from "react";
import plusIcon from "../../assets/CartIcons/plus.svg";
import minusIcon from "../../assets/CartIcons/minus.svg";
import deleteIcon from "../../assets/CartIcons/delete.svg";
import { CartItem } from "../../redux/cart/cartSliceType";
import { useAppDispatch } from "../../redux/store";
import { addItem, minusItem, removeItem } from "../../redux/cart/cartSlice";

interface CartBlockProps {
  item: CartItem;
}

const CartBlock: FC<CartBlockProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const removeCartItem = () => {
    if (window.confirm("Вы хотите удалить этот товар из корзины ?"))
      dispatch(removeItem(item.id));
  };
  const plusItem = () => {
    dispatch(
      addItem({
        id: item.id,
      })
    );
  };
  const minusItemCart = () => {
    dispatch(minusItem(item.id));
  };

  return (
    <div className="cart__item item">
      <div className="item__column">
        <div className="item__img">
          <img src={"./images/" + item.imageUrl} alt="item" />
        </div>
        <div className="item__description">
          <div className="item__title">{item.name}</div>
          <div className="item__size">
            {item.type}, {item.size}см.
          </div>
        </div>
      </div>
      <div className="item__column">
        <button
          disabled={item.count === 1}
          onClick={minusItemCart}
          className={item.count === 1 ? "button__disabled" : "button"}
        >
          <img src={minusIcon} alt="minus" />
        </button>
        <p>{item.count}</p>
        <span onClick={plusItem}>
          <img src={plusIcon} alt="plus" />
        </span>
      </div>
      <div className="item__column">
        <div className="item__price">{item.price}$</div>
        <div onClick={removeCartItem} className="item__delete">
          <img src={deleteIcon} alt="delete" />
        </div>
      </div>
    </div>
  );
};

export default CartBlock;
