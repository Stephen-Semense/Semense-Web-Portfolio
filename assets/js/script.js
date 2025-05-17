// ------------------------- NAVIGATION -------------------------

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a"); 

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 500; 
    if (scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

// ---------------------------- TEXT HOME --------------------------
window.onload = function () {
  console.log("Window loaded, initializing Typed.js...");
  setTimeout(function () {
    var typed = new Typed(".text", {
      strings: ["Web Developer", "Frontend Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
    console.log("Typed instance created:", typed);
  }, 500);
};

/* --------------------------------------- CONTACT ME ------------------------------------------ */
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("CPlN7Ep0UfdrE386J");

  function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours}:${minutes}`;
  }

  document.getElementById("message-time").value = getCurrentTime();

  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_0gyk09r", "template_ukf8pdo", form).then(
      function () {
        alert("Message sent successfully!");
        form.reset();
      },
      function (error) {
        alert("Failed to send message. Please try again.");
      }
    );
  });
});
