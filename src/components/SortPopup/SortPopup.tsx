import React from "react";
import "./SortPopup.scss";
import icon from "../../assets/ContentIcons/Vector.svg";
import { SortListType } from "./type";

type PopupClick = MouseEvent & {
  path: Node[];
};

const sortList: SortListType[] = [
  { name: "популярности", sortCategory: "rating" },
  { name: "цене", sortCategory: "price" },
  { name: "алфавиту", sortCategory: "title" },
];

interface SortPopupProps {
  setSortCategory: (sortBy: SortListType) => void;
  sortBy: SortListType;
}

const SortPopup: React.FC<SortPopupProps> = ({ setSortCategory, sortBy }) => {
  const [popupOpen, setPopUpOpen] = React.useState(false);

  const popupRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick;

      if (
        popupRef.current &&
        !_event.composedPath().includes(popupRef.current)
      ) {
        setPopUpOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleVisiblePopUp = () => {
    setPopUpOpen(!popupOpen);
  };
  const onClickListItem = (item: SortListType, e: React.MouseEvent) => {
    e.preventDefault();
    setSortCategory(item);
    setPopUpOpen(false);
  };
  return (
    <div ref={popupRef} className="sort-popup">
      <div onClick={toggleVisiblePopUp} className="sort-popup__top">
        <div style={{ display: "flex" }}>
          <img
            src={icon}
            alt="icon"
            className={!popupOpen ? "icon" : "icon active"}
          />
          <p>Сортировка по:</p>
        </div>
        <span>{sortBy.name}</span>
      </div>
      {popupOpen && (
        <div className="sort-popup__content">
          <ul className="sort-popup__menu">
            {sortList.map((item) => (
              <li
                onClick={(e) => onClickListItem(item, e)}
                key={item.name}
                className={sortBy.name === item.name ? "active" : ""}
              >
                <a href="*" className="sort-popup__link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortPopup;
