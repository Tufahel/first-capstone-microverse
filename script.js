const speakers = [
    {
        name: 'Profile 1',
        img: 'images/profile.png',
        degree: 'Phd in Phylosophy',
        description: ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse magnam odit eveniet possimus dignissimos iusto tenetur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse magnam odit eveniet possimus dignissimos iusto tenetur.'],
    },
    {
        name: 'Profile 2',
        img: 'images/profile.png',
        degree: 'Phd in English',
        description: ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse magnam odit eveniet possimus dignissimos iusto tenetur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse magnam odit eveniet possimus dignissimos iusto tenetur.'],
    },
    {
        name: 'Profile 3',
        img: 'images/profile.png',
        degree: 'Phd in Math',
        description: ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse magnam odit eveniet possimus dignissimos iusto tenetur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse magnam odit eveniet possimus dignissimos iusto tenetur.'],
    },
    {
        name: 'Profile 4',
        img: 'images/profile.png',
        degree: 'Phd in CSE',
        description: ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse magnam odit eveniet possimus dignissimos iusto tenetur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse magnam odit eveniet possimus dignissimos iusto tenetur.'],
    },
    {
        name: 'Profile 5',
        img: 'images/profile.png',
        degree: 'Phd in EEE',
        description: ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse magnam odit eveniet possimus dignissimos iusto tenetur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse magnam odit eveniet possimus dignissimos iusto tenetur.'],
    },
    {
        name: 'Profile 6',
        img: 'images/profile.png',
        degree: 'Phd in Chemistry',
        description: ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse magnam odit eveniet possimus dignissimos iusto tenetur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse magnam odit eveniet possimus dignissimos iusto tenetur.'],
    }
];

const featuredSpeaker = document.querySelector('.featured-speaker');
const speakerSection = document.createElement('div');
speakerSection.classList.add('speakers-content');

function speakerSectionMobile(number) {
    speakerSection.style.display = 'block';
    featuredSpeaker.appendChild(speakerSection);
    speakerSection.innerHTML = `
                <div>
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <h2>${speakers[number].degree}</h2>
                <p>${speakers[number++].degree}</p>
                </div>
                </div>
                <div>
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <h2>${speakers[number].degree}</h2>
                <p>${speakers[number++].degree}</p>
                </div>
                </div>
                <div>
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <h2>${speakers[number].degree}</h2>
                <p>${speakers[number++].degree}</p>
                </div>
                </div>
                <div>
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <h2>${speakers[number].degree}</h2>
                <p>${speakers[number++].degree}</p>
                </div>
                </div>
                <div>
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <h2>${speakers[number].degree}</h2>
                <p>${speakers[number++].degree}</p>
                </div>
                </div>
                <div>
                <img src=${speakers[number].img}>
                <div>
                <h2>${speakers[number].name}</h2>
                <h2>${speakers[number].degree}</h2>
                <p>${speakers[number++].degree}</p>
                </div>
                </div>
                </div>
`;
}

speakerSectionMobile(0);

