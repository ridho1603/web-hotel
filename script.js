  function openModal() {
    const modal = document.getElementById("bookingModal");
    modal.classList.remove("hidden");
    setTimeout(() => {
      modal.classList.remove("opacity-0", "scale-95");
      modal.classList.add("opacity-100", "scale-100");
    }, 10); // delay kecil agar transisi berjalan
  }

  function closeModal() {
    const modal = document.getElementById("bookingModal");
    modal.classList.remove("opacity-100", "scale-100");
    modal.classList.add("opacity-0", "scale-95");
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 300); // sesuai durasi transition
  }

  // Tutup modal kalau klik area luar konten
  document.getElementById("bookingModal").addEventListener("click", function(e) {
    if (e.target.id === "bookingModal") {
      closeModal();
    }
  });
