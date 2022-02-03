const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

closeIcon.style.display = 'none';
function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    closeIcon.style.color = 'gray';
    hamburger.style.background = 'none';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach(
  (menuItem) => {
    menuItem.addEventListener('click', toggleMenu);
  },
);

const speakers = [
  {
    name: 'Profile 1',
    img: 'images/profile.png',
    degree: 'Phd in Phylosophy from Oxford University',
    description: ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse magnam odit eveniet possimus dignissimos iusto tenetur.'],
  },
  {
    name: 'Profile 2',
    img: 'images/profile.png',
    degree: 'Phd in English from Cambrige University',
    description: ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse magnam odit eveniet possimus dignissimos iusto tenetur.'],
  },
  {
    name: 'Profile 3',
    img: 'images/profile.png',
    degree: 'Phd in Math from California University',
    description: ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse magnam odit eveniet possimus dignissimos iusto tenetur.'],
  },
  {
    name: 'Profile 4',
    img: 'images/profile.png',
    degree: 'Phd in CSE from Harvard University',
    description: ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse magnam odit eveniet possimus dignissimos iusto tenetur.'],
  },
  {
    name: 'Profile 5',
    img: 'images/profile.png',
    degree: 'Phd in EEE from Peeking University',
    description: ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse magnam odit eveniet possimus dignissimos iusto tenetur.'],
  },
  {
    name: 'Profile 6',
    img: 'images/profile.png',
    degree: 'Phd in Chemistry',
    description: ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse magnam odit eveniet possimus dignissimos iusto tenetur.'],
  },
];

const Btn = document.getElementsByClassName('btn-mobile');
const Btn1 = document.getElementsByClassName('btn-mobile1');
const featuredSpeaker = document.querySelector('.featured-speaker');
const speakerSection = document.createElement('div');
speakerSection.classList.add('speakers-content');

function speakerSectionMobile(number) {
  featuredSpeaker.appendChild(speakerSection);
  speakerSection.innerHTML = `
                <div class="underline-content">
                <h3>Featured Speakers</h3>
                 <div class="line"></div>
                </div>
                <div class="speakers-content-mobile">
                <div class="speakers-info">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p>${speakers[number++].description}</p>
                </div>
                </div>
                <div class="speakers-info">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p>${speakers[number++].description}</p>
                </div>
                </div>
                </div>
                <div class="btn-mobile">
                <p>See more</p>
                <a><i class="far fa-chevron-down"></i></a>
                </div>
                </div>
`;
  document.addEventListener('click', () => {
  });
}
speakerSectionMobile(0);

function speakerSectionMobileClick(number) {
  speakerSection.style.display = 'block';
  featuredSpeaker.appendChild(speakerSection);
  speakerSection.innerHTML = `
                <div class="underline-content">
                <h3>Featured Speakers</h3>
                <div class="line"></div>
                </div>
                <div class="speakers-content-mobile">
                <div class="speakers-info">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p>${speakers[number++].description}</p>
                </div>
                </div>
                <div class="speakers-info">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p>${speakers[number++].description}</p>
                </div>
                </div>
                <div class="speakers-info">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p>${speakers[number++].description}</p>
                </div>
                </div>
                <div class="speakers-info">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p>${speakers[number++].description}</p>
                </div>
                </div>
                <div class="speakers-info">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p>${speakers[number++].description}</p>
                </div>
                </div>
                <div class="speakers-info">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p>${speakers[number++].description}</p>
                </div>
                </div>
                </div>
                <div class="btn-mobile btn-mobile1">
                <p>See Less</p>
                <a><i class="far fa-chevron-up"></i></a>
                </div>
                </div>
`;
  document.addEventListener('click', () => {
  });
}

Btn[0].addEventListener('click', () => {
  speakerSectionMobileClick(0);
  Btn1[0].addEventListener('click', () => {
    speakerSectionMobile(0);
  });
});

const speakerSectionDesktop = document.createElement('div');
speakerSectionDesktop.classList.add('speakers-content-global');

function speakerSectionGlobal(number) {
  featuredSpeaker.appendChild(speakerSectionDesktop);
  speakerSectionDesktop.innerHTML = `
                <div class="underline-content">
                <h3>Featured Speakers</h3>
                <div class="line"></div>
                </div>
                <div class="speakers-content-desktop">
                <div class="speakers-info-desktop">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p>${speakers[number++].description}</p>
                </div>
                </div>
                <div class="speakers-info-desktop">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p>${speakers[number++].description}</p>
                </div>
                </div>
                <div class="speakers-info-desktop">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p>${speakers[number++].description}</p>
                </div>
                </div>
                <div class="speakers-info-desktop">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p>${speakers[number++].description}</p>
                </div>
                </div>
                <div class="speakers-info-desktop">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p>${speakers[number++].description}</p>
                </div>
                </div>
                <div class="speakers-info-desktop">
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <p class="speakers-degree">${speakers[number].degree}</p>
                <div class="line1"></div>
                <p>${speakers[number++].description}</p>
                </div>
                </div>
                </div>
                </div>
`;
}
speakerSectionGlobal(0);