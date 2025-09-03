const books = [
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    description: "A chilling mystery wrapped in tech, trauma, and revenge. Larsson’s heroine is fierce, brilliant, and unforgettable.",
    image: "images/crime1.jpg",
    price: "$13.99"
  },
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    description: "A psychological thriller that twists love into manipulation. Flynn’s prose is sharp, unsettling, and addictive.",
    image: "images/crime2.jpg",
    price: "$14.50"
  },
  {
    title: "In the Woods",
    author: "Tana French",
    description: "A haunting murder in an Irish forest. French blends lyrical writing with psychological depth and eerie suspense.",
    image: "images/crime3.jpg",
    price: "$12.80"
  },
  {
    title: "The Silence of the Lambs",
    author: "Thomas Harris",
    description: "A dance between intellect and horror. Hannibal Lecter’s mind is as terrifying as the crimes he inspires.",
    image: "images/crime4.jpg",
    price: "$15.20"
  },
  {
    title: "Big Little Lies",
    author: "Liane Moriarty",
    description: "Secrets, scandals, and suburban shadows. Moriarty’s tale is witty, dark, and emotionally layered.",
    image: "images/crime5.jpg",
    price: "$13.40"
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    description: "A fast-paced puzzle of symbols, secrets, and sacred history. Brown’s thriller is cinematic and cerebral.",
    image: "images/crime6.jpg",
    price: "$14.90"
  },
  {
    title: "Sharp Objects",
    author: "Gillian Flynn",
    description: "A return to a hometown soaked in pain. Flynn’s writing cuts deep into trauma, memory, and murder.",
    image: "images/crime7.jpg",
    price: "$13.10"
  },
  {
    title: "The Reversal",
    author: "Michael Connelly",
    description: "Justice turns on its head. Connelly’s courtroom thriller is tense, smart, and morally complex.",
    image: "images/crime8.jpg",
    price: "$12.70"
  },
  {
    title: "Before I Go to Sleep",
    author: "S.J. Watson",
    description: "A woman wakes each day with no memory. Watson’s thriller is intimate, terrifying, and beautifully paced.",
    image: "images/crime9.jpg",
    price: "$11.90"
  },
  {
    title: "The Woman in the Window",
    author: "A.J. Finn",
    description: "A recluse sees something she shouldn’t. Finn’s homage to Hitchcock is suspenseful and psychologically rich.",
    image: "images/crime10.jpg",
    price: "$13.60"
  },
  {
    title: "The Secret History",
    author: "Donna Tartt",
    description: "A murder among scholars. Tartt’s prose is elegant, eerie, and steeped in intellectual darkness.",
    image: "images/crime11.jpg",
    price: "$14.80"
  },
  {
    title: "The Cuckoo’s Calling",
    author: "Robert Galbraith",
    description: "A private detective untangles fame and death. Galbraith’s mystery is classic, clever, and character-driven.",
    image: "images/crime12.jpg",
    price: "$12.50"
  },
  {
    title: "I Am Watching You",
    author: "Teresa Driscoll",
    description: "A stranger’s silence leads to tragedy. Driscoll’s thriller is tense, emotional, and full of moral weight.",
    image: "images/crime13.jpg",
    price: "$11.70"
  },
  {
    title: "The Girl on the Train",
    author: "Paula Hawkins",
    description: "A blurry memory and a missing woman. Hawkins crafts a psychological maze of doubt and obsession.",
    image: "images/crime14.jpg",
    price: "$13.20"
  },
  {
    title: "Behind Closed Doors",
    author: "B.A. Paris",
    description: "A perfect marriage hides a nightmare. Paris’s thriller is claustrophobic, chilling, and compulsive.",
    image: "images/crime15.jpg",
    price: "$12.90"
  },
  {
    title: "The Dry",
    author: "Jane Harper",
    description: "A murder in a drought-stricken town. Harper’s writing is atmospheric, tense, and emotionally resonant.",
    image: "images/crime16.jpg",
    price: "$13.80"
  },
  {
    title: "The Snowman",
    author: "Jo Nesbø",
    description: "A serial killer leaves icy clues. Nesbø’s Nordic noir is brutal, brilliant, and bone-chilling.",
    image: "images/crime17.jpg",
    price: "$14.30"
  },
  {
    title: "The Chestnut Man",
    author: "Søren Sveistrup",
    description: "A child’s toy marks a killer’s trail. Sveistrup’s thriller is dark, intricate, and deeply disturbing.",
    image: "images/crime18.jpg",
    price: "$13.70"
  },
  {
    title: "The Paris Secret",
    author: "Natasha Lester",
    description: "Fashion, war, and hidden truths. Lester blends historical drama with mystery and elegance.",
    image: "images/crime19.jpg",
    price: "$12.60"
  },
  {
    title: "The Night Fire",
    author: "Michael Connelly",
    description: "A cold case reignites. Connelly’s detective work is methodical, gripping, and morally layered.",
    image: "images/crime20.jpg",
    price: "$13.90"
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