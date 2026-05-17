const grid = document.getElementById("projects-grid");
const tabs = document.querySelectorAll(".tab");

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".main-nav--link");
  navLinks.forEach((link) => {
    if (
      link.getAttribute("href") === currentPage ||
      (currentPage === "" && link.getAttribute("href") === "index.html")
    ) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch("mail.php", {
        method: "POST",
        body: formData,
      });

      const text = await response.text();
      message.textContent = text;
      message.style.color = response.ok ? "green" : "red";

      if (response.ok) form.reset();
    } catch (error) {
      message.textContent = "Something went wrong. Please try again.";
      message.style.color = "red";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.querySelector(".copyright-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const currentPage = location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".main-nav--link");
  navLinks.forEach((link) => {
    if (
      link.getAttribute("href") === currentPage ||
      (currentPage === "" && link.getAttribute("href") === "index.html")
    ) {
      link.classList.add("active");
    }
  });
});

const projects = [
  {
    id: 1,
    title: "Forkify Recipe App",
    description:
      "A recipe search web app that fetches real-time data from an API, allowing users to view recipes, bookmark favorites, and manage ingredients dynamically.",
    discipline: "responsive web",
    year: 2026,
    skills: [
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "API Integration",
      "async-await",
      "MVC architecture",
    ],
    image: ["img/forkify-app-img--1.png"],
    link: "https://forkify-app.eliud-muwowo.com/",
  },
  {
    id: 2,
    title: "Mapty Geo-location App",
    description:
      "Geolocation-based workout tracker with map integration and local data persistence.",
    discipline: "responsive web",
    year: 2026,
    skills: [
      "HTML",
      "CSS",
      "OOP",
      "JavaScript",
      "API Integration",
      "Event Handling",
    ],
    image: ["img/mapty-app-img--1.png"],
    link: "https://mapty-app.eliud-muwowo.com/",
  },
  {
    id: 3,
    title: "Banking App",
    description:
      "A banking simulation app that allows users to log in, transfer money, request loans, and track transactions through a dynamic interface.",
    discipline: "responsive web",
    year: 2026,
    skills: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
    image: ["img/bankist-app-img--2.png", "img/bankist-app-img--1.png"],
    link: "https://bankist-app.eliud-muwowo.com/",
  },

  {
    id: 4,
    title: "Çetinboya Website",
    description:
      "A prototype corporate website showcasing company services and products with a structured layout and professional design",
    discipline: "responsive web",
    year: 2025,
    skills: ["HTML", "CSS", "JavaScript", "Figma", "PHP"],
    image: [
      "img/cetinboya-project-img--1.png",
      "img/cetinboya-project-img--2.png",
    ],
    link: "https://cetinboya.eliud-muwowo.com/",
  },
  {
    id: 5,
    title: "Talkhub Revised Website",
    description:
      "A real-time chat application that enables user interaction through messaging, with a focus on smooth user experience and modern UI design.",
    discipline: "responsive web",
    year: 2025,
    skills: ["HTML", "CSS", "JavaScript", "Figma", "PHP"],
    image: ["img/talkhub-project-img--1.png", "img/talkhub-project-img--2.png"],
    link: "https://talkhub.eliud-muwowo.com/",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "An earlier version of my personal portfolio website showcasing projects in web development and data analysis.",
    discipline: "responsive web",
    year: 2025,
    skills: ["HTML", "CSS", "JavaScript"],
    image: ["img/portfolio-img--1.png", "img/portfolio-img--2.png"],
    link: "https://portfolio.eliud-muwowo.com/",
  },
  {
    id: 7,
    title: "Omnifood Landing Page",
    description:
      "A fully responsive landing page for a food delivery service, focused on clean design, user experience, and conversion-driven layout.",
    discipline: "responsive web",
    year: 2025,
    skills: ["HTML", "CSS", "JavaScript"],
    image: [
      "img/omnifood-project-img--1.png",
      "img/omnifood-project-img--2.png",
    ],
    link: "https://omnifood.eliud-muwowo.com/",
  },
  {
    id: 8,
    title: "Talkhub English Platform",
    description:
      "An English-focused version of the TalkHub chat platform, designed for accessibility and usability, showcasing localization and improved user communication flow.",
    discipline: "responsive web",
    year: 2025,
    skills: ["HTML", "CSS", "JavaScript", "Figma", "PHP"],
    image: ["img/talkhub-old_v--2.png", "img/talkhub-old_v--1.png"],
    link: "https://talkhub-eng.eliud-muwowo.com/",
  },
  {
    id: 9,
    title: "Pig Game Page",
    description:
      "Turn-based multiplayer dice game showcasing DOM manipulation and game state logic.",
    discipline: "responsive web",
    year: 2025,
    skills: ["HTML", "CSS", "JavaScript", "DOM Manipulation", "Event Handling"],
    image: ["img/pig-game-img--1.png"],
    link: "https://pig-game.eliud-muwowo.com/",
  },
  {
    id: 10,
    title: "Guess My Number Game",
    description:
      "Interactive number guessing game focused on user input handling and conditional logic.",
    discipline: "responsive web",
    year: 2025,
    skills: ["HTML", "CSS", "JavaScript", "DOM Manipulation", "Event Handling"],
    image: ["img/guess-game-img--1.png"],
    link: "https://guess-game.eliud-muwowo.com/",
  },

  {
    id: 11,
    title: "Bikes Sales Analytics",
    description:
      "An interactive dashboard analyzing bike sales data to highlight trends, customer insights, and key performance metrics.",
    discipline: "interactive dashboard",
    year: 2024,
    skills: [
      "Tableau",
      "KPI tracking",
      "Data visualization",
      "Data cleaning & transformation",
      "Filtering & interactivity",
    ],
    image: ["img/bikes-project-img.png"],
    link: "https://public.tableau.com/app/profile/eliud.muwowo/viz/BikeSales_17241967165680/SalesDashboard",
  },
  {
    id: 12,
    title: "Electric Vehicles Dashboard",
    description:
      "A dynamic Tableau dashboard that visualizes vehicle-related data, enabling users to explore trends, compare metrics, and uncover insights through interactive charts and filters.",
    discipline: "interactive dashboard",
    year: 2024,
    skills: [
      "Tableau",
      "Data modeling",
      "Interactive visual analytics",
      "Trend analysis",
    ],
    image: ["img/electric-vehicles-dashboard.png"],
    link: "https://public.tableau.com/app/profile/eliud.muwowo/viz/VehicleDashboard_17241071864330/Dashboard1_1",
  },
  {
    id: 13,
    title: "Transportation Sales Dashboard",
    description:
      "An interactive sales dashboard that visualizes key metrics, trends, and performance insights to support data-driven decision-making.",
    discipline: "interactive dashboard",
    year: 2024,
    skills: [
      "Tableau",
      "Data visualization",
      "KPI tracking",
      "Data analysis",
      "Filtering & interactivity",
    ],
    image: ["img/sales-project-dashhboard.png"],
    link: "https://public.tableau.com/app/profile/eliud.muwowo/viz/SalesOverview_17243244517650/SalesDashboard",
  },

  {
    id: 14,
    title: "Home Furniture Landing Page",
    description:
      "A modern e-commerce-style website showcasing furniture products with a clean layout, intuitive navigation, and responsive design",
    discipline: "responsive web",
    year: 2024,
    skills: ["HTML", "CSS", "Flexbox & Grid"],
    image: ["img/furniture-page-img-1.png", "img/furniture-page-img-2.png"],
    link: "https://furniture-shop.eliud-muwowo.com/",
  },
];

if (grid) {
  let activeTab = "all";
  let activeProjectId = null;

  function getFilteredProjects() {
    if (activeTab === "all") return projects;
    return projects.filter((proj) => proj.discipline === activeTab);
  }

  function counter() {
    const projectCount = document.getElementById("project-count");
    const disciplineCount = document.getElementById("discipline-count");

    if (projectCount) projectCount.textContent = projects.length;
    if (disciplineCount)
      disciplineCount.textContent =
        new Set(projects.flatMap((p) => p.skills)).size + "+";
  }

  function renderProjects(resetActive = false) {
    const filtered = getFilteredProjects();

    if (resetActive) {
      activeProjectId = filtered[0]?.id ?? null;
    }

    counter();

    grid.replaceChildren();

    filtered.forEach((p) => {
      const html = `<div class="project-cards ${p.id === activeProjectId ? "active" : ""}" data-id="${p.id}">
                          

                    <div class="project-imgs ${p.image.length === 1 ? "single-img" : "multi-img"}" data-discipline="${p.discipline}"> 
                    <a href="${p.link}" target="_blank" class="project-visit">
                      ${p.image
                        .map((img) => `<img src="${img}" alt="${p.title}" />`)
                        .join("")}
                    </div>



                   <div class="project-card-details">
                      <span class="project-name">${p.title}</span>
                      <span class="project-description">
                      ${p.description}
                      </span>
                      <p class="project-type-time">
                        <span class="project-description"
                        >${p.discipline}</span
                        >
                        <span class="project-year"> &middot; ${p.year}</span>
                      </p>

                      <p class="project-tags">
                      ${p.skills.map((s) => `<span class="tag">${s}</span>`).join("")}
                      </p>
                      
                    </div>
                    </a>
            </div>`;

      grid.insertAdjacentHTML("beforeend", html);
    });

    document.querySelectorAll(".project-cards").forEach((card) => {
      card.addEventListener("click", () => {
        activeProjectId = +card.dataset.id;
        renderProjects();
      });
    });
    counter();
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      activeTab = tab.dataset.filter;
      renderProjects(true);
    });
  });

  renderProjects();
}
