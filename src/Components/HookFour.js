import React from "react";
import { useState } from "react";

const HookFour = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
        <button onClick={addItem}>Add</button>
      </ul>
    </div>
  );
};

export default HookFour;
