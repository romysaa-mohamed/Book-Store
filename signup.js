}function handleSignup(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  if (password !== confirm) {
    alert("❌ Passwords do not match!");
    return;
  }

  alert(`✅ Welcome, ${name}! Your account has been created successfully.`);
  window.location.href = "index.html";
}