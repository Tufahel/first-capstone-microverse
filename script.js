const speakers = [
    {
        name: 'Profile 1',
        img: 'images/profile.png',
        degree: 'Phd in Phylosophy',
        description: ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse magnam odit eveniet possimus dignissimos iusto tenetur.'],
    },
    {
        name: 'Profile 2',
        img: 'images/profile.png',
        degree: 'Phd in English',
        description: ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse magnam odit eveniet possimus dignissimos iusto tenetur.'],
    },
    {
        name: 'Profile 3',
        img: 'images/profile.png',
        degree: 'Phd in Math',
        description: ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse magnam odit eveniet possimus dignissimos iusto tenetur.'],
    },
    {
        name: 'Profile 4',
        img: 'images/profile.png',
        degree: 'Phd in CSE',
        description: ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse magnam odit eveniet possimus dignissimos iusto tenetur.'],
    },
    {
        name: 'Profile 5',
        img: 'images/profile.png',
        degree: 'Phd in EEE',
        description: ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse magnam odit eveniet possimus dignissimos iusto tenetur.'],
    },
    {
        name: 'Profile 6',
        img: 'images/profile.png',
        degree: 'Phd in Chemistry',
        description: ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse magnam odit eveniet possimus dignissimos iusto tenetur.'],
    }
];

const Btn = document.getElementsByClassName('btn-mobile');
const featuredSpeaker = document.querySelector('.featured-speaker');
const speakerSection = document.createElement('div');
speakerSection.classList.add('speakers-content');

function speakerSectionMobile(number) {
    speakerSection.style.display = 'block';
    featuredSpeaker.appendChild(speakerSection);
    speakerSection.innerHTML = `
                <h3>Featured Speakers</h3>
                <div class="line"></div>
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
                <div class="btn-mobile">
                <p>Get my resume</p>
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
                <h3>Featured Speakers</h3>
                <div class="line"></div>
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
`;
}

Btn[0].addEventListener('click', () => {
    speakerSectionMobileClick(0);
})

