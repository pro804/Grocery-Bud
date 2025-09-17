import { useState } from "react";
import Form from "./components/Form";
import { nanoid } from "nanoid";

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    setItems([...items, newItem]);
  };
  console.log(items);
  return (
    <section className="section-center">
      <Form addItem={addItem} />
    </section>
  );
};

export default App;
