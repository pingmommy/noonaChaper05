document.addEventListener("DOMContentLoaded", function () {
  const c1b1 = document.getElementById("c1b1");
  const c4b1 = document.getElementById("c4b1");
  const c4b2 = document.getElementById("c4b2");
  const c3Children01 = document.getElementById("c3-children-box");
  const c3MotherBox = document.getElementById("c3-mother-box");
  const c4Event = document.getElementById("c4-event");

  c1b1.addEventListener("click", () => {
    c1b1.classList.add("left");
    c1b1.textContent = "🐢";
  });

  c3MotherBox.addEventListener("click", () => {
    c3Children01.style.left = "0px";
  });

  c4Event.addEventListener("click", () => {
    c4Event.style.display = "none";
    c4b2.style.left = "70px";
    c4b1.style.left = "0px";
  });
});
