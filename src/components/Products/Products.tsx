import React from "react";
import "./Products.scss";
import chairImg from "../../assets/images/chair.jpeg";
import { IFurniture } from "../../@types/type";
import ProductsItem from "../ProductsItem/ProductsItem";
import { StatusEnum } from "../../redux/furniture/types";

interface ProductsProps {
  products: IFurniture[];
  status: StatusEnum;
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <div className="products">
      {products.map((product) => (
        <ProductsItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
