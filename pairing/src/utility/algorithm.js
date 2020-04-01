console.log('testing pairing algorithm');

// Evan's todo
// turn littles and bigs into class called member

// THESE ARE THE LITTLES
const testLittleOne = {
    name: 'Evan',
    questions: [8, 2, 7],
    preferences: [8, 3, 9]
};
const testLittleTwo = {
    name: 'Chad',
    questions: [4, 9, 6],
    preferences: [4, 9, 7]
};
const testLittleThree = {
    name: 'Kate',
    questions: [5, 6, 7],
    preferences: [5, 6, 7]
};
const LittlesList = [testLittleOne, testLittleTwo, testLittleThree];

// THESE ARE BIGS
const testBigOne = {
    name: 'Karen',
    questions: [7, 7, 9],
    preferences: [5, 9, 7]
};
const testBigTwo = {
    name: 'Susan',
    questions: [9, 3, 2],
    preferences: [6, 5, 5]
};
const testBigThree = {
    name: 'Brad',
    questions: [6, 2, 8],
    preferences: [9, 8, 5]
};
const BigsList = [testBigOne, testBigTwo, testBigThree];

const calculateTotal = (littles, bigs) => {
    let allData = [];

    littles.forEach(el => {
        allData.push(calculatePerson(el, bigs));
    });

    bigs.forEach(el => {
        allData.push(calculatePerson(el, littles));
    });

    //console.log(allData);
    return allData;
};

const calculatePerson = (person, oppositeList) => {
    // Uses the preferences of person and the questions of opposite list
    // to create potential bigs/littles list

    let final = [];
    let tempBigScore = 0;

    // cycling through the opposite list
    for (i = 0; i < oppositeList.length; i++) {
        tempBigScore = 0;
        for (j = 0; j < person.questions.length; j++) {
            // cycling through the preference question of person and question of opposite
            // adding to tempBigScore
            let temp = person.preferences[j] - oppositeList[i].questions[j];
            temp = 10 - Math.abs(temp);
            tempBigScore += temp;
        }
        // finish calculating tempBigScore
        final.push({ Name: oppositeList[i].name, Score: tempBigScore });
    }

    // sorting final list based on score
    final.sort((a, b) => (a.Score < b.Score ? 1 : -1));

    //console.log(final);

    //returning person's name and person's list
    return { name: person.name, list: final };
};

const readData = data => {
    data.forEach(el => {
        console.log(el.name);
        console.log(el.list);
        console.log('      ');
    });
};

const testFunction = () => {
    //writing random test code here
    for (i = 0; i < Littles.length; i++) {
        console.log(Littles[i].name);
    }
};

// console.log('testing calculuate person');
// let test = calculatePerson(testLittleTwo, BigsList);
// console.log(test);
// console.log('        ');
// console.log('        ');
// console.log('        ');

readData(calculateTotal(LittlesList, BigsList));
//testFunction();
