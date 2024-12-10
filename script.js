const timeDisplay = document.getElementById("current-time");
const toggleFormatBtn = document.getElementById("toggle-format");
const emojiSearch = document.getElementById("emoji-search");
const emojiCategories = document.querySelectorAll(".emoji-category");
const categoryButtons = document.querySelectorAll(".category-btn");

let is24HourFormat = false;

// Update Time
function updateTime() {
  const now = new Date();
  const time = is24HourFormat
    ? now.toLocaleTimeString('en-GB')
    : now.toLocaleTimeString('en-US');
  timeDisplay.textContent = time;
}

// Switch Time Format
toggleFormatBtn.addEventListener("click", () => {
  is24HourFormat = !is24HourFormat;
});

// Emoji Search
emojiSearch.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll(".emoji").forEach(emoji => {
    emoji.style.display = emoji.textContent.toLowerCase().includes(query) ? "inline-block" : "none";
  });
});

// Category Navigation
categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    categoryButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    emojiCategories.forEach(category => {
      category.style.display = category.dataset.category === button.dataset.category ? "flex" : "none";
    });
  });
});

// Initialize
setInterval(updateTime, 1000);
updateTime();
