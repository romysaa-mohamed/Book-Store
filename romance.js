const books = [
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A tale of wit, longing, and love that defies social boundaries. Austen’s classic dances between pride and vulnerability.",
    image: "images/romance1.jpg",
    price: "$12.99"
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    description: "A story of resilience and romantic yearning. Jane’s quiet strength and fiery heart make this a timeless journey.",
    image: "images/romance2.jpg",
    price: "$13.50"
  },
  {
    title: "Wuthering Heights",
    author: "Emily Brontë",
    description: "A haunting love that defies death and reason. The moors echo with passion, pain, and poetic madness.",
    image: "images/romance3.jpg",
    price: "$14.20"
  },
  {
    title: "The Notebook",
    author: "Nicholas Sparks",
    description: "A tender story of enduring love and memory. Sparks captures the ache and beauty of devotion.",
    image: "images/romance4.jpg",
    price: "$11.80"
  },
  {
    title: "Me Before You",
    author: "Jojo Moyes",
    description: "A bittersweet romance that challenges fate and choice. Moyes writes with warmth, humor, and heartbreak.",
    image: "images/romance5.jpg",
    price: "$12.40"
  },
  {
    title: "Call Me by Your Name",
    author: "André Aciman",
    description: "A lyrical exploration of desire and identity. Aciman’s prose glows with intimacy and longing.",
    image: "images/romance6.jpg",
    price: "$13.90"
  },
  {
    title: "The Time Traveler’s Wife",
    author: "Audrey Niffenegger",
    description: "A love story stretched across time. Niffenegger blends science fiction with emotional depth.",
    image: "images/romance7.jpg",
    price: "$14.60"
  },
  {
    title: "Outlander",
    author: "Diana Gabaldon",
    description: "A sweeping romance set in the Scottish Highlands. Gabaldon’s tale is rich with history, passion, and adventure.",
    image: "images/romance8.jpg",
    price: "$15.20"
  },
  {
    title: "The Rosie Project",
    author: "Graeme Simsion",
    description: "A quirky and heartfelt journey of unexpected love. Simsion’s humor and charm shine through every page.",
    image: "images/romance9.jpg",
    price: "$10.99"
  },
  {
    title: "Twilight",
    author: "Stephenie Meyer",
    description: "A modern myth of forbidden love. Meyer’s tale blends danger, devotion, and teenage yearning.",
    image: "images/romance10.jpg",
    price: "$11.50"
  },
  {
    title: "The Fault in Our Stars",
    author: "John Green",
    description: "A poignant love story in the shadow of mortality. Green’s voice is tender, witty, and unforgettable.",
    image: "images/romance11.jpg",
    price: "$12.30"
  },
  {
    title: "Love in the Time of Cholera",
    author: "Gabriel García Márquez",
    description: "A poetic meditation on love’s endurance. Márquez writes with lush imagery and timeless emotion.",
    image: "images/romance12.jpg",
    price: "$13.70"
  },
  {
    title: "The Bridges of Madison County",
    author: "Robert James Waller",
    description: "A fleeting romance that lingers forever. Waller’s prose is quiet, aching, and deeply human.",
    image: "images/romance13.jpg",
    price: "$12.10"
  },
  {
    title: "A Walk to Remember",
    author: "Nicholas Sparks",
    description: "A gentle story of first love and lasting impact. Sparks captures innocence and emotional depth.",
    image: "images/romance14.jpg",
    price: "$11.60"
  },
  {
    title: "The Wedding",
    author: "Nicholas Sparks",
    description: "A mature reflection on love, commitment, and rediscovery. Sparks writes with grace and sincerity.",
    image: "images/romance15.jpg",
    price: "$13.00"
  },
  {
    title: "Beautiful Disaster",
    author: "Jamie McGuire",
    description: "A fiery romance full of chaos and chemistry. McGuire’s characters burn with intensity and vulnerability.",
    image: "images/romance16.jpg",
    price: "$12.90"
  },
  {
    title: "It Ends with Us",
    author: "Colleen Hoover",
    description: "A powerful story of love and strength. Hoover blends romance with emotional realism and courage.",
    image: "images/romance17.jpg",
    price: "$14.40"
  },
  {
    title: "Reminders of Him",
    author: "Colleen Hoover",
    description: "A tender tale of redemption and connection. Hoover’s prose is raw, poetic, and deeply moving.",
    image: "images/romance18.jpg",
    price: "$13.80"
  },
  {
    title: "The Kiss Quotient",
    author: "Helen Hoang",
    description: "A smart and sensual romance. Hoang’s characters are vibrant, complex, and beautifully real.",
    image: "images/romance19.jpg",
    price: "$12.70"
  },
  {
    title: "One Day",
    author: "David Nicholls",
    description: "A bittersweet journey through time and love. Nicholls captures the ache of missed chances and enduring affection.",
    image: "images/romance20.jpg",
    price: "$13.20"
  }
];
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");

function displayBooks(filteredBooks = books) {
  bookList.innerHTML = "";
  filteredBooks.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-row";
    card.innerHTML = `
      <img src="${book.image}" alt="${book.title}" class="book-cover" />
      <div class="book-details">
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p>${book.description}</p>
        <p><strong>Price:</strong> ${book.price}</p>
        <a href="#" class="details-btn">Add to Cart</a>
      </div>
    `;
    bookList.appendChild(card);
    const addButton = card.querySelector(".details-btn");
addButton.addEventListener("click", () => {
  cartItems.push(book);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  alert(`"${book.title}" has been added to your cart.`);
});
  });
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = books.filter(book =>
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query)
  );
  displayBooks(filtered);
});

displayBooks();