// Navigation
const hambugerMenu = document.querySelector('.hambuger');

const navMenu = document.querySelector('.nav-menu');

const navLinks = document.querySelectorAll('.nav-link');

// Toggle the menu
hambugerMenu.addEventListener('click', () => {
  hambugerMenu.classList.toggle('active');

  navMenu.classList.toggle('active');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hambugerMenu.classList.remove('active');

    navMenu.classList.remove('active');
  });
});

const projects = [
  {
    id: 1,
    name: 'Tonic',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard  ',
    image: '../images/work-image1.png',
    technologies: ['html', 'css', 'JavaScript'],
    link: 'https://github.com/Ukaypromise/Personal-Portfolio',
    source: 'https://github.com/Ukaypromise/Personal-Portfolio',
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the1500, when an unknown printer took a galley of type and scrambled it 1960s.',
    image: '../images/work-image2.png',
    technologies: ['html', 'css', 'JavaScript'],
    link: 'https://github.com/Ukaypromise/Personal-Portfolio',
    source: 'https://github.com/Ukaypromise/Personal-Portfolio',
  },
  {
    id: 3,
    name: 'Facebook 360',
    description:
      ' Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. scrambled it 1960s with the relea',
    image: '../images/work-image3.png',
    technologies: ['html', 'css', 'JavaScript'],
    link: 'https://github.com/Ukaypromise/Personal-Portfolio',
    source: 'https://github.com/Ukaypromise/Personal-Portfolio',
  },
  {
    id: 4,
    name: 'Uber Navigation',
    description:
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley.',
    image: '../images/work-img4.png',
    technologies: ['html', 'css', 'JavaScript'],
    link: 'https://github.com/Ukaypromise/Personal-Portfolio',
    source: 'https://github.com/Ukaypromise/Personal-Portfolio',
  },
];

const onModalOpen = async (id) => {
  const getData = await projects.find((project) => project.id === id);

  const modal = document.querySelector('.modal-container');
  modal.style.display = 'block';
  document.getElementById('modal-title').innerHTML = getData.name;
  document.getElementById('modal-desc').innerHTML = getData.description;
  document.getElementById('modal-img').src = getData.image;
  document.getElementById('modal-see-live').src = getData.link;
  document.getElementById('modal-see-source').src = getData.source;

  document.getElementById('group-list').innerHTML = getData.technologies
    .map((tech) => `<li class="stack">${tech}</li>`)
    .join('');
};
const p = onModalOpen;

const onModalClose = () => {
  const modal = document.querySelector('.modal-container');
  modal.style.display = 'none';
};
onModalClose(p);

window.addEventListener('DOMContentLoaded', () => {
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
    .join('')}
              </ul>
              <button id=${project.id} type="button" onclick="onModalOpen(${
  project.id
})" class="btn" id="btn-4">See Project</button>
            </div>
          </div> 
      </div>`,
  );
  document.getElementById('cards').innerHTML = displayCards.join('');
});

// Form Validation
const form = document.getElementById('form');

const INVALID_EMAIL = 'Oops!, failed to send. Take in account your email should be in lowercase e.g promise@gmail.com';

function showMessage(input, message, type) {
  document.querySelector('small').innerText = message;
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function emailValidation(input, invalidMsg) {
  const email = input.value.trim();
  if (email !== email.toLowerCase()) {
    return showError(input, invalidMsg);
  }
  showSuccess(input);
  return true;
}

// Preserve Data In-Browser
const username = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
let user;
function saveData() {
  user = {
    name: '',
    email: '',
    message: '',
  };
  user.name = username.value;
  user.email = email.value;
  user.message = message.value;
  localStorage.setItem('usermessage', JSON.stringify(user));
}
username.onchange = saveData;
email.onchange = saveData;
message.onchange = saveData;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValid = emailValidation(form.elements.email, INVALID_EMAIL);
  if (emailValid) {
    localStorage.setItem('usermessage', JSON.stringify(user));
    form.submit();
  }
});

// Preserve input data with reload or refresh
window.addEventListener('load', () => {
  user = JSON.parse(localStorage.getItem('usermessage'));
  if (user) {
    username.value = user.name;
    email.value = user.email;
    message.value = user.message;
  }
});
