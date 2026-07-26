// const menuButton = document.querySelector("#menuBtn");
// const navigation = document.querySelector("#navLinks");

// menuButton.addEventListener("click", () => {
//   const isOpen = navigation.classList.toggle("open");
//   menuButton.setAttribute("aria-expanded", isOpen);
// });

// navigation.querySelectorAll("a").forEach((link) => {
//   link.addEventListener("click", () => {
//     navigation.classList.remove("open");
//     menuButton.setAttribute("aria-expanded", "false");
//   });
// });

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

// const courseTabs = document.querySelectorAll("[data-course]");
// const coursePanels = document.querySelectorAll(".course-panel");

// courseTabs.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     courseTabs.forEach((button) => {
//       button.classList.remove("active");
//       button.setAttribute("aria-selected", "false");
//     });

//     coursePanels.forEach((panel) => {
//       panel.hidden = true;
//     });

//     tab.classList.add("active");
//     tab.setAttribute("aria-selected", "true");
//     document.querySelector(`#${tab.dataset.course}`).hidden = false;
//   });
// });
// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.onclick = function () {
  navLinks.classList.toggle("open");

  const menuOpen = navLinks.classList.contains("open");
  menuBtn.setAttribute("aria-expanded", menuOpen);
};

// Link click karne par mobile menu close
document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.onclick = function () {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  };
});

// Course tabs
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".course-panel");

tabs.forEach(function (tab) {
  tab.onclick = function () {
    tabs.forEach(function (button) {
      button.classList.remove("active");
      button.setAttribute("aria-selected", "false");
    });

    panels.forEach(function (panel) {
      panel.hidden = true;
    });

    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    const selectedPanel = document.getElementById(
      tab.getAttribute("data-course")
    );

    selectedPanel.hidden = false;
  };
});