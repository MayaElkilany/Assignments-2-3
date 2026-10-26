// 13-forms

const items = [];

export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);
  return { name, price };
}

export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

export function renderList(items) {
  const list = document.querySelector("#list");
  list.textContent = "";

  for (const item of items) {
    const card = document.createElement("li");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = item.name;

    const tag = document.createElement("p");
    tag.classList.add("price");
    tag.textContent = `${item.price} EGP`;

    card.append(title, tag);
    list.append(card);
  }
}

export function wireForm() {
  const form = document.querySelector("#product-form");
  const errorLine = document.querySelector("#error");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { name, price } = readForm();

    if (!name) {
      errorLine.textContent = "Give the product a name.";
      return;
    }
    if (!(price > 0)) {
      errorLine.textContent = "Give the product a price.";
      return;
    }

    errorLine.textContent = "";
    items.push({ name, price });
    renderList(items);
    clearForm();
  });
}