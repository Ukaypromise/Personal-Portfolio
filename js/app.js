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
    name: "Awesome Books",
    description:
      '"Awesome books" is a simple website that displays a list of books and allows you to add and remove books from that list. This Project will manage book collection using plain JS with objects. ',
    image: "../images/awesome.png",
    technologies: ["html", "css", "JavaScript"],
    link: "https://awesomebooks-keeper.netlify.app/",
    source: "https://github.com/Ukaypromise/awesome-book",
  },
  {
    id: 2,
    name: "Maths Magicians",
    description:
      "Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.",
    image: "../images/math.png",
    technologies: ["html", "css", "JavaScript", "React"],
    link: "https://mathy-calculator.netlify.app/",
    source: "https://github.com/Ukaypromise/Math-Magician",
  },
  {
    id: 3,
    name: "WeeCode",
    description:
      " A website for a web development courseA website for a web development course. The project was built with vanilla javascript. Most of the content was rendered dynamically by manipulating the DOM. CSS animations was also used to improve the user experience of the application.",
    image: "../images/wecode.png",
    technologies: ["html", "css", "JavaScript"],
    link: "https://ukaypromise.github.io/capstone-wecode/",
    source: "https://github.com/Ukaypromise/capstone-wecode",
  },
  {
    id: 4,
    name: "Crypto Master",
    description:
      "This is a capstone for the Microverse Module 3 (React-Redux) project. React, Redux/Toolkit, and React Linters were used in its construction to enforce best practices for react code. The Project aims to retrieve API data, display cryptocurrency, and query API endpoints for data related to market listings for coins.",
    image: "../images/crypto.png",
    technologies: ["React", "Redux", "Styled Components"],
    link: "https://6341fe57ccdf94192b341a50--endearing-bonbon-930883.netlify.app/",
    source: "https://github.com/Ukaypromise/react-capstone",
  },
  {
    id: 5,
    name: "Bookstore",
    description:
      "Bookstore is a web application built with React. It is a Single Page Application (SPA) that allows users to add books, categorise them, and delete books. The project is built using React and Redux.",
    image: "../images/bookstore.png",
    technologies: ["JavaScript", "React", "Redux", "Webpack", "Jest"],
    link: "https://github.com/Ukaypromise/bookstore",
    source: "https://github.com/Ukaypromise/bookstore",
  },
  {
    id: 6,
    name: "Todo App",
    description:
      "This is a scheduler or a todo app built with react. With this app, you can add, edit, and delete tasks.",
    image: "../images/todo.png",
    technologies: ["html", "css", "JavaScript", "React"],
    link: "https://phenomenal-cendol-d1ddf8.netlify.app/",
    source: "https://github.com/Ukaypromise/scheduler-app",
  },
  {
    id: 7,
    name: "Food App",
    description:
      "The FoodMD is a web application that has a list of foods and recipes to prepare them. The web application was built based on two APi's, which are the Meals DB and the Involvement API. The web app makes APi call to render a list of meals and also make another API call when a user likes or comment.",
    image: "../images/food.png",
    technologies: ["html", "css", "JavaScript"],
    link: "https://capable-tarsier-080db1.netlify.app/",
    source: "https://github.com/Ukaypromise/FoodMD",
  },
  {
    id: 8,
    name: "Leader Board",
    description:
      "Leaderboard list app, using webpack and ES6 modules. The projeect consume the Leaderboard API using JavaScript async and await methods.",
    image: "../images/leader-board.png",
    technologies: ["html", "css", "JavaScript"],
    link: "https://serene-otter-7f83bc.netlify.app/",
    source: "https://github.com/Ukaypromise/Leaderboard",
  },
  {
    id: 9,
    name: "Budget App",
    description:
      "Mmefu Ego(Budget App) is a web application where you can manage your budget. You have a list of transactions associated with a category, so that you can see how much money you spent and on what. Users can signin and add categories of budget and the expenses for their budgets with this application.",
    image: "../images/budget.png",
    technologies: ["Bootstrap", "Ruby on Rails", "PostgreSQL", "RSpec"],
    link: "https://serene-otter-7f83bc.netlify.app/",
    source: "https://github.com/Ukaypromise/mmefu-ego-app",
  },
  {
    id: 10,
    name: "Recipe App",
    description:
      "Mmefu Ego(Budget App) is a web application where you can manage your budget. You have a list of transactions associated with a category, so that you can see how much money you spent and on what. Users can signin and add categories of budget and the expenses for their budgets with this application.",
    image: "../images/recipe.png",
    technologies: ["Bootstrap", "Ruby on Rails", "PostgreSQL", "RSpec"],
    link: "https://github.com/Ukaypromise/Recipe-app",
    source: "https://github.com/Ukaypromise/Recipe-app",
  },
  {
    id: 11,
    name: "Tesla clone",
    description:
      "This is a clone of the Tesla website. It is a single page application built with React and Redux. The project is built using React and Redux.",
    image: "../images/tesla.png",
    technologies: ["Styled-component", "Reactjs", "Redux"],
    link: "https://devpromiseuka-tesla-clone.netlify.app/",
    source: "https://github.com/Ukaypromise/My-Tesla-Clone",
  },
  {
    id: 12,
    name: "AltSchool Clone",
    description:
      "This is a clone of the Altschool Africa website. It is a single page application built with HTML and CSS.",
    image: "../images/alt.png",
    technologies: ["HTML5", "CSS3"],
    link: "https://glistening-brigadeiros-3a25f4.netlify.app/",
    source: "https://github.com/Ukaypromise/AltSchool-Landing-Page/",
  },
];

const onModalOpen = async (id) => {
  const getData = await projects.find((project) => project.id === id);

  const modal = document.querySelector(".modal-container");
  modal.style.display = "block";
  document.getElementById("modal-title").innerHTML = getData.name;
  document.getElementById("modal-desc").innerHTML = getData.description;
  document.getElementById("modal-img").src = getData.image;
  document.getElementById("modal-see-live").href = getData.link;
  document.getElementById("modal-see-source").href = getData.source;

  document.getElementById("group-list").innerHTML = getData.technologies
    .map((tech) => `<li class="stack">${tech}</li>`)
    .join("");
};
const p = onModalOpen;

const onModalClose = () => {
  const modal = document.querySelector(".modal-container");
  modal.style.display = "none";
};
onModalClose(p);

window.addEventListener("DOMContentLoaded", () => {
  const displayCards = projects.map(
    (project) => `
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
              <p class="title-description">
              ${project.description}
              </p>
              <ul class="stack-group">
              ${project.technologies
                .map((tech) => `<li class="stack">${tech}</li>`)
                .join("")}
              </ul>
              <button id=${project.id} type="button" onclick="onModalOpen(${
      project.id
    })" class="btn" id="btn-4">See Project</button>
            </div>
          </div> 
      </div>`
  );
  document.getElementById("cards").innerHTML = displayCards.join("");
});

// Form Validation
const form = document.getElementById("form");

const INVALID_EMAIL =
  "Oops!, failed to send. Take in account your email should be in lowercase e.g promise@gmail.com";

function showMessage(input, message, type) {
  document.querySelector("small").innerText = message;
  input.className = type ? "success" : "error";
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, "", true);
}

function emailValidation(input, invalidMsg) {
  const email = input.value.trim();
  if (email !== email.toLowerCase()) {
    return showError(input, invalidMsg);
  }
  showSuccess(input);
  return true;
}


// Accordion
var acc = document.getElementsByClassName("dev-stack");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


// Preserve Data In-Browser
const username = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
let user;
function saveData() {
  user = {
    name: "",
    email: "",
    message: "",
  };
  user.name = username.value;
  user.email = email.value;
  user.message = message.value;
  localStorage.setItem("usermessage", JSON.stringify(user));
}
username.onchange = saveData;
email.onchange = saveData;
message.onchange = saveData;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValid = emailValidation(form.elements.email, INVALID_EMAIL);
  if (emailValid) {
    localStorage.setItem("usermessage", JSON.stringify(user));
    form.submit();
  }
});

// Preserve input data with reload or refresh
window.addEventListener("load", () => {
  user = JSON.parse(localStorage.getItem("usermessage"));
  if (user) {
    username.value = user.name;
    email.value = user.email;
    message.value = user.message;
  }
});
