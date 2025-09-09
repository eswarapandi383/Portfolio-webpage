// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  this.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Show Contact Info
function showContact() {
  const contactInfo = document.getElementById("contact-info");
  contactInfo.style.display = contactInfo.style.display === "none" ? "block" : "none";
}

// IBM Certificate Upload Preview
document.getElementById("uploadCert").addEventListener("change", function (event) {
  const file = event.target.files[0];
  const preview = document.getElementById("certPreview");

  if (file) {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = function (e) {
        preview.innerHTML = `<img src="${e.target.result}" alt="Certificate Preview" style="max-width: 300px; margin-top:10px; border: 2px solid #4CAF50; border-radius: 10px;">`;
      };
      reader.readAsDataURL(file);
    } else if (file.type === "application/pdf") {
      preview.innerHTML = `<p style="color: #4CAF50; font-weight: bold; margin-top:10px;">📄 PDF Certificate Uploaded: ${file.name}</p>`;
    } else {
      preview.innerHTML = `<p style="color:red;">Invalid file type. Please upload an image or PDF.</p>`;
    }
  } else {
    preview.innerHTML = "";
  }
});
