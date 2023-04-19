const makeList = (array) => {
  const newList = document.createElement("ul");

  array.forEach((item) => {
    const newItem = item.cloneNode(true);
    newList.appendChild(newItem);
  });

  return newList;
};

const removeList = (list) => {
  list.forEach((item) => item.remove());
};

export { makeList, removeList };
