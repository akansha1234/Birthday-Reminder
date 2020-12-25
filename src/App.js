import React, { useState } from "react";
import "./styles.css";
import data from "./data";
import List from "./List";
export default function App() {
  const [persons, setPerson] = useState(data);
  return (
    <div className="App">
      <h1>Total {persons.length} Birthdays</h1>
      <List persons={persons} />
      <button
        onClick={() => {
          setPerson([]);
        }}
        className="btn"
      >
        Clear All
      </button>
    </div>
  );
}
