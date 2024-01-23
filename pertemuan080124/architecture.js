const getKelas = (kode) => {
    const kelas = kode === 1 ? "SIJA" :
        kode === 2 ? "RPL" :
        kode === 3 ? "MM" : "Undefined"
    return { kode, kelas };
}

console.log(getKelas(1));
console.log(getKelas(2));
console.log(getKelas(3));

// cara 2 dengan menambahkan kepanjangan dari kodekelas

const
    functionKelas = (kode, deskripsi, kelas) => {
        return { kode, deskripsi, kelas };
    }

const getKelasDeskripsi = (kodeId) => {
    const kelas = kodeId === 1 ? functionKelas("SIJA", "Sistem Indormasi, Jaringan dan Aplikasi", 11) : functionKelas("RPL", "Rekayasa Perangkat Lunak", 12)
    return { kodeId, kelas };
}


// Game 
const getGame = (kode) => {
    const game = kode === 1 ? "Mobile Legends" :
        kode === 2 ? "PUBG Mobile" :
        kode === 3 ? "Genshin Impact" :
        kode === 4 ? "Chess" :
        kode === 5 ? "Clash Of Clans" : "Game not detected"
    return { kode, game };
}


const functionGame = (kode, title, genre, rating, developer) => {
    return { kode, title, genre, rating, developer }
}

const getListGame = (gameId) => {
    const game = gameId === 1 ? functionGame("MLBB", "Mobile Legends: Bang Bang", "MOBA, RPG", 4.8, "Moonton") :
        gameId === 2 ? functionGame("PUBG M", "PlayerUnknown's Battlegrounds Mobile", 4.7, "Battle Royale, Shooting Game", "Tencent Games") :
        gameId === 3 ? functionGame("GI", "Genshin Impact", 4.9, "RPG, ", "Hoyoverse") :
        gameId === 4 ? functionGame("C", "Chess", "Casual, Sports", 4.1, "Chess.com") :
        gameId === 5 ? functionGame("COC", "Clash of Clans", "Strategy, Relax", 4.7, "Supercell") : "Game not detected";
    return { gameId, game }
}

console.log(getListGame(1));
console.log(getListGame(2));
console.log(getListGame(3));
console.log(getListGame(4));
console.log(getListGame(5));
console.log(getListGame(6));