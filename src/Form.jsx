import { useState } from "react";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [qty, setQty] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description,
      quantity: qty,
      packed: false,
      id: Date.now(),
    };
    onAddItems(newItem);
    resetItems();
  }
  function resetItems() {
    setDescription("");
    setQty(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h5>What do you need for your trip😍? </h5>
      <select
        value={qty}
        onChange={(e) => {
          setQty(e.target.value);
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
