// 1

function angkaHari(hari) {
    switch (hari) {
        case 1:
            return "Hari Senin";
            break;
        case 2:
            return "Hari Selasa";
            break;
        case 3:
            return "Hari Rabu";
            break;
        case 4:
            return "Hari Kamis";
            break;
        case 5:
            return "Hari Jumat";
            break;
        default:
            return "Hari Sabtu & Minggu Libur";
            break;
    }
}

// 2

function rectangle(p, l) {
    let isi = "";
    for (let i = 1; i <= l; i++) {
        for (let n = 1; n <= p; n++) {
            isi += "*"
        }
        isi += "\n"
    }
    console.log(isi)
}


// 3
function nilaiRapor(nilai) {
    if (nilai === 100) {
        return "Terbaik"
    } else if (nilai >= 90 && nilai <= 99) {
        return "Baik"
    } else if(nilai >= 80 && nilai <= 89) {
        return "Cukup Baik"
    } else if (nilai >= 60 && nilai <= 79) {
        return "Kurang Belajar"
    } else {
        return "Tidak Belajar"
    }
}

module.exports = { angkaHari, rectangle, nilaiRapor };