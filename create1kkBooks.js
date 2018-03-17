const fs = require('fs');
const faker = require('faker');
const chance = require('chance');

const random = new chance();
const getRand = (min, max) => {
    return min + Math.floor(Math.random() * Math.floor(max - min));
}
const getDay = () => {
    return getRand(1, 31);
}
const getMonth = () => {
    return getRand(1, 13);
}
const getYear = () => {
    return getRand(1950, 2018);
}

const generateTitle = () => {
    //"TO", "AT"
    //the LIGHTHOUSE, SAMARRA
    //ULYSSES, GATSBY, HENDERSON

    const articles = ["","The","As a","Of","Of All","To the","I,"];
    const article = articles[getRand(0, articles.length)];

    const adjectives = ["","Great","Brave","Young","New","Lonely","Invisible","Native","Tender","Magnificent","Good","Golden","Terrible","Awesome","Infamous"];
    const adjective = adjectives[getRand(0, adjectives.length)];

    const nouns = ["Soldier","Portrait","Artist","Heart","Man","World","Sound","Fury","Catch","Sons","Lovers","Grapes","Wrath","Way","Flesh","Volcano","Hunter","Son","Appointment","Wings","Dove","Ambassadors","Net","Bowl","Dream","Island"];
    const noun = nouns[getRand(0, nouns.length)];

    let title = "";
    if (article) {
        title += article;
        title += " ";
    }
    if (adjective) {
        title += adjective;
        title += " ";
    }
    title += noun;

    return title;
}


const generateBook = (index) => {
    const gender = random.gender();
    return {
        id: index,
       //  title: faker.lorem.sentence(),
         title: generateTitle(),
        publishedDate: getDay() + "/" + getMonth() + "/" + getYear(),
        genre: random.pick(['Sci-Fi', 'Horror', 'Romantic', 'Historic']),
        author: {
            gender: gender,
            name: random.name({ gender: gender })
        }
    }
}

const generateBooks = () => {
    const books = [], CHUNK_SIZE = 1000;
    for (let index = 0; index < 50000; index++) {
        let pageNumber = Math.floor(index / CHUNK_SIZE);

        if (index !== 0 && index % CHUNK_SIZE === 0) {
            console.log("Writing page number: ", pageNumber);

            setTimeout(function () { }, 1);
            fs.writeFile('books' + pageNumber + '.json', JSON.stringify(books), function (err) {
                if (err)
                    return console.log(err);
                console.log('JSON generated at books' + pageNumber + '.json');
            });
            books.length = [];
        }
        // console.log("pageNumber", pageNumber);
        // Books array is numbered from 0 to CHUNK_SIZE
        const bookIndex = pageNumber ? index % (pageNumber * CHUNK_SIZE) : index;
        // console.log("bookIndex:", bookIndex)

        books[bookIndex] = generateBook(index);
    }
    return books;
}

generateBooks();



// for (let index = 0; index < 50; index++) {
//     let title = generateTitle();
//     console.log(title);

// }