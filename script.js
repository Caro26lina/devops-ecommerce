let total = 0;

function addToCart(product, price) {
  let table = document.getElementById("cartTable");

  // Create new row
  let row = table.insertRow();

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);

  cell1.innerHTML = product;
  cell2.innerHTML = "₹" + price;

  // update total
  total += price;
  document.getElementById("total").innerText = "Total: ₹" + total;
}