import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const persone = {
    name: "islom",
    age: "23",
  };
  const addItem = () => {
    localStorage.setItem("name", item);
    localStorage.setItem("person", JSON.stringify(persone));
  };
  const deleteItem = () => {
    localStorage.removeItem("name");
  };
  const clearItems = () => {
    localStorage.clear();
  };
  const personInfo = JSON.parse(localStorage.getItem("person"));
  personInfo.name = "bobur";
  console.log(personInfo);

  return (
    <div className="App">
      <h1>LocaStorage</h1>
      <input
        type={"text"}
        placeholder="Enter your name"
        onChange={(e) => setItem(e.target.value)}
        value={item}
      />
      <button onClick={addItem}>Add Item</button>
      <button onClick={deleteItem}>Delete Item</button>
      <button onClick={clearItems}>Delete All Items</button>
      <p>{localStorage.getItem("name")}</p>
    </div>
  );
}

export default App;
