// Simple alert when user clicks on avatar
document.querySelectorAll('.avatar').forEach((avatar) => {
  avatar.addEventListener('click', () => {
    alert('Halo! Saya adalah AI Himaru.');
  });
});
// Menambahkan aksi tombol untuk mengarahkan ke website AI Himaru
document.getElementById('use-ai-btn').addEventListener('click', function() {
  window.location.href = "ai.html"; // Ganti dengan URL AI Himaru Anda
});
