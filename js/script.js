const text = document.getElementById("autoText");
    const colors = ["#16a34a", "#00bcd4", "#ff4081", "#ffc107", "#8e44ad", "#e91e63", "#fff", "rgb(0, 129, 20)", "#000000", "red"];

    setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      text.style.color = randomColor;
    }, 1000); // badilisha kila sekunde 1

    // Mobile menu toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navbarMobile = document.getElementById("navbar-mobile");

    menuToggle.addEventListener("click", () => {
      navbarMobile.classList.toggle("open");
      if (navbarMobile.classList.contains("open")) {
        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      } else {
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }
    });

    // Mobile submenu toggle
    document.querySelectorAll(".submenu-toggle").forEach(toggle => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const parent = toggle.parentElement;
        parent.classList.toggle("open");
      });
    });