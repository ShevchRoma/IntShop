import axios from "axios";
import React from "react";
import "./FullItem.scss";
import { useParams } from "react-router-dom";
import { IFurniture } from "../../@types/type";

const FullItem = () => {
  const [item, setItem] = React.useState<IFurniture>();

  const params = useParams();

  React.useEffect(() => {
    async function getItem() {
      try {
        const response = await axios.get(
          `https://645a30d395624ceb21fa6e8a.mockapi.io/mebli/mebli/${params.id}`
        );
        setItem(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getItem();
  }, []);
  console.log(item);
  return (
    <div className="full-item">
      <div className="full-item__img">
        <img src={"/images/" + item?.imageUrl} alt="pizza" />
      </div>
      <div className="full-item__name">{item?.name}</div>
      <div className="full-item__sizes">
        <span>Размеры:</span>
        <ul>
          {item?.sizes.map((size) => (
            <li key={size}>{size}см.</li>
          ))}
        </ul>
      </div>
      <div className="full-item__price">Цена: {item?.price}$</div>
      <div className="full-item__button">Заказать</div>
    </div>
  );
};

export default FullItem;
