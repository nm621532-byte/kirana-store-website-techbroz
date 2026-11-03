const items = [
  ["Atta 5kg", 249, "🌾"],
  ["Chawal 1kg", 120, "🍚"],
  ["Chai Patti", 99, "☕"],
  ["Maggi Pack", 56, "🍜"],
];
shop.innerHTML = items.map(
  ([name, price, icon]) =>
    `<div class="card">
      <span>${icon}</span><br>
      <b>${name}</b>
      <p>₹${price}</p>
      <button onclick="add(${price})">Add</button>
    </div>`
).join("");
function add(p) {
  total.textContent = Number(total.textContent) + p;
}
