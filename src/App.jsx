import { useState } from "react";
import Form from "./components/Form";
import { nanoid } from "nanoid";
import Items from "./components/Items";

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

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} />
    </section>
  );
};

export default App;
