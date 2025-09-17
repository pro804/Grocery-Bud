import { useState } from "react";

const SingleItem = ({ item, removeItem }) => {
  const [isChecked, setIsChecked] = useState(item.completed);

  return (
    <div className="single-item">
      <input
        type="checkbox"
        id={item.id}
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <p style={{ textDecoration: isChecked && "line-through" }}>{item.name}</p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;
