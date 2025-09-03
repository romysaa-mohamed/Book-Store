// ==================== BOOKS ====================
const books = [
  {
    title: "Meditations",
    author: "Marcus Aurelius",
    description: "Private reflections from a Roman emperor on virtue, mortality, and inner peace. A timeless companion for those seeking strength in solitude.",
    image: "images/meditation.jpg",
    price: "$12.99"
  },
  {
    title: "The Republic",
    author: "Plato",
    description: "A philosophical vision of justice and the ideal state. Through Socratic dialogue, Plato explores truth, power, and the soul.",
    image: "images/the republic.jpeg",
    price: "$14.50"
  },
  {
    title: "Being and Time",
    author: "Martin Heidegger",
    description: "A poetic and radical rethinking of existence. Heidegger invites readers to confront time, death, and the meaning of being.",
    image: "images/being and time.jpeg",
    price: "$18.00"
  },
  {
    title: "Critique of Pure Reason",
    author: "Immanuel Kant",
    description: "A monumental inquiry into how we perceive reality. Kant reshapes modern thought with his theory of knowledge and experience.",
    image: "images/critique.jpeg",
    price: "$16.75"
  },
  {
    title: "Letters from a Stoic",
    author: "Seneca",
    description: "Wisdom on life, virtue, and resilience from one of Rome’s greatest minds. A guide for living with dignity and calm.",
    image: "images/letter.jpeg",
    price: "$11.25"
  },
  {
    title: "The Ethics",
    author: "Baruch Spinoza",
    description: "A geometric meditation on emotion, reason, and the divine. Spinoza’s clarity offers a serene path to understanding life.",
    image: "images/the ethics.jpeg",
    price: "$13.40"
  },
  {
    title: "Phenomenology of Spirit",
    author: "G.W.F. Hegel",
    description: "A dense journey through consciousness and history. Hegel’s work challenges readers to rethink identity and freedom.",
    image: "images/phenomenon.jpeg",
    price: "$17.90"
  },
  {
    title: "The Birth of Tragedy",
    author: "Friedrich Nietzsche",
    description: "An exploration of myth, art, and the tension between reason and passion. Nietzsche’s lyrical style provokes and inspires.",
    image: "images/birth.jpeg",
    price: "$15.60"
  },
  {
    title: "The Tao Te Ching",
    author: "Laozi",
    description: "Ancient Chinese wisdom on harmony, simplicity, and the way of nature. A quiet book with profound depth.",
    image: "images/tao.jpeg",
    price: "$10.99"
  },
  {
    title: "The Analects",
    author: "Confucius",
    description: "Sayings and teachings on ethics, family, and governance. A moral compass rooted in tradition and clarity.",
    image: "images/analects.jpeg",
    price: "$9.80"
  },
  {
    title: "The Art of War",
    author: "Sun Tzu",
    description: "Strategic insights that transcend warfare. A guide to leadership, discipline, and psychological mastery.",
    image: "images/art of war.jpeg",
    price: "$11.50"
  },
  {
    title: "Discourse on Method",
    author: "René Descartes",
    description: "A rational manifesto for modern thought. Descartes lays the foundation for logic, doubt, and self-awareness.",
    image: "images/method.jpeg",
    price: "$13.25"
  },
  {
    title: "On Liberty",
    author: "John Stuart Mill",
    description: "A defense of personal freedom and the limits of authority. Mill’s clarity and conviction remain strikingly relevant.",
    image: "images/liberty.jpeg",
    price: "$12.40"
  },
  {
    title: "Utilitarianism",
    author: "John Stuart Mill",
    description: "A concise argument for the greatest happiness principle. A cornerstone of ethical reasoning and social philosophy.",
    image: "images/utilitarianism.jpeg",
    price: "$10.75"
  },
  {
    title: "The Prince",
    author: "Niccolò Machiavelli",
    description: "A pragmatic guide to power and politics. Machiavelli’s realism is bold, unsettling, and enduringly influential.",
    image: "images/prince.jpeg",
    price: "$13.90"
  },
  {
    title: "The Social Contract",
    author: "Jean-Jacques Rousseau",
    description: "A revolutionary vision of freedom, equality, and collective will. Rousseau challenges authority and imagines a society built on mutual respect.",
    image: "images/social.jpeg",
    price: "$14.20"
  },
  {
    title: "The Myth of Sisyphus",
    author: "Albert Camus",
    description: "A poetic meditation on absurdity, rebellion, and meaning. Camus explores the human struggle to find purpose in a silent universe.",
    image: "images/myth.jpeg",
    price: "$12.60"
  },
  {
    title: "Tractatus Logico-Philosophicus",
    author: "Ludwig Wittgenstein",
    description: "A cryptic and profound treatise on logic, language, and reality. Wittgenstein’s minimalist style conceals radical depth.",
    image: "images/tractatus.jpeg",
    price: "$15.30"
  },
  {
    title: "The World as Will and Representation",
    author: "Arthur Schopenhauer",
    description: "A metaphysical exploration of desire, suffering, and art. Schopenhauer’s bleak beauty resonates with introspective minds.",
    image: "images/will.jpeg",
    price: "$16.80"
  },
  {
    title: "The Enchiridion",
    author: "Epictetus",
    description: "A compact guide to Stoic resilience and inner strength. Epictetus offers practical wisdom for navigating hardship with grace.",
    image: "images/enchiridion.jpeg",
    price: "$9.99"
  }
];

// ==================== CART HANDLING ====================
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

function addToCart(book) {
  cartItems.push(book);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  alert(`"${book.title}" has been added to your cart.`);
}

// ==================== DISPLAY BOOKS ====================
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
        <button class="details-btn">Add to Cart</button>
      </div>
    `;
    bookList.appendChild(card);

    // زرار "Add to Cart"
    card.querySelector(".details-btn").addEventListener("click", () => addToCart(book));
  });
}

// ==================== SEARCH ====================
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = books.filter(book =>
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query)
  );
  displayBooks(filtered);
});

// أول تحميل
displayBooks();