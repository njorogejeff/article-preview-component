const authorShareBtn = document.getElementById("author-share");
const socialShareBtn = document.getElementById("social-share");
const authorSection = document.querySelector(
  "section.avatar-socials-section section:first-child",
);
const socialSection = document.querySelector(
  "section.avatar-socials-section section:last-child",
);

function toggleSections() {
  authorSection.classList.toggle("invisible");
  socialSection.classList.toggle("invisible");
}

authorShareBtn.addEventListener("click", toggleSections);
socialShareBtn.addEventListener("click", toggleSections);
