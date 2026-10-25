// 11-dom-read

export function pageHeading() {
  return document.querySelector("h1").textContent;
}

export function productCount() {
  return document.querySelectorAll(".card").length;
}

export function productNames() {
  return Array.from(document.querySelectorAll(".card")).map(
    (card) => card.querySelector("h3").textContent
  );
}

export function priceOf(name) {
  const card = Array.from(document.querySelectorAll(".card")).find(
    (card) => card.querySelector("h3").textContent === name
  );
  if (!card) {
    return null;
  }
  return card.querySelector(".price").textContent;
}

export function soldOutNames() {
  return Array.from(document.querySelectorAll(".card.sold-out")).map(
    (card) => card.querySelector("h3").textContent
  );
}