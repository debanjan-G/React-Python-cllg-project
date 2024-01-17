import css from "./Input.module.css";
import { MdAddTask } from "react-icons/md";

const Input = ({ handleAddClick, inputVal, setInputVal }) => {
  const handleItemChange = (event) => {
    const toDoItem = event.target.value;
    if (toDoItem !== "")
      setInputVal((prev) => ({ ...prev, item: event.target.value }));
  };

  const handleDateChange = (event) => {
    const inputDate = event.target.value;
    const [year, month, day] = inputDate.split("-");
    // Create a new formatted date string in "dd-mm-yyyy" format
    const formattedDate = `${day}-${month}-${year}`;

    setInputVal((prev) => ({
      ...prev,
      date: formattedDate,
    }));
  };

  return (
    <div className="container text-center">
      <div className="row todo-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter ToDo Here"
            value={inputVal.item}
            onChange={handleItemChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={inputVal.date}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            onClick={() => {
              if (inputVal.item !== "" && inputVal.date !== "") {
                handleAddClick(inputVal);
              }
            }}
            type="button"
            className={`btn btn-success ${css["input-buttons"]}`}
          >
            <MdAddTask style={{ fontSize: "1.5rem" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
