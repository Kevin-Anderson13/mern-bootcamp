import React, { useState } from "react";
import './App.css';

function App() {
  const [newItem, setNewItem] = useState("");
  const [listItems, setListItems] = useState([]);

  const handleNewItemSubmit = (e) => {
    e.preventDefault();

    if (newItem.length === 0) {
      return;
    }

    const addedItem = {
      text: newItem,
      finished: false
    }

    setListItems([...listItems, addedItem]);
    setNewItem("");
  }

  const handleItemDelete = (delIdx) => {
    const filteredItems = listItems.filter((item, i) => {
      return i !== delIdx;
    });

    setListItems(filteredItems);
  }

  const handleToggleFinished = (idx) => {
    const updatedItems = listItems.map((item, i) => {
      if (idx === i) {
        item.finished = !item.finished;
      }

      return item;
    });

    setListItems(updatedItems);
  }



  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={(e) => {
        handleNewItemSubmit(e);
      }}>
        <input
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
          type="text"
          value={newItem}
        />
        <div>
          <button>Add To-Do Item</button>
        </div>
      </form>

      <hr />

      {listItems.map((item, i) => {
        const itemClasses = ["bold"];

        if (item.finished) {
          itemClasses.push("cross-out");
          itemClasses.push("make-grey");
        }

        return (
          <div key={i}>
            <input onChange={(e) => {
              handleToggleFinished(i);
            }} checked={item.finished} type="checkbox" />
            <span className={itemClasses.join(" ")}>{item.text}</span>
            <button onClick={(e) => {
              handleItemDelete(i);
            }}
              style={{ marginLeft: "8px" }}
            >Delete</button>
          </div>
        )
      })
      }
    </div>
  );
}

export default App;
