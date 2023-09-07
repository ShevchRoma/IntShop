import React, { FC } from "react";
import "./Categories.scss";
import { useAppDispatch } from "../../redux/store";
import { setCategoryId } from "../../redux/filter/filterSlice";

interface CategoriesProps {
  categoryId: number;
  setCategory: (index: number) => void;
}

const Categories: FC<CategoriesProps> = ({ categoryId, setCategory }) => {
  const categories = ["Все", "Стул", "Шкаф", "Комод", "Стол", "Тумба"];

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <div
          key={index}
          onClick={() => setCategory(index)}
          className={
            categoryId === index
              ? "categories__item active"
              : "categories__item"
          }
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Categories;
