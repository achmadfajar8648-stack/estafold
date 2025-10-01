// Slider 1 (sudah ada)
const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let scrollAmount = 0;
const scrollPerClick = 220;

nextBtn.addEventListener("click", () => {
  slider.scrollBy({ left: scrollPerClick, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -scrollPerClick, behavior: "smooth" });
});

// Slider 2 (baru ditambahkan)
const slider2 = document.getElementById("slider2");
const prevBtn2 = document.getElementById("prevBtn2");
const nextBtn2 = document.getElementById("nextBtn2");

nextBtn2.addEventListener("click", () => {
  slider2.scrollBy({ left: scrollPerClick, behavior: "smooth" });
});

prevBtn2.addEventListener("click", () => {
  slider2.scrollBy({ left: -scrollPerClick, behavior: "smooth" });
});

// Slider 3 (baru ditambahkan)
const slider3 = document.getElementById("slider3");
const prevBtn3 = document.getElementById("prevBtn3");
const nextBtn3 = document.getElementById("nextBtn3");

nextBtn3.addEventListener("click", () => {
  slider3.scrollBy({ left: scrollPerClick, behavior: "smooth" });
});

prevBtn3.addEventListener("click", () => {
  slider3.scrollBy({ left: -scrollPerClick, behavior: "smooth" });
});

const animItems = document.querySelectorAll('[data-animate]');
window.addEventListener('scroll', () => {
  animItems.forEach(item => {
    if (item.getBoundingClientRect().top < window.innerHeight - 50) {
      item.classList.add('active');
    }
  });
});

// Slider 4 (baru ditambahkan)
const slider4 = document.getElementById("slider4");
const prevBtn4 = document.getElementById("prevBtn4");
const nextBtn4 = document.getElementById("nextBtn4");

nextBtn4.addEventListener("click", () => {
  slider4.scrollBy({ left: scrollPerClick, behavior: "smooth" });
});

prevBtn4.addEventListener("click", () => {
  slider4.scrollBy({ left: -scrollPerClick, behavior: "smooth" });
});



// Lightbox untuk Gallery
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

// Ambil semua gambar di gallery
const galleryImgs = document.querySelectorAll(".gallery-grid img");

// Saat gambar diklik → buka modal
galleryImgs.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src; // isi gambar modal
  });
});

// Saat tombol close diklik → tutup modal
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Tutup modal jika klik area luar gambar
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});


let slideIndex = 0; // Variabel untuk menyimpan index slide aktif (dimulai dari 0)
showSlides();       // Jalankan fungsi pertama kali

function showSlides() {
  const slides = document.querySelectorAll(".slides"); // Ambil semua elemen dengan class "slides"
  slides.forEach(s => s.style.display = "none");       // Sembunyikan semua slide

  slideIndex++;                                        // Geser index ke slide berikutnya
  if (slideIndex > slides.length) { slideIndex = 1 }   // Jika sudah di akhir, balik ke slide pertama

  slides[slideIndex-1].style.display = "block";        // Tampilkan slide sesuai index aktif

  setTimeout(showSlides, 4000); // Ulangi fungsi tiap 3 detik → otomatis ganti slide
}

function plusSlides(n) {
  slideIndex += n - 1; // Tambah/kurangi index manual (tombol next/prev)
  showSlides();        // Tampilkan slide sesuai index baru
}
