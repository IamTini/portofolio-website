// Inisialisasi Animasi Scroll (AOS)
AOS.init({ 
    once: true,
    duration: 800
});

/**
 * Fungsi untuk membuka modal gambar sertifikat
 * @param {string} imgSrc - URL sumber gambar
 */
function openModal(imgSrc) {
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('modalImg');
    
    modal.classList.remove('hidden');
    modalImg.src = imgSrc;
    
    // Nonaktifkan scroll pada body saat modal terbuka
    document.body.style.overflow = 'hidden'; 
}

/**
 * Fungsi untuk menutup modal
 */
function closeModal() {
    const modal = document.getElementById('certModal');
    modal.classList.add('hidden');
    
    // Aktifkan kembali scroll pada body
    document.body.style.overflow = 'auto'; 
}

// Tutup modal secara otomatis jika pengguna mengklik area di luar gambar (overlay)
window.onclick = function(event) {
    const modal = document.getElementById('certModal');
    if (event.target == modal) { 
        closeModal(); 
    }
}

// Menangani penutupan modal dengan tombol 'Escape'
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});