import css from "./Item.module.css";
import { MdDelete } from "react-icons/md";

const Item = ({ item, date, updateList }) => {
  const handleDeleteClick = () => {
    console.log(item);
    updateList((prev) => prev.filter((itemObj) => itemObj.item !== item));
  };

  return (
    <div className={`container text-center ${css["item-container"]}`}>
      <div className={`row ${css["todo-row"]}`}>
        <div className={`col-6 todo-item ${css["todo-item"]}`}>{item}</div>
        <div className={`col-4 todo-item ${css["todo-item"]}`}>{date}</div>
        <div className="col-2 ">
          <button
            onClick={handleDeleteClick}
            type="button"
            className={`btn btn-danger ${css["todo-buttons"]}`}
          >
            <MdDelete style={{ fontSize: "1.5rem" }}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;

// When suer clicks the DELETE button, the current Item should get removed from the Items array.
