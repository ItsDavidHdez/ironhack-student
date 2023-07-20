import React, { useState, useEffect } from "react";

export function TodoList() {
  const [datas, setDatas] = useState([]);
  const [newToDos, setNewToDos] = useState("");
  const [dataAPI, setDataAPI] = useState([]);

  useEffect(() => {
    (() => {
      fetchData();
      console.log("Save!", datas);
    })();
  }, [datas]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setDataAPI([json]));
  };

  const handlerChange = (event) => {
    setNewToDos(event.target.value);
  };

  const handlerClick = () => {
    setDatas([...datas, newToDos]);
    setNewToDos("");
  };

  console.log(dataAPI);
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Type your ToDo"
          onChange={handlerChange}
          value={newToDos}
          autoFocus
          required
        />
        <button
          type="button"
          onClick={handlerClick}
          disabled={newToDos === "" ? true : false}
        >
          Save!
        </button>
      </form>
      <div>
        <p style={{ fontWeight: "bold" }}>My ToDo list</p>
        {datas.length === 0 ? (
          <span style={{ color: "red" }}>No yet data</span>
        ) : (
          datas.map((data) => <p>{data}</p>)
        )}
      </div>
      <p style={{ fontWeight: "bold" }}>Data from API</p>
      <div style={{ display: "block", justifyContent: "center" }}>
        {dataAPI?.map((data) => (
          <>
            <p>User id: {data.userId}</p>
            <p>Id: {data.id}</p>
            <p>Title: {data.title}</p>
            <p>Completed: {data.completed ? "True" : "False"}</p>
          </>
        ))}
      </div>
    </>
  );
}
