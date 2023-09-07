import React from "react";
import Header from "../components/Header/Header";
import Categories from "../components/Categories/Categories";
import SortPopup from "../components/SortPopup/SortPopup";
import Products from "../components/Products/Products";
import { useTypedSelector } from "../typedHook/useTypedSelector";
import { useAppDispatch } from "../redux/store";
import { setCategoryId } from "../redux/filter/filterSlice";
import { fetchFurniture } from "../redux/furniture/asyncActions";
import { SortListType } from "../components/SortPopup/type";

const Home = () => {
  const [sortBy, setSortBy] = React.useState({
    name: "популярности",
    sortCategory: "rating",
  });
  const { categoryId, search } = useTypedSelector((state) => state.filters);
  const { furniture, status } = useTypedSelector((state) => state.furniture);
  const dispatch = useAppDispatch();

  const getData = () => {
    const category = categoryId > 0 ? String(categoryId) : "";
    const sort = sortBy.sortCategory;
    const searchValue = search ? `search=${search}` : "";

    dispatch(
      fetchFurniture({
        category,
        sort,
        searchValue,
      })
    );
  };
  console.log(furniture);
  React.useEffect(() => {
    try {
      getData();
    } catch (err) {
      console.log(err);
    }
    window.scrollTo(0, 0);
  }, [categoryId, sortBy.sortCategory, search]);

  const setCategory = (index: number) => {
    dispatch(setCategoryId(index));
  };

  const setSortCategory = (sortCategory: SortListType) => {
    setSortBy(sortCategory);
  };

  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <div className="container">
          <div className="page__top">
            <Categories setCategory={setCategory} categoryId={categoryId} />
            <SortPopup sortBy={sortBy} setSortCategory={setSortCategory} />
          </div>
          <div className="page__content">
            <h2>Все мебли</h2>
            {status === "loading" ? (
              <h2>Loading...</h2>
            ) : (
              <Products status={status} products={furniture} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
