/* ==========================================================================
   Fase 3: Interaktivitas (JavaScript)
   ========================================================================== */

// Menunggu sampai seluruh halaman HTML selesai dimuat
document.addEventListener("DOMContentLoaded", function () {

  /**
   * Fungsi untuk memuat dan menyuntikkan komponen HTML secara asinkron.
   * Menggunakan 'async' agar kita bisa 'await' (menunggu) hasilnya.
   */
  async function loadComponent(url, elementId) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Gagal memuat ${url}: Status ${response.status}`);
      }
      const htmlText = await response.text();
      const element = document.getElementById(elementId);
      if (element) {
        element.innerHTML = htmlText;
      } else {
        console.warn(`Elemen dengan ID '${elementId}' tidak ditemukan.`);
      }
    } catch (error) {
      console.error('Error memuat komponen:', error);
      const element = document.getElementById(elementId);
      if (element) {
        element.innerHTML = `<p style="color:red;">Gagal memuat ${elementId}.</p>`;
      }
    }
  }

  /**
   * Fungsi 'main' untuk mengatur alur:
   * 1. Muat komponen.
   * 2. SETELAH komponen dimuat, pasang event listener.
   */
  async function initializePage() {
    // --- 1. Muat Komponen Utama ---
    // Kita 'await' (menunggu) sampai header dan footer selesai dimuat
    await loadComponent('header.html', 'header-placeholder');
    await loadComponent('footer.html', 'footer-placeholder');

    // --- 2. Pasang Event Listener (SETELAH header dimuat) ---
    // Kode ini dijamin berjalan SETELAH header.html ada di halaman.

    // --- Fungsionalitas Hamburger Menu ---
    const hamburgerBtn = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector("#main-nav");

    if (hamburgerBtn && navMenu) {
      hamburgerBtn.addEventListener("click", function () {
        navMenu.classList.toggle("is-active");
        this.classList.toggle("is-active");
      });
    } else {
      console.warn("Elemen hamburger atau nav menu tidak ditemukan.");
    }

    // --- (Opsional) Efek Shadow pada Header saat Scroll ---
    const header = document.querySelector("#main-header");
    if (header) {
      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });
    } else {
      console.warn("Elemen header (#main-header) tidak ditemukan.");
    }
  }

  // --- Jalankan fungsi utama ---
  initializePage();

});