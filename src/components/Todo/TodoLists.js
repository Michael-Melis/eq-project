import React, { useState } from "react";
import Login from "../Login/Login";
import { TextField } from "@mui/material";
import OneList from "./OneList";
import ListForm from "./ListForm";

const TodoLists = ({ user }) => {
  const [todos, setTodos] = useState("");

  const [todoArray, setTodoArray] = useState([]);
  //names of all todo lists
  const [listArray, setListArray] = useState([]);

  return (
    <div>
      <ListForm setListArray={setListArray} listArray={listArray} />
      {listArray.map((oneTodoList) => (
        <OneList
          key={oneTodoList.id}
          oneTodoList={oneTodoList}
          todos={todos}
          setTodos={setTodos}
          todoArray={todoArray}
          setTodoArray={setTodoArray}
          listArray={listArray}
          setListArray={setListArray}
        />
      ))}
    </div>
  );
};

export default TodoLists;
