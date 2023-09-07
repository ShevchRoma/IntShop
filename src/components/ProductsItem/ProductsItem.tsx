import React from "react";
import { IFurniture } from "../../@types/type";
import "./ProductsItem.scss";
import plus from "../../assets/images//plus.png";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { addItem } from "../../redux/cart/cartSlice";
import { useTypedSelector } from "../../typedHook/useTypedSelector";

interface ProductsItemProps {
  product: IFurniture;
}

const ProductsItem: React.FC<ProductsItemProps> = ({ product }) => {
  const { id, imageUrl, name, types, sizes, price } = product;

  const { items } = useTypedSelector((state) => state.cart);

  const findItem = items.find((item) => item.id === product.id);

  const dispatch = useAppDispatch();

  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(70);

  const typeName = ["дуб", "сосна"];

  const addToCart = () => {
    dispatch(
      addItem({
        id,
        imageUrl,
        name,
        type: typeName[activeType],
        size: activeSize,
        price,
      })
    );
  };
  return (
    <div className="products__item">
      <Link to={`/item/${id}`} className="products__img">
        <img src={"./images/" + imageUrl} alt="chairImg" />
      </Link>
      <div className="products__title">{name}</div>
      <div className="products__select">
        <ul>
          {types.map((type) => (
            <li
              key={type}
              onClick={() => setActiveType(type)}
              className={activeType === type ? "active" : ""}
            >
              {typeName[type]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size) => (
            <li
              key={size}
              onClick={() => setActiveSize(size)}
              className={activeSize === size ? "active" : ""}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className="products__bottom">
        <div className="products__price">от {price}$</div>
        <div onClick={addToCart} className="products__button button">
          <div className="button__column">Добавить</div>
          <div className="button__column">
            {findItem ? (
              <span>{findItem.count}</span>
            ) : (
              <i>
                <img src={plus} alt="add" />
              </i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;
