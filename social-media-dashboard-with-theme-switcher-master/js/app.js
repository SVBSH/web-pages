const changeThemeBtn = document.querySelector("#switch");

changeThemeBtn.addEventListener("click", e => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === "dark") {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
});
