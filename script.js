/* ==========================================================================
   Fase 3: Interaktivitas (JavaScript)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  // --- Fungsionalitas Hamburger Menu ---
  const hamburgerBtn = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector("#main-nav");

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", function () {
      // Toggle class 'is-active' pada menu navigasi dan tombol hamburger
      navMenu.classList.toggle("is-active");
      this.classList.toggle("is-active");
    });
  }

  // --- (Opsional) Efek Shadow pada Header saat Scroll ---
  const header = document.querySelector("#main-header");
  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        // Jika scroll lebih dari 50px
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }
});
