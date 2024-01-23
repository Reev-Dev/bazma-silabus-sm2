function namaRelasi(nama) {
    return `Hello my name is ${nama}`;
}

function namaDaerah(daerah) {
    return `Saya tinggal di ${daerah}`;
}

function sekolah(namaSekolah, jurusanSekolah) {
    const data = {
        namaSekolah,
        jurusanSekolah
    }
    return data;
}

function abjadArr(abjad) {
    const abjadLama = ['a', 'b', 'c', 'd', 'e'];
    if (abjad !== undefined) {
        abjadLama.unshift(abjad);
    }
    return abjadLama;
}


module.exports = { namaRelasi, namaDaerah, sekolah, abjadArr };