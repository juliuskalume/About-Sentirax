const yearElement = document.getElementById("y");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
