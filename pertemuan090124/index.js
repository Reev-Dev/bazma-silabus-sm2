// const names = 'Attar Rifai';
// console.log(names);

// const age = 16;
// const year = 2024;


// const pengurangan = year - age;
// console.log(pengurangan);


// function dataDiri(nama) {
//     return `Halo. nama saya adalah ${nama}`
// }

// console.log(dataDiri('Attar Rifai'));

const { namaRelasi, namaDaerah, sekolah, abjadArr } = require("./relasi");

const { angkaHari, rectangle, nilaiRapor } = require("./tugas")

console.log(namaRelasi("Attar Rifai"));
console.log(namaDaerah("Jakarta"));

console.log("--- --- --- ---");
console.log(sekolah("SMK TI Bazma", "SIJA"));

console.log("--- --- --- ---");
console.log(abjadArr('f'));

console.log("--- --- --- ---");
console.log(angkaHari(3));

rectangle(10,3);

console.log("--- --- --- ---");
console.log(nilaiRapor(65));