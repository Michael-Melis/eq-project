import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const OneList = ({
  oneTodoList,
  todos,
  setTodos,
  todoArray,
  setTodoArray,
  setListArray,
  listArray,
}) => {
  const handleDeleteList = () => {
    setListArray(listArray.filter((el) => el.id !== oneTodoList.id));
  };
  return (
    <div>
      <Link to={`/todolists/${oneTodoList.id}`}>{oneTodoList.listName}</Link>

      <Button onClick={handleDeleteList}>Delete list</Button>
    </div>
  );
};

export default OneList;
