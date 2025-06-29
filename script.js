// JavaScript for Flower Shop Website

document.addEventListener("DOMContentLoaded", function () {
  // =================== Navbar Toggle ===================
  const toggler = document.getElementById("toggler");
  const navbar = document.querySelector(".navbar");

  toggler?.addEventListener("change", function () {
    if (this.checked) {
      navbar.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    } else {
      navbar.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";
    }
  });

  // =================== Scroll To Top on Logo Click ===================
  const logo = document.querySelector(".logo");
  logo?.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // =================== Icons Interactions ===================
  const cartIcons = document.querySelectorAll(".fa-shopping-cart");
  const heartIcons = document.querySelectorAll(".fa-heart");
  const shareIcons = document.querySelectorAll(".fa-share");

  cartIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      alert("Item added to cart!");
    });
  });

  heartIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      alert("Added to wishlist!");
    });
  });

  shareIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      alert("Share this product link!");
    });
  });

  // =================== Contact Form Validation ===================
  const contactForm = document.querySelector(".contact form");
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting

    // Get form values
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    // Simple validation
    if (name === "" || email === "" || phone === "" || message === "") {
      alert("Please fill out all fields.");
      return;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Phone validation (10-digit number)
    const phonePattern = /^\d{10}$/;
    if (!phone.match(phonePattern)) {
      alert("Please enter a 10-digit phone number.");
      return;
    }

    // If all good
    alert("Thank you! Your message has been sent.");
    form.reset();
  });
});
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form from submitting

      // Get form values
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const phone = contactForm.phone.value.trim();
      const message = contactForm.message.value.trim();

      // Simple validation
      if (name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill out all fields.");
        return;
      }

      // Email validation
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Phone validation (10-digit number)
      const phonePattern = /^\d{10}$/;
      if (!phone.match(phonePattern)) {
        alert("Please enter a 10-digit phone number.");
        return;
      }

      // If all good
      alert("Thank you! Your message has been sent.");
      contactForm.reset();
    });
  }
 
  // =================== Header Scroll Effect ===================
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });
});
