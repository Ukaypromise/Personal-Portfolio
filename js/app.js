const projects = [
  {
    name: "Tonic",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: "./images/card1.svg",
    technologies: ["html", "css", "JavaScript"],
    link: "https://www.tripadvisor.co/Attractions-g652402-Activities-Manizales_Caldas_Department.html",
    source: "https://github.com/robinbenitezmora/Portfolio-Robin-Benitez",
  },
  {
    name: "Multi-Post Stories",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: "./images/card2.svg",
    technologies: ["html", "css", "JavaScript"],
    link: "https://www.tripadvisor.co/Attractions-g652402-Activities-Manizales_Caldas_Department.html",
    source: "https://github.com/robinbenitezmora/Portfolio-Robin-Benitez",
  },
  {
    name: "Facebook 360",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: "./images/card3.svg",
    technologies: ["html", "css", "JavaScript"],
    link: "https://www.tripadvisor.co/Attractions-g652402-Activities-Manizales_Caldas_Department.html",
    source: "https://github.com/robinbenitezmora/Portfolio-Robin-Benitez",
  },
  {
    name: "Uber Navigation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.",
    image: "./images/card4.svg",
    technologies: ["html", "css", "JavaScript"],
    link: "https://www.tripadvisor.co/Attractions-g652402-Activities-Manizales_Caldas_Department.html",
    source: "https://github.com/robinbenitezmora/Portfolio-Robin-Benitez",
  },
];

const popup = document.getElementById("modal");
const detailTitle = document.getElementById("modal-title");
const detailDescription = document.getElementById("modal-description");
const detailLanguajes = document.getElementById("modal-technologies");
const btnDetailLive = document.getElementById("modal-see-live");
const btnDetailSource = document.getElementById("modal-see-source");
const detailImage = document.getElementById("detailImage");

// Navigation
const hambugerMenu = document.querySelector(".hambuger");

const navMenu = document.querySelector(".nav-menu");

const navLinks = document.querySelectorAll(".nav-link");
// Modal
const modal = document.querySelector(".modal-container");

const closeModal = document.querySelector(".btn-x");

const btnWork = document.querySelector("#btn-4");

// const modalContainer = document.querySelector(".container");

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

// Modal Pop-up

btnWork.addEventListener("click", () => {
  modal.style.display = "block";
  // modalContainer.style.filter = "blur(10px)";
  
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-container")) {
    modal.style.display = "none";
  }
});