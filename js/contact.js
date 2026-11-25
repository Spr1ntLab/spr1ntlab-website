"use strict";
// TASK D08 — Contact Form owns this file (contact.html only).
// Optional form UI validation; backend/API submission is outside current project scope.
// Do not claim successful form submission without a real backend endpoint.
 const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.noValidate = true;

  const feedback = document.createElement("p");
  feedback.className = "contact-form__feedback";
  feedback.setAttribute("role", "status");
  contactForm.append(feedback);

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      feedback.textContent =
        "Please fill in all required fields and enter a valid email.";
      feedback.style.color = "#f67e7e";
      contactForm.reportValidity();
      return;
    }

    feedback.style.color = "#ffffff";
    feedback.textContent =
      "Demo only: your message has not been sent.";
  });
}