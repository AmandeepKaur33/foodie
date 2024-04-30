import axios from "axios";
import React, { useEffect, useState } from "react";

const TodoWithFilters = () => {
  const [todos, setTodos] = useState([]);
  const [id, setUserId] = useState();
  const getTodos = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos?id=${id}`)
      .then((res) => setTodos(res?.data));
  };
  useEffect(() => {
    getTodos();
  }, [userId]);
    console.log("todos", todos);
  return (
    <div className="m-10">
      <select
        name=""
        value={id}
        onChange={(e) => setUserId(e.target.value)}
        id=""
      >
        <option>Filter User</option>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((i) => (
          <option value={i}>UserId {i}</option>
        ))}
      </select>
      <ul>
        {todos?.map((element,index) => (
          <li  key={index}>
            <span className="text-red-600 font-medium">
              UserId={element?.userId}
            </span>{" "}
            ({element?.title})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoWithFilters;


