import React, { useState, useEffect } from "react";
import axios from "axios";
import ToDoItem from "../components/ToDoItem";
import InputArea from "../components/InputArea";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ToDo() {
  const [items, setItems] = useState([]);

  useEffect(() => {
      const check = async() => {
        try{
          const response = await axios.get("/users/auth");
          if(response.data === "INVALID") {
              window.location = "/";
          }
          else {
            setItems(response.data);
          }
        }
        catch(err){
          console.log(err);
        }
      }
      check();
  }, [])

  const addItem = async(inputText) => {
    try{
      const response = await axios.post("/todo/add", {task: inputText});
      if(response.data === "INVALID" || response.data === "You Are Not Authenticated") {
          window.location = "/";
      }
      else if(response.data === "Todo item can't be blank") return;
      else {
        setItems(response.data);
      }
    }
    catch(err){
      console.log(err);
    }
  }

  const deleteItem = async(id) => {
    try{
      const response = await axios.post("/todo/delete", {id: id});
      if(response.data === "INVALID" || response.data === "You Are Not Authenticated") {
          window.location = "/";
      }
      else {
        setItems(response.data);
      }
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <InputArea onAdd={addItem} />
        <div>
          <ul>
            {items.map((todoItem, index) => (
              <ToDoItem
                key={index}
                id={todoItem._id}
                text={todoItem.data}
                onChecked={deleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ToDo;
