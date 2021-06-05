import React from "react";

function InputArea(props) {
  const [inputText, setInputText] = React.useState("");

  // props.toggle?setInputText(""):setInputText(props.text);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      {props.toggle?
        <i class="fas fa-plus" 
          onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}>  
        </i>
        :
        <i class="far fa-edit" 
          onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}>  
        </i>}
    </div>
  );
}

export default InputArea;
