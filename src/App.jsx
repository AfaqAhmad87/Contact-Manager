import React, { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import List from "./List";
function App() {
  const [list, setlist] = useState([]);
  const func = (data) => {
    setlist([...list, data]);
  };
  console.log(list);
  return (
    <>
      <Header />
      <Form adddata={func} />
      <List listdata={list} setlist={setlist} />
    </>
  );
}

export default App;
