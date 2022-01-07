import React from "react";

const Item = (props) => {
  const deleteItem = (event) => {
    props.remove(props.id);
    event.preventDefault();
  }
  return <div className="note">
    <h1>{props.entry.title}</h1>
    <p>{props.entry.content}</p>
    <button onClick={deleteItem}>Completed</button>
  </div>
}

export default Item;
