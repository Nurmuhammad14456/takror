const cardWapper = document.querySelector(".cardlar");

const API_URL = "https://fakestoreapi.com/products";

fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      const newCard = document.createElement("div");
      newCard.classList.add("product-card");
      newCard.innerHTML = `
       <img src="${element.image}" alt="${element.title}">
  <div class="product-info">
    <h3>${element.title.slice(0, 20)}...</h3>
    <p>${element.description.slice(0, 60)}...</p>
    <div class="price">$${element.price}</div>
  </div>

      `;
      cardWapper.appendChild(newCard);
    });
  })
  .catch((err) => {
    console.log("Xatolik:", err);
  });
