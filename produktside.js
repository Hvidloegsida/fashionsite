const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
// fetch
fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector("h2").textContent = product.productdisplayname;
  document.querySelector(".brand").textContent = product.brandname;
  document.querySelector(".produktimg").src = `https://kea-alt-del.dk/t7/images/jpg/640/${product.id}.jpg`;
  document.querySelector(".pris").textContent = product.price;
  document.querySelector(".nummer").textContent = product.id;
}
