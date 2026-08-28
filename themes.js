const themes = ["dark", "light", "blue"];
const themeColors = {
  dark: "#0f0f0f",
  light: "#ffffff",
  blue: "#0b1220"
};
const themeMeta = document.querySelector('meta[name="theme-color"]');

function readSavedTheme() {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;

  if (themeMeta) {
    themeMeta.setAttribute("content", themeColors[theme]);
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Theme still works for this session when storage is unavailable.
  }
}

const savedTheme = readSavedTheme();
const initialTheme = themes.includes(savedTheme) ? savedTheme : "dark";

applyTheme(initialTheme);

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  const currentIndex = themes.indexOf(document.documentElement.dataset.theme);
  const nextTheme = themes[(currentIndex + 1) % themes.length];

  applyTheme(nextTheme);
  saveTheme(nextTheme);
  themeToggle.setAttribute("aria-label", `Change color theme. Current theme: ${nextTheme}`);
});

themeToggle.setAttribute("aria-label", `Change color theme. Current theme: ${initialTheme}`);
