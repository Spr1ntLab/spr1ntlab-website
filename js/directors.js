"use strict";
// TASK D06 — Directors Cards owns this file (about.html only).
const directorButtons = document.querySelectorAll(".director-card__toggle");

directorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".about-directors__item");
    const front = item.querySelector(".director-card__front");
    const back = document.getElementById(button.getAttribute("aria-controls"));
    const name = front.querySelector(".director-card__name").textContent;

    const isExpanded = button.getAttribute("aria-expanded") === "true";

    front.hidden = !isExpanded;
    back.hidden = isExpanded;

    button.setAttribute("aria-expanded", String(!isExpanded));
    button.setAttribute("aria-label", `${isExpanded ? "Show" : "Hide"} more about ${name}`);

    item.classList.toggle("is-expanded", !isExpanded);
  });
});
// TODO D06: .director-card__toggle controls the matching .director-card__back.
// Do not fabricate Figma content or modify the global navigation script.
