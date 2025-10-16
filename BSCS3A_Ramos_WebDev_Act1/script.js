const currentPage = window.location.pathname.split("/").pop();
const tabs = document.querySelectorAll("nav a");

tabs.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }

  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.style.opacity = "0";
    setTimeout(() => {
      window.location.href = link.href;
    }, 300);
  });
});

window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});
