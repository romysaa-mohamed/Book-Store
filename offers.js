// العروض المتاحة
const offers = [
  {
    title: "📚 Classic Discount",
    description: "Get 20% off all classic literature titles. Austen, Brontë, Tolstoy—timeless stories at gentle prices."
  },
  {
    title: "🎁 Free Gift with First Order",
    description: "Receive a poetic bookmark and a surprise quote card with your first purchase."
  },
  {
    title: "📖 Buy 2, Get 1 Free",
    description: "Add any 3 books to your cart and the lowest-priced one is free. No code needed."
  },
  {
    title: "📝 Literary Quote with Every Order",
    description: "Each order comes with a handpicked quote from a classic author—your own piece of wisdom."
  },
  {
    title: "🌙 Midnight Mystery Bundle",
    description: "Get 3 crime novels for the price of 2—only available after 10PM."
  },
  {
    title: "💌 Romance Revival",
    description: "Enjoy 15% off all romance titles this week. Let love lead the way."
  }
];

// عرض البطاقات في الصفحة
const offersList = document.getElementById("offersList");

offers.forEach(offer => {
  const card = document.createElement("div");
  card.className = "offer-card";
  card.innerHTML = `
    <h3>${offer.title}</h3>
    <p>${offer.description}</p>
    <button class="apply-btn">Apply Offer</button>
  `;
  offersList.appendChild(card);

  // زرار وهمي لتطبيق العرض
  card.querySelector(".apply-btn").addEventListener("click", () => {
    alert("Offer applied! Your cart will reflect the discount.");
  });
});

// مؤقت العروض
function startCountdown(minutes) {
  let time = minutes * 60;
  const countdown = document.getElementById("countdown");

  const interval = setInterval(() => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    countdown.textContent =` ${mins}:${secs < 10 ? "0" : ""}${secs}`;
    time--;

    if (time < 0) {
      clearInterval(interval);
      countdown.textContent = "Expired";
    }
  }, 1000);
}

startCountdown(10); // مؤقت 10 دقايق