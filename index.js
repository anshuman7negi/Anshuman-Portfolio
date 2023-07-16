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
    projectTitle: 'To Do List',
    languageUsed: ['HTML', 'CSS', 'JavaScript'],
  },
];

const project = document.querySelector('.projects');

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
      <button>See Project</button>
    </div>
  </div>`;
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
