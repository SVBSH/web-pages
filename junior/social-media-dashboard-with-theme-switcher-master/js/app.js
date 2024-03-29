const changeThemeBtn = document.querySelector("#switch");

var storedTheme = localStorage.getItem('theme') || 
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme) {
  document.documentElement.setAttribute("data-theme", storedTheme);
}

changeThemeBtn.addEventListener("click", (e) => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  var targetTheme = "light";
  if (currentTheme === "light") {
    targetTheme = "dark";
  }
  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
});
