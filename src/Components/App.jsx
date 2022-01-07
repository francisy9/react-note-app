import React, {useState} from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import InputForm from "./InputForm";
import Item from "./Item"

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prevItems) => {
      return [...prevItems, item]
    })
  }

  const removeItem = (idToRemove) => {
    setItems((prevItems) => {
      return prevItems.filter((item, id) => {
        if (id !== idToRemove) {
          return item;
        }
      })
    })
  }
  return (
    <div>
      <Heading />
      <InputForm
        add={addItem}/>
      {items.map((item, id) => {
        return <Item key={id} id={id} entry={item} remove={removeItem}/>
      })}
      <Footer />
    </div>
  );
};

export default App;
