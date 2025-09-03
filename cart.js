const cartList = document.getElementById("cartList");
const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

// هنا هخلي الخصم 20% على سبيل المثال
const discountRate = 0.2;

function displayCart() {
  cartList.innerHTML = "";

  if (cartItems.length === 0) {
    cartList.innerHTML = "<p style='text-align:center;'>Your cart is empty.</p>";
    return;
  }

  cartItems.forEach(book => {
    // تحويل السعر لرقم
    const originalPrice = parseFloat(book.price.replace("$", ""));
    const discountedPrice = (originalPrice * (1 - discountRate)).toFixed(2);

    const card = document.createElement("div");
    card.className = "book-row";
    card.innerHTML = `
      <img src="${book.image}" alt="${book.title}" class="book-cover" />
      <div class="book-details">
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p>
          <strong>Price:</strong> 
          <span class="old-price">$${originalPrice.toFixed(2)}</span>
          <span class="new-price">$${discountedPrice}</span>
        </p>
        <button class="details-btn remove-btn">Remove</button>
      </div>
    `;
    cartList.appendChild(card);

    // زر الحذف من السلة
    card.querySelector(".remove-btn").addEventListener("click", () => {
      const index = cartItems.findIndex(item => item.title === book.title);
      cartItems.splice(index, 1);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      displayCart(); // إعادة عرض السلة بعد الحذف
    });
  });
}

displayCart();