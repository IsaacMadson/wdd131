document.addEventListener("DOMContentLoaded", () => {
  // Cache form and elements
  const theForm = document.querySelector("#checkoutForm");
  const creditCardContainer = document.getElementById("creditCardNumberContainer");
  const paypalContainer = document.getElementById("paypalUsernameContainer");
  const errorEl = document.querySelector(".errors");

  // Ensure containers and form exist
  if (!theForm || !creditCardContainer || !paypalContainer || !errorEl) {
    console.error("Required DOM elements are missing.");
    return;
  }

  function validateForm(event) {
    const errors = [];
    let isValid = true;

    const fullName = theForm.fullName?.value;
    const paymentMethod = theForm.paymentMethod?.value;
    const creditCardNumber = theForm.creditCardNumber?.value;
    const paypalUsername = theForm.paypalUsername?.value;

    // Validate credit card if selected
    if (paymentMethod === "creditCard") {
      if (creditCardNumber !== "1234123412341234") {
        isValid = false;
        errors.push("Invalid Credit Card Number");
      }
    }

    // Validate full name
    if (fullName !== "Bob") {
      isValid = false;
      errors.push("Your name is not Bob");
    }

    if (!isValid) {
      event.preventDefault();
      showErrors(errors);
    }
  }

  function togglePaymentDetails() {
    const paymentMethod = theForm.paymentMethod?.value;

    // Hide both containers and disable required
    creditCardContainer.classList.add("hide");
    paypalContainer.classList.add("hide");
    if (theForm.creditCardNumber) theForm.creditCardNumber.required = false;
    if (theForm.paypalUsername) theForm.paypalUsername.required = false;

    // Show the one needed
    if (paymentMethod === "creditCard") {
      creditCardContainer.classList.remove("hide");
      if (theForm.creditCardNumber) theForm.creditCardNumber.required = true;
    } else if (paymentMethod === "paypal") {
      paypalContainer.classList.remove("hide");
      if (theForm.paypalUsername) theForm.paypalUsername.required = true;
    }
  }

  function showErrors(errors) {
    const html = errors.map(error => `<p>${error}</p>`).join("");
    errorEl.innerHTML = html;
  }

  // Clear errors on any input change
  theForm.addEventListener("input", () => {
    errorEl.innerHTML = "";
  });

  // Add aria-live for screen reader accessibility
  errorEl.setAttribute("aria-live", "polite");

  // Event bindings
  theForm.addEventListener("submit", validateForm);
  theForm.paymentMethod?.addEventListener("change", togglePaymentDetails);

  // Initialize visibility on load (in case a method is pre-selected)
  togglePaymentDetails();
});
