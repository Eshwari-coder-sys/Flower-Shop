// ✅ ✅ CHECK LOGIN IMMEDIATELY BEFORE PAGE LOAD
const isLoggedIn = localStorage.getItem("loggedIn");
const currentPage = window.location.pathname.split("/").pop();
const allowedPages = ["signup.html", "login.html"];

// 🚫 Redirect to signup if not logged in and not on allowed page
if (!isLoggedIn && !allowedPages.includes(currentPage)) {
  alert("🔐 Please sign up or log in first.");
  window.location.href ="{{ url_for('signup') }}";
}

// ✅ NOW DOMContentLoaded CAN SAFELY RUN
document.addEventListener("DOMContentLoaded", function () {
  // ✅ Hash-based section restriction
  const restrictedSections = ["#products", "#review", "#contact"];
  const currentHash = window.location.hash;
  if (!isLoggedIn && restrictedSections.includes(currentHash)) {
    alert("🚫 You must log in to access this section.");
    window.location.href = "signup.html";
    return;
  }

  // ✅ Navbar toggle
  const toggler = document.getElementById("toggler");
  const navbar = document.querySelector(".navbar");
  toggler?.addEventListener("change", function () {
    navbar.style.clipPath = this.checked
      ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
      : "polygon(0 0, 100% 0, 100% 0, 0 0)";
  });

  //Scroll to top on logo click
  document.querySelector(".logo")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ✅ Add to Cart
  const cartButtons = document.querySelectorAll(".icons .btn");
  cartButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const item = {
        name: "Flower Pot",
        price: 12.99,
      };
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("✅ Item added to cart!");
      updateCounts();
    });
  });

  // ✅ Add to Wishlist
  const wishlistIcons = document.querySelectorAll(".icons .fa-heart");
wishlistIcons.forEach((icon) => {
  icon.addEventListener("click", function (e) {
    e.preventDefault();
    const item = {
      name: "Flower Pot" // or dynamically get product name
    };

    fetch("/add_to_wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        icon.classList.toggle("active");
      })
      .catch(() => alert("Added to wishlist!"));
  });
});


  // ✅ Add to Share
  const shareIcons = document.querySelectorAll(".icons .fa-share");
  shareIcons.forEach((icon) => {
    icon.addEventListener("click", function (e) {
      e.preventDefault();
      alert("🔗 Share this product!");
    });
  });

  // ✅ Logout logic
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("cart");
      localStorage.removeItem("wishlist");
      alert("👋 You have been logged out.");
      window.location.href = "signup.html"; // Redirect to signup page
    });
  }

  // ✅ Contact form validation
  const contactForm = document.querySelector("#contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const phone = contactForm.phone.value.trim();
      const message = contactForm.message.value.trim();

      if (!name || !email || !phone || !message) {
        alert("⚠️ Fill all fields.");
        return;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      const phonePattern = /^\d{10}$/;

      if (!email.match(emailPattern)) {
        alert("⚠️ Enter a valid email.");
        return;
      }

      if (!phone.match(phonePattern)) {
        alert("⚠️ Enter a 10-digit phone number.");
        return;
      }

      alert("✅ Thank you! Your message has been sent.");
      contactForm.reset();
    });
  }

  // ✅ Header scroll effect
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });

  // ✅ Smooth scroll for anchor links
  if (isLoggedIn) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  // ✅ Initial Count Display
  updateCounts();
});

