const projectData = [
  {
    projectImage: './ajju.jpg',
    projectTitle: 'To Do List',
    languageUsed: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    projectImage: './ajju.jpg',
    projectTitle: 'To Do List',
    languageUsed: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    projectImage: 'ajju.jpg',
    projectTitle: 'To Do app',
    languageUsed: ['HTML', 'CSS', 'JavaScript'],
  },
];

const project = document.querySelector('.projectContainer');

for (let i = 0; i < projectData.length; i += 1) {
  let languages = '';
  for (let j = 0; j < projectData[i].languageUsed.length; j += 1) {
    languages += `<li>${projectData[i].languageUsed[j]}</li>`;
  }
  project.innerHTML += `<div class="card">
    <img src="${projectData[i].projectImage}" alt="project Image" />
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
    <img src="${projectData[i].projectImage}" alt="project image">
  </div>
  <div class="middle-container">
    <h3>${projectData[i].projectTitle}</h3>
    <ul>
        ${languages}
      </ul>
  </div>
  <div class="bottom-container">
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it 1960s with the
        releaLorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it 1960s with the relea
    </p>
    <div class="project-buttons">
    <button>See Live</button>
    <button>See Source</button>
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
