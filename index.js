const projectData = [
  {
    projectImage: './images/projectImages/todolist/tudoDesktop.png',
    MobileImage: './images/projectImages/todolist/tudolistmobile.jpeg',
    projectTitle: 'To Do List',
    cardDetail: 'A simple to-do list application that helps to organize your daily tasks and keep track of the task you have completed and the task you are yet to have completed, and also deleting the completed task leaving those yet to be completed.',
    languageUsed: ['HTML', 'CSS', 'JavaScript'],
    live_version: 'https://anshuman7negi.github.io/Todo-list-webpack/dist/',
    link_source: 'https://github.com/anshuman7negi/Todo-list-webpack',
  },
  {
    projectImage: './images/projectImages/ziroMusic/zirodesktop.png',
    MobileImage: './images/projectImages/ziroMusic/ziromobile.jpeg',
    projectTitle: 'ZIRO MUSIC FESTIVAL',
    cardDetail: 'A simple application to book the ZIRO music festival tickets and get details about the music festival.In this project I have used HTML, CSS, JavaScript.',
    languageUsed: ['HTML', 'CSS', 'JavaScript'],
    live_version: 'https://anshuman7negi.github.io/ConcertPage/',
    link_source: 'https://github.com/anshuman7negi/ConcertPage',
  },
  {
    projectImage: './images/projectImages/portfolioDemo/portfolio.png',
    MobileImage: './images/projectImages/portfolioDemo/demoportfolio.jpeg',
    projectTitle: 'Demo Portfolio',
    cardDetail: "This is my portfolio website built as part of Microverse's project to showcase my skills in HTML5, CSS3, and JAVASCRIPT.",
    languageUsed: ['HTML', 'CSS', 'JavaScript'],
    live_version: 'https://anshuman7negi.github.io/my-portfolio/',
    link_source: 'https://github.com/anshuman7negi/my-portfolio',
  },
  {
    projectImage: './images/projectImages/awesomebook/bookDesktop.png',
    MobileImage: './images/projectImages/awesomebook/book.jpeg',
    projectTitle: 'Demo Portfolio',
    cardDetail: 'A Awesome Book is a live book store where anyone can add and remove the books.',
    languageUsed: ['HTML', 'CSS', 'JavaScript'],
    live_version: 'https://github.com/anshuman7negi/ES6-awesome-book',
    link_source: 'https://github.com/anshuman7negi/Awesome-Book',
  },
];

const project = document.querySelector('.projectContainer');

for (let i = 0; i < projectData.length; i += 1) {
  let languages = '';
  for (let j = 0; j < projectData[i].languageUsed.length; j += 1) {
    languages += `<li>${projectData[i].languageUsed[j]}</li>`;
  }
  project.innerHTML += `<div class="card">
    <img src="${projectData[i].MobileImage}" alt="project Image" />
    <div class="cardDetails">
      <p>${projectData[i].projectTitle}</p>
      <ul>
        ${languages}
      </ul>
      <button class="seeProjectBtn">See Project</button>
    </div>
  </div>`;
}

const body = document.querySelector('body');
for (let i = 0; i < projectData.length; i += 1) {
  const cardImage = window.innerWidth < 768
    ? projectData[i].MobileImage
    : projectData[i].projectImage;
  let languages = '';
  for (let j = 0; j < projectData[i].languageUsed.length; j += 1) {
    languages += `<li>${projectData[i].languageUsed[j]}</li>`;
  }
  body.innerHTML += ` <section id="card-${i}" class="seeProject">
  <div class="seeProject-container">
  <div class="cancelBtn-container">
  <img class="cancel-button" src="./images/mobileImages/card-cancel-btn.svg" alt="">
  </div>
  <div class="top-container">
    <img src="${cardImage}" alt="project image">
  </div>
  <div class="middle-container">
    <h3>${projectData[i].projectTitle}</h3>
    <ul>
        ${languages}
      </ul>
  </div>
  <div class="bottom-container">
    <p>${projectData[i].cardDetail}
    </p>
    <div class="project-buttons">
    <button onclick="redirectTo('${projectData[i].live_version}')" >See Live</button>
    <button onclick="redirectTo('${projectData[i].link_source}')" >See Source</button>
    </div>
  </div>
  </div>
</section>`;
}

const skillsData = {
  languages: ['HTML', 'CSS', 'JavaScript'],
  frameworks: ['React.js', 'Ruby on Rails', 'RSpec', 'Capybara', 'Selenium'],
  skills: ['Database Management', 'Version Control', 'CLI', 'Web Development', 'API Design'],
};

const skillContainers = document.querySelectorAll('.skills');

for (let i = 0; i < skillContainers.length; i += 1) {
  const skillType = skillContainers[i].id;
  const skills = skillsData[skillType];

  if (skills) {
    skills.forEach((skill) => {
      const skillItem = document.createElement('li');
      skillItem.textContent = skill;
      skillContainers[i].appendChild(skillItem);
    });
  }
}
const seeProject = document.querySelectorAll('.seeProjectBtn');
for (let i = 0; i < seeProject.length; i += 1) {
  seeProject[i].addEventListener('click', () => {
    document.querySelector('main').style.display = 'none';
    document.getElementById(`card-${i}`).style.display = 'flex';
  });
}

const cancel = document.querySelectorAll('.cancel-button');
for (let i = 0; i < seeProject.length; i += 1) {
  cancel[i].addEventListener('click', () => {
    document.querySelector('main').style.display = 'block';
    document.getElementById(`card-${i}`).style.display = 'none';
  });
}

// eslint-disable-next-line no-unused-vars
function redirectTo(url) {
  window.location.href = url;
}
