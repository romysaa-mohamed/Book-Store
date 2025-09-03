function handlePayment(event) {
  event.preventDefault(); // يمنع إعادة تحميل الصفحة

  const name = document.getElementById("name").value;
  const method = document.getElementById("method").value;

  alert(`✅ Thank you, ${name}! Your order has been confirmed.\nPayment Method: ${method}`);
  window.location.href = "index.html"; // يرجع للصفحة الرئيسية
}