import Item from "./Item";
import styles from "./ToDOItems.module.css";

const ToDoItems = ({ itemsArray, updateList }) => {
  return (
    <>
      {itemsArray.length === 0 ? (
        <p className={`${styles.emptyMsg}`}>Nothing To Do.</p>
      ) : (
        itemsArray.map((toDoItem) => (
          <Item
            item={toDoItem.item}
            date={toDoItem.date}
            key={toDoItem.item}
            updateList={updateList}
          />
        ))
      )}
    </>
  );
};

export default ToDoItems;
