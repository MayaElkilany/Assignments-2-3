import { items } from "./items.js";

export function renderItems(list) {
  const ul = document.querySelector("#list");
  ul.textContent = "";

  for (const item of list) {
    const li = document.createElement("li");
    li.classList.add("row");
    li.textContent = `${item.name} (${item.category})`;
    ul.append(li);
  }
}

export function matching() {
  return items.filter((item) => item.inStock === true);
}

export function start() {
  renderItems(items);
  document.querySelector("#pick").addEventListener("click", () => {
    renderItems(matching());
  });
}
