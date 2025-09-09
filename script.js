// Dark mode toggle
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});

// Certificate upload preview
const uploadCert = document.getElementById("uploadCert");
const certPreview = document.getElementById("certPreview");

uploadCert.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        certPreview.innerHTML = `<img src="${e.target.result}" alt="Certificate" style="max-width:300px; margin-top:10px;">`;
      };
      reader.readAsDataURL(file);
    } else {
      certPreview.innerHTML = `<p>📄 ${file.name} uploaded</p>`;
    }
  }
});
