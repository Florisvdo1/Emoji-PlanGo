
document.addEventListener("DOMContentLoaded", () => {
  // Clock Update
  const timeDisplay = document.getElementById("current-time");
  function updateTime() {
    const now = new Date();
    timeDisplay.textContent = now.toLocaleTimeString();
  }
  setInterval(updateTime, 1000);

  // Drag-and-Drop Functionality
  const slots = document.querySelectorAll(".placeholder");
  const emojis = document.querySelectorAll(".emoji");
  emojis.forEach(emoji => {
    emoji.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text", e.target.textContent);
    });
  });
  slots.forEach(slot => {
    slot.addEventListener("dragover", e => e.preventDefault());
    slot.addEventListener("drop", e => {
      const emoji = e.dataTransfer.getData("text");
      slot.textContent = emoji;
    });
  });
});
