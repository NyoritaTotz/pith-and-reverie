const scrollTopBtn = document.getElementById("scrollTopBtn");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Show/hide scroll-to-top button
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

// Smooth scroll to top
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Toggle mobile nav menu
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.setAttribute("aria-expanded", navLinks.classList.contains("show"));
});

// Close menu when a nav link is clicked (mobile)
document.querySelectorAll("#navLinks a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

// Auto-generate TOC from .post1 sections
document.addEventListener("DOMContentLoaded", function () {
  const tocContainer = document.getElementById("toc");
  const posts = document.querySelectorAll(".post1");
  if (!tocContainer || posts.length === 0) return;

  let tocHTML = "<h4>Jump to Note:</h4><ul>";

  posts.forEach((post) => {
    const heading = post.querySelector("h3");
    const id = post.getAttribute("id");

    if (heading && id) {
      tocHTML += `<li><a href="#${id}">${heading.textContent}</a></li>`;
    }
  });

  tocHTML += "</ul>";
  tocContainer.innerHTML = tocHTML;
});