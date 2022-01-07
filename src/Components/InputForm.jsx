import React, {useState} from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const InputForm = (props) => {
  const [itemName, setItemName] = useState({title: "", content: ""});

  const handleTextChange = (event) => {
    const {value: input, name: type} = event.target;

    setItemName((prevItem) => {
      return {...prevItem,
      [type]: input}
    })
  };

  const submitForm = (event) => {
    if (itemName.title || itemName.content) {
      props.add(itemName);
      resetItem();
    }
    event.preventDefault()
  }

  const resetItem = () => {
    setItemName({title: "", content: ""})
  }
  return (<div>
    <form>
      <input name="title" onChange={handleTextChange} type="textArea" placeholder="Title" value={itemName.title}></input>
      <input name="content" onChange={handleTextChange} type="textArea" placeholder="Content" value={itemName.content}></input>
      <button onClick={submitForm}><AddCircleIcon /></button>
    </form>
  </div>)
}

export default InputForm;
