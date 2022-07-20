// Navigation
const hambugerMenu = document.querySelector(".hambuger");

const navMenu = document.querySelector(".nav-menu");

const navLinks = document.querySelectorAll(".nav-link");

// Toggle the menu
hambugerMenu.addEventListener("click", () => {
  hambugerMenu.classList.toggle("active");

  navMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hambugerMenu.classList.remove("active");

    navMenu.classList.remove("active");
  });
});

const projects = [
  {
    id: 1,
    name: "Tonic",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, ",
    image: "../images/work-image1.png",
    technologies: ["html", "css", "JavaScript"],
    link: "https://github.com/Ukaypromise/Personal-Portfolio",
    source: "https://github.com/Ukaypromise/Personal-Portfolio",
  },
  {
    id: 2,
    name: "Multi-Post Stories",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: "../images/work-image2.png",
    technologies: ["html", "css", "JavaScript"],
    link: "https://github.com/Ukaypromise/Personal-Portfolio",
    source: "https://github.com/Ukaypromise/Personal-Portfolio",
  },
  {
    id: 3,
    name: "Facebook 360",
    description:
      " Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: "../images/work-image3.png",
    technologies: ["html", "css", "JavaScript"],
    link: "https://github.com/Ukaypromise/Personal-Portfolio",
    source: "https://github.com/Ukaypromise/Personal-Portfolio",
  },
  {
    id: 4,
    name: "Uber Navigation",
    description:
      "Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled.",
    image: "../images/work-img4.png",
    technologies: ["html", "css", "JavaScript"],
    link: "https://github.com/Ukaypromise/Personal-Portfolio",
    source: "https://github.com/Ukaypromise/Personal-Portfolio",
  },
];

const title = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const modalDesc = document.getElementById("modal-desc");
const live = document.getElementById("modal-see-live");
const source = document.getElementById("modal-see-source");
// Modal

const modal = document.querySelector(".modal");

const openModal = document.querySelector("#btn-4");

const closeModalBtn = document.querySelector(".btn-x");

const modalContent = document.querySelector(".modal-container");

// Modal Pop-up

// openModal.forEach((btn) => {
//   console.log(btn);
//   btn.addEventListener("click", () => {
//     modalContent.style.display = "block";
//     console.log("Hello");
//   });
// });

openModal.addEventListener("click", () => {
  modalContent.style.display = "block";
  console.log("Hello");
});

closeModalBtn.addEventListener("click", () => {
  modalContent.style.display = "none";
});

modalContent.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-container")) {
    modalContent.style.display = "none";
  }
});

const workSection = document.querySelector(".work-section");
window.addEventListener("DOMContentLoaded", () => {
  let displayCards = projects.map((project) => {
    return `
      <div id=${project.id} >
        <div class="work-info1">
            <div class="image-container">
              <img
                src=${project.image}
                alt="multi-post work content2"
                class="work-img"
              />
            </div>
            <div class="content1">
              <h3 class="work-title">
                ${project.name}
              </h3>
              <h4>
                CANOPY <span class="dot tag"> Back End dev </span>
                <span class="dot tag">2015</span>
              </h4>
              <p class="title-description">
              ${project.description}
              </p>
              <ul class="stack-group">
              ${project.technologies
                .map((tech) => `<li class="stack">${tech}</li>`)
                .join("")}
              </ul>
              <button ${
                projects.id
              } type="button" class="btn" id="btn-4">See Project</button>
            </div>
          </div>
      </div>`;
  });

  displayCards = displayCards.join("");
  workSection.innerHTML = displayCards;
});
