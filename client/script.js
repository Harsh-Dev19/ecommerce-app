const products = [
  {
    name: "Dior Sauvage",
    price: 120,
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Chanel No.5",
    price: 150,
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Versace Eros",
    price: 110,
    image: "https://via.placeholder.com/150"
  }
];

const container = document.getElementById("products");

products.forEach(p => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <img src="${p.image}" />
    <h3>${p.name}</h3>
    <p>$${p.price}</p>
    <button>Add to Cart</button>
  `;

  container.appendChild(div);
});