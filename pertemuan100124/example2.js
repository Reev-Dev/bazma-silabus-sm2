const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// cek folder apakah ada atau tidak
const directory = './db';
if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory)
}


// cek file apakah ada atau tidak
const checkFile = './db/data.json';
if (!fs.existsSync(checkFile)) {
    fs.writeFileSync(checkFile, '[]', 'utf8');
}

// 
const questionEx = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

const addData = async () => {
    const name = await questionEx('Input your name : ');
    const age = await questionEx('Age : ');
    const hobby = await questionEx('Hobby : ');

    const data = { name, age, hobby }
    const fileDb = fs.readFileSync("./db/data.json", "utf8");
    const dataDiri = JSON.parse(fileDb);

    dataDiri.push(data);    
    fs.writeFileSync('./db/data.json', JSON.stringify(dataDiri));
    console.log('Thanks for introducing your self');
    rl.close()
}

addData();