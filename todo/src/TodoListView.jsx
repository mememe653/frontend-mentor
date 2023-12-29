import { useState } from "react";
import "./TodoListView.css";

export default function TodoListView({ setVisibility }) {
  function toggleView(id) {
    const newButtons = [...buttons];
    newButtons.forEach(button => button.selected = false);
    const selectedButton = newButtons.find(button => button.id === id);
    selectedButton.selected = true;
    setButtons(newButtons);
    setVisibility(`${selectedButton.content.toLowerCase()}`);
  }

  const [buttons, setButtons] = useState([
                                          { id: 0, selected: true, content: "All" },
                                          { id: 1, selected: false, content: "Active" },
                                          { id: 2, selected: false, content: "Completed" },
                                        ]);

  return (
    <div className="toggle-view-container">
      {buttons.map(button => <ViewButton id={button.id} selected={button.selected} toggleView={toggleView} content={button.content} />)}
    </div>
  );
}

function ViewButton({ id, selected, toggleView, content }) {
  return (
    <button className={selected ? "selected" : ""} onClick={() => toggleView(id)}>{content}</button>
  );
}
