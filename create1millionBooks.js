const fs = require('fs');
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

    const articles = [{ text: "" }, { text: "The" }, { text: "As a", singular: true }, { text: "Of" }, { text: "Of All" }, { text: "To the", singular: true }, { text: "I,", singular: true }];
    const article = articles[getRand(0, articles.length)];

    const adjectives = ["", "Secret", "Naked", "Dead", "Great", "Brave", "Young", "Pale", "New", "Lonely", "Invisible", "Native", "Tender", "Magnificent", "Good", "Golden", "Terrible", "Awesome", "Infamous"];
    const adjective = adjectives[getRand(0, adjectives.length)];

    const nouns = ["Angle", "Adventure", "Call", "Road", "Choice", "River", "Archibishop", "Wind", "Catcher", "Age", "Light", "Complaint", "Fire", "Soldier", "Portrait", "Artist", "Heart", "Man",
        "World", "Sound", "Fury", "Catch", "Grape", "Lover", "Wing", "Wrath", "Way", "Flesh", "Volcano", "Hunter", "Son", "Appointment", "Dove", "Ambassadors", "Net", "Bowl", "Dream", "Island"];

    const noun = nouns[getRand(0, nouns.length)];

    let title = "";
    if (article) {
        title += article.text;
        title += " ";
    }
    if (adjective) {
        title += adjective;
        title += " ";
    }
    if (article && article.singular) {
        title += noun;
    } else {
        const singular = getRand(0, 1) > 0, modifiedNoun = singular ? noun : noun + "s";
        title += modifiedNoun;
    }
    return title;
}

const generateBook = (index) => {
    const gender = random.gender();
    return {
        id: index,
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
    for (let index = 0; index < 1000000; index++) {
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
        const bookIndex = pageNumber ? index % (pageNumber * CHUNK_SIZE) : index;
        books[bookIndex] = generateBook(index);
    }
    return books;
}

generateBooks();