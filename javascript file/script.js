const card = [
    {
        id: 0,
        image: 'images/bhagavanthkesari-posterart.jpg',
        title: 'Bhagavanth Kesari (2023) WEB-DL Hindi (ORG DD5.1) 1080p 720p & 480p [x264/HEVC] | Full Movie',
        link: 'pages/bhagvankesri.html',
    },
    {
        id: 1,
        image: 'images/hanuman.jpg',
        title: 'The Legend Of Hanuman (2021) WEB-DL Hindi (ORG DD5.1) 1080p 720p & 480p [x264/HEVC] | Full Movie',
        link: 'pages/legendofhanuman.html',
    },
    {
        id: 2,
        image: 'images/animal.jpg',
        title: 'Animal Full Movie (2023) WEB-DL Hindi (ORG DD5.1) 1080p 720p & 480p [x264/HEVC] | Full Movie',
        link:'pages/animal.html',
    },
    {
        id: 3,
        image: 'images/mission.jpg',
        title: 'Mission Raniganj (2023) WEB-DL Hindi (ORG DD5.1) 1080p 720p & 480p [x264/HEVC] | Full Movie',
        link:'pages/mission.html',
    },
    {
        id: 4,
        image: 'images/rorschah.jpg',
        title: 'Rorschah Full Movie (2023) WEB-DL Hindi (ORG DD5.1) 1080p 720p & 480p [x264/HEVC] | Full Movie',
        link:'pages/rorschah.html',
    },
    {
        id: 5,
        image: 'images/sam.jpg',
        title: 'Sam Bahadur (2023) WEB-DL Hindi (ORG DD5.1) 1080p 720p & 480p [x264/HEVC] | Full Movie',
        link:'pages/sambahadur.html',
    },
    {
        id: 6,
        image: 'images/pushpa1.jpg',
        title: 'Pushpa The Rise (2023) WEB-DL Hindi (ORG DD5.1) 1080p 720p & 480p [x264/HEVC] | Full Movie',
        link:'',
    },
    {
        id: 7,
        image: 'images/pushpa2.jpg',
        title: 'Pushpa The Rule (2023) WEB-DL Hindi (ORG DD5.1) 1080p 720p & 480p [x264/HEVC] | Full Movie',
        link:'',
    },
    {
        id: 8,
        image: 'images/salaar.png',
        title: 'Salaar Part 1 - Ceasefire (2023) WEB-DL Hindi (ORG DD5.1) 1080p 720p & 480p [x264/HEVC] | Full Movie',
        link:'',
    },
    {
        id: 9,
        image: 'images/Shyam.png',
        title: 'Shyam Singha Roy (2023) WEB-DL Hindi (ORG DD5.1) 1080p 720p & 480p [x264/HEVC] | Full Movie',
        link:'',
    },
    {
        id: 10,
        image: 'images/vikram.jpg',
        title: 'Vikram full movie (2023) WEB-DL Hindi (ORG DD5.1) 1080p 720p & 480p [x264/HEVC] | Full Movie',
        link:'',
    },
    {
        id: 11,
        image: 'images/vm.jpg',
        title: 'V Full Movie(2023) WEB-DL Hindi (ORG DD5.1) 1080p 720p & 480p [x264/HEVC] | Full Movie',
        link:'',
    },
    {
        id: 12,
        image: 'images/kaithi.png',
        title: 'Kaithi (2023) WEB-DL Hindi (ORG DD5.1) 1080p 720p & 480p [x264/HEVC] | Full Movie',
        link:'',
    },
    {
        id: 13,
        image: 'images/kgf1.png',
        title: 'KGF 1 (2023) WEB-DL Hindi (ORG DD5.1) 1080p 720p & 480p [x264/HEVC] | Full Movie',
        link:'',
    },
    {
        id: 14,
        image: 'images/kgf2.png',
        title: 'KGF 2 (2023) WEB-DL Hindi (ORG DD5.1) 1080p 720p & 480p [x264/HEVC] | Full Movie',
        link:'',
    },
    {
        id: 15,
        image: 'images/leo.jpg',
        title: 'Leo (2023) WEB-DL Hindi (ORG DD5.1) 1080p 720p & 480p [x264/HEVC] | Full Movie',
        link:'',
    },
    {
        id: 16,
        image: 'images/hanuman2.jpg',
        title: 'Hanuman (2023) WEB-DL Hindi (ORG DD5.1) 1080p 720p & 480p [x264/HEVC] | Full Movie',
        link:'',
    },
    {
        id: 17,
        image: 'images/shaitaan.jpg',
        title: 'Shaitaan (2023) WEB-DL Hindi (ORG DD5.1) 1080p 720p & 480p [x264/HEVC] | Full Movie',
        link:'',
    },
];

const categories = [...new Set(card.map((card) => { return card }))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((card) => {
        return (
            card.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});

const displayItem = (card) => {
    document.getElementById('box').innerHTML = card.map((card) => {
        var { image, title, link } = card;
        return (
            `<div class='card' style='width: 24rem; overflow: hidden;'>
                  <a href=${link}><img class='card-img-top' alt='...' src=${image}></img></a>
                        <div class='card-body'>
                              <p class='card-text'>${title}</p>
                        </div>
            </div>`
        )
    }).join('')
};
displayItem(categories);
