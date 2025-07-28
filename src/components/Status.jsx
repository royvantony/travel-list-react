function Status({ items }) {
  const numItems = items.length;
  if (numItems <= 0) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list🚀</em>
      </footer>
    );
  }
  // const packedItems = items.reduce(
  //   (acc, item) => acc + (item.packed ? 1 : 0),
  //   0
  // );
  const packedItems = items.filter((i) => i.packed).length;
  const percentage =
    numItems > 0 ? Math.round((packedItems * 100) / numItems) : 0;
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? " You are all set to travel ✈️"
          : `🛍️You have ${numItems} items on your list` +
            (packedItems > 0
              ? `and you
        already packed ${packedItems} (${percentage} %)`
              : "")}
      </em>
    </footer>
  );
}
export default Status;
