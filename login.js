function handleLogin(event) {
  event.preventDefault(); // يمنع إعادة تحميل الصفحة

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("Please fill in both fields.");
    return false;
  }

  // تحقق بسيط (ممكن تستبدليه بقاعدة بيانات لاحقًا)
  if (email === "admin@example.com" && password === "123456") {
    alert("📚 Welcome back, Romysaa!");
    localStorage.setItem("userLoggedIn", "true");
    window.location.href = "index.html";
  } else {
    alert("Incorrect email or password.");
  }

  return false;
}