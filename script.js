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
  preview.innerHTML = "";

  if (file) {
    if (file.type.startsWith("image/")) {
      const img = document.createElement("img");
      img.src = URL.createObjectURL(file);
      img.style.maxWidth = "300px";
      img.style.marginTop = "10px";
      preview.appendChild(img);
    } else if (file.type === "application/pdf") {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(file);
      link.textContent = "View Certificate (PDF)";
      link.target = "_blank";
      preview.appendChild(link);
    } else {
      preview.textContent = "Unsupported file format!";
    }
  }
});
