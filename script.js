const categories = [
  {
    name: "Philosophy",
    description: "Contemplate timeless questions and explore the minds of great thinkers.",
    icon: "🧠",
    image: "images/philo.jpeg",
    link: "philosophy.html"
  },
  {
    name: "History",
    description: "Travel through time and uncover the stories that shaped civilizations.",
    icon: "🏛",
    image: "images/download.jpeg",
    link: "history.html"
  },
  {
    name: "Romance",
    description: "Feel the warmth of love, longing, and poetic emotion.",
    icon: "💌",
    image: "images/Romantic.jpeg",
    link: "romance.html"
  },
  {
    name: "Crime",
    description: "Dive into mysteries, thrillers, and dark secrets waiting to be solved.",
    icon: "🕵‍♀",
    image: "images/download2.jpeg",
    link: "crime.html"
  }
];

const categoryList = document.getElementById("categoryList");

function displayCategories() {
  categoryList.innerHTML = "";
  categories.forEach(category => {
    const card = document.createElement("div");
    card.className = "book";
    card.innerHTML = `
      <img src="${category.image}" alt="${category.name}" />
      <h3>${category.icon} ${category.name}</h3>
      <p>${category.description}</p>
      <a href="${category.link}" class="details-btn">View Books</a>
    `;
    categoryList.appendChild(card);
  });
}

displayCategories();