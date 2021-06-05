import React from "react";

function InputArea(props) {
  const [inputText, setInputText] = React.useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      {/* <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      > */}
      <i class="fas fa-plus" 
          onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}>  
      </i>
      {/* </button> */}
    </div>
  );
}

export default InputArea;
