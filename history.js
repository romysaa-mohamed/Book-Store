const books = [
  {
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    description: "A sweeping exploration of how geography and environment shaped the fate of civilizations. Diamond blends science and history with poetic clarity.",
    image: "images/history1.jpg",
    price: "$14.99"
  },
  {
    title: "The Silk Roads",
    author: "Peter Frankopan",
    description: "A majestic retelling of global history through the lens of trade, culture, and empire. The East takes center stage in this elegant narrative.",
    image: "images/history2.jpg",
    price: "$16.50"
  },
  {
    title: "A People's History of the United States",
    author: "Howard Zinn",
    description: "History from the margins—Zinn gives voice to the silenced, the forgotten, and the brave. A powerful challenge to traditional narratives.",
    image: "images/history3.jpg",
    price: "$13.80"
  },
  {
    title: "SPQR: A History of Ancient Rome",
    author: "Mary Beard",
    description: "Rome’s grandeur and grit come alive in Beard’s vivid storytelling. A journey through power, politics, and the pulse of empire.",
    image: "images/history4.jpg",
    price: "$15.20"
  },
  {
    title: "The Histories",
    author: "Herodotus",
    description: "The father of history weaves tales of war, wonder, and wisdom. A timeless tapestry of ancient civilizations and human curiosity.",
    image: "images/history5.jpg",
    price: "$12.40"
  },
  {
    title: "The Crusades",
    author: "Thomas Asbridge",
    description: "A gripping chronicle of faith, fury, and ambition. Asbridge paints the medieval world with cinematic depth and scholarly grace.",
    image: "images/history6.jpg",
    price: "$14.75"
  },
  {
    title: "Postwar: A History of Europe Since 1945",
    author: "Tony Judt",
    description: "A monumental account of Europe’s rebirth and reckoning. Judt’s prose is both analytical and emotionally resonant.",
    image: "images/history7.jpg",
    price: "$17.60"
  },
  {
    title: "The Wright Brothers",
    author: "David McCullough",
    description: "An intimate portrait of innovation and perseverance. McCullough captures the spirit of flight and the minds behind it.",
    image: "images/history8.jpg",
    price: "$11.90"
  },
  {
    title: "The Diary of Anne Frank",
    author: "Anne Frank",
    description: "A haunting and hopeful voice from history’s darkest hour. Anne’s words echo with innocence, courage, and longing.",
    image: "images/history9.jpg",
    price: "$10.99"
  },
  {
    title: "The Rise and Fall of the Third Reich",
    author: "William L. Shirer",
    description: "A chilling and comprehensive study of tyranny. Shirer’s firsthand account is both historical and deeply human.",
    image: "images/history10.jpg",
    price: "$18.30"
  },
  {
    title: "1491: New Revelations of the Americas Before Columbus",
    author: "Charles C. Mann",
    description: "A lyrical reimagining of pre-Columbian America. Mann restores complexity and beauty to indigenous histories.",
    image: "images/history11.jpg",
    price: "$13.50"
  },
  {
    title: "The Cold War: A New History",
    author: "John Lewis Gaddis",
    description: "A brisk and balanced account of ideological tension and global chess. Gaddis brings clarity to a complex era.",
    image: "images/history12.jpg",
    price: "$14.20"
  },
  {
    title: "The History of the Ancient World",
    author: "Susan Wise Bauer",
    description: "A sweeping narrative from the dawn of civilization. Bauer’s storytelling is rich, rhythmic, and deeply human.",
    image: "images/history13.jpg",
    price: "$15.90"
  },
  {
    title: "The Great Game",
    author: "Peter Hopkirk",
    description: "Espionage, empire, and intrigue in Central Asia. Hopkirk’s tale is thrilling, atmospheric, and historically sharp.",
    image: "images/history14.jpg",
    price: "$12.80"
  },
  {
    title: "The Reformation",
    author: "Diarmaid MacCulloch",
    description: "A masterful study of faith and fracture. MacCulloch’s prose is scholarly yet soulful, capturing a world in upheaval.",
    image: "images/history15.jpg",
    price: "$16.10"
  },
  {
    title: "The Plantagenets",
    author: "Dan Jones",
    description: "Medieval drama at its finest. Jones revives kings, battles, and betrayals with cinematic flair and historical rigor.",
    image: "images/history16.jpg",
    price: "$14.60"
  },
  {
    title: "The History of the Peloponnesian War",
    author: "Thucydides",
    description: "A philosophical and political masterpiece. Thucydides dissects war, power, and human nature with timeless insight.",
    image: "images/history17.jpg",
    price: "$13.20"
  },
  {
    title: "Destiny Disrupted",
    author: "Tamim Ansary",
    description: "A poetic history of the Islamic world. Ansary bridges East and West with warmth, wit, and wisdom.",
    image: "images/history18.jpg",
    price: "$12.70"
  },
  {
    title: "The History of England",
    author: "Peter Ackroyd",
    description: "A literary journey through England’s soul. Ackroyd’s prose is elegant, evocative, and steeped in tradition.",
    image: "images/history19.jpg",
    price: "$15.40"
  },
  {
    title: "Jerusalem: The Biography",
    author: "Simon Sebag Montefiore",
    description: "A city of faith, fire, and fascination. Montefiore’s chronicle is epic, emotional, and endlessly layered.",
    image: "images/history20.jpg",
    price: "$17.10"
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