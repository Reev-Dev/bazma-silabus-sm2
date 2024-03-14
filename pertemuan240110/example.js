const fs = require("fs");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}
);

rl.question('Input your fullname : ', (name) => {
    rl.question('Input your age : ', (age) => {
        rl.question('Input your school : ', (school) => {
            console.log('-- My Data --');
            console.log(`My fullname is ${name}, I'm ${age} y.o and I'm studying at ${school}`);

            const data = { name, age, school };
            const fileDb = fs.readFileSync("./db/data.json", "utf8");
            const dataDiri = JSON.parse(fileDb);

            dataDiri.push(data);
            fs.writeFileSync('./db/data.json', JSON.stringify(dataDiri));
            console.log('Thanks for introducing your self');
            rl.close()
        })
    })
})
