const { kelasBaru, getKelasBaruAsync } = require("./architecture.js");

// console.log(kelasBaru(1));
// console.log(kelasBaru(2));
// console.log(kelasBaru(3));

getKelasBaruAsync(3)
    .then((kelasMulmed) => {
        console.log(kelasMulmed)
    })