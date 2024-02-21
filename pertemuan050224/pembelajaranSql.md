# Cara menggunakan mysql

Buka terminal, ketikkan mysql -u root -p
kemudian langsung enter

## Cara membuat database baru

ketikkan query :
CREATE DATABASE db_new;

## Cara menggunakan database

ketikkan query :
USE db_new;
sampai muncul Database changed

## Cara menghapus database

ketikkan query :
DROP DATABASE db_new;
sampai muncul Query OK

## Membuat table baru di database

ketikkan query :
CREATE TABLE rak (kolom1, kolom2);
sampai muncul Query OK

## Menghapus table di database

ketikkan query :
DROP TABLE rak;

## Menambah data baru pada table

ketikkan query :
INSERT INTO rak (kolom1, kolom2) VALUES (isi!, isi2);

## Melihat data pada table

dapat menggunakan query :
SELECT * FROM rak;

* untuk melihat seluruh data

## Mencari data berdasarkan sesuatu (id)

ketikkan query :
SELECT * FROM rak WHERE id = ?;

## Update berdasarkan sesuatu (id)

ketikkan query :
UPDATE rak SET kolom2 = "..." WHERE id = ?;

## Hapus berdasarkan sesuatu (id)

ketikkan query :
DELETE FROM rak WHERE id = ?;

## Menggunakan NOT, OR, AND

NOT = Tidak/Bukan
OR = Atau
AND = Dan

Contoh query :
DELETE FROM rak WHERE NOT id = 1;
(ini akan menghapus semua data yang idnya bukan 1)
DELETE FROM rak WHERE (id = 1 AND nomor_rak = "3");
(ini akan menghapus semua data yang memiliki id 1 dan nomor_rak 3, harus memiliki keduanya)
DELETE FROM rak WHERE (id = 1 OR nomor_rak = "3");
(ini akan menghapus semua data yang memiliki id 1 atau nomor_rak 3, harus memiliki salah satu dari keduanya)

## Menggunakan ORDER BY

-Descending => dimulai dari tulisan z - a / id / created_at(tanggal_buat)
-Ascending => dimulai dari tulisan a - z / id / created_at(tanggal_buat)

Contoh query :
SELECT*FROM rak ORDER BY id DESC;
(ini akan memilih semua data dari tabel rak dengan urutan dari yang terbawah/z-a)
SELECT*FROM rak ORDER BY id ASC;
(ini akan memilih semua data dari tabel rak dengan urutan dari yang teratas/a-z)

## Menggunakan LIMIT

ketikkan query :
SELECT * FROM id LIMIT 2;
(membatasi jumlah data yang diambil/pakai sebanyak 2);

## Menggunakan Like => Pencarian Data

% huruf / huruf %
SELECT*FROM rak WHERE nomor_rak LIKE "R%";
(mencari data dengan huruf depan berupa R )
SELECT*FROM rak WHERE nomor_rak LIKE "%k";
(mencari data dengan huruf belakang berupa k )
SELECT * FROM rak WHERE nomor_rak LIKE "%R%";
(mencari data dengan huruf dimana saja berupa R )

## Menggunakan Aliases

Digunakan untuk mengganti nama kolom/field

contoh query :
SELECT id, nomor_rak AS nama_rak FROM rak;
(melihat data id dan nomor_rak yang diganti nama kolomnya menjadi nama_rak)

## Menggunakan IN

Digunakan untuk mencari data berdasarkan banyak kondisi
SELECT * FROM rak WHERE id IN (1, 2, 3);
(Mencari data yang memiliki id 1, 2 dan 3)
Hampir sama fungsinya dengan or

### Buat Database Perpustakaan

## Buat Database baru

ketikkan query :
CREATE DATABASE db;

## Buat table: rak, author, buku, berikan 5 data

ketikkan query :
CREATE TABLE rak (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nomor_rak` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`id`)
    );
CREATE TABLE `author` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nama_author` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`id`)
    );
CREATE TABLE `buku` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nama_buku` VARCHAR(255) NOT NULL,
    `halaman_buku` INT NOT NULL,
    `author_id` INT,
    `rak_id` INT,
    `rilis_buku` DATE NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`author_id`) REFERENCES `author`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`rak_id`) REFERENCES `rak`(`id`) ON DELETE CASCADE
);

Foreign key digunakan untuk membangun relasi antara dua tabel dalam sebuah data. Konsep foreign key memungkinkan tabel untuk saling terhubung satu sama lain berdasarkan nilai primary key dan foreign key

Tambahkan penulis dan rak ke dalam database :
INSERT INTO `author` (`nama_author`) VALUES
    ('JK Rowling'),
    ('Stephenie Meyer'),
    ('Henry Manampiring'),
    ('Brian Khrisna'),
    ('Tere Liye')
    ;
INSERT INTO `rak` (`nomor_rak`) VALUES
    ('RAK1'),
    ('RAK2'),
    ('RAK3'),
    ('RAK4'),
    ('RAK5'),
    ;

Setelah itu, tambahkan buku yang merujuk pada penulis dan rak yang sudah ditambahkan:
INSERT INTO `buku` (
    `nama_buku`,
    `halaman_buku`,
    `author_id`,
    `rak_id`,
    `rilis_buku`) VALUES
    ('Harry Potter', 350, 1, 1, '1997-06-26'),
    ('Twilight', 524, 2, 2, '2020-10-27'),
    ('Filosofi Teras', 346, 3, 3, '2018-12-18'),
    ('Kudasai', 456, 4, 4, '2019-12-01'),
    ('Ily', 380, 5, 5, '2023-11-19'),
    ;

Kemudian gabungkan tabel buku dengan tabel author dan rak menggunakan query JOIN:
SELECT
    buku.nama_buku,
    buku.rilis_buku,
    author.nama_author,
    rak.nomor_rak
FROM
    buku
JOIN author ON buku.author_id = author.id
JOIN rak ON buku.rak_id = rak.id;

## Jika ingin menghapus data dengan referensi

DELETE FROM `author` WHERE `id` = 1;

## Bermain dengan Constraint ON DELETE dan ON UPDATE

Tambahkan ke tabel buku constraint ON DELETE SET NULL dan ON UPDATE CASCADE, dan coba hapus dan update record di tabel author dan rak untuk melihat perubahan yang terjadi pada tabel buku dengan query :

ALTER TABLE `buku` DROP FOREIGN KEY `buku_ibfk_1`;
ALTER TABLE `buku` DROP FOREIGN KEY `buku_ibfk_2`;
ALTER TABLE `buku`
ADD CONSTRAINT `buku_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `author`(`id`) ON DELETE SET NULL ON UPDATE CASCADE,
ADD CONSTRAINT `buku_ibfk_2` FOREIGN KEY (`rak_id`) REFERENCES `rak`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

## LEFT JOIN

Di MySQL, left join, right join, dan inner join adalah jenis-jenis join yang digunakan untuk menggabungkan data dari dua tabel atau lebih berdasarkan kriteria tertentu.

Left join menggabungkan semua baris dari tabel di sebelah kiri dengan baris yang sesuai dari tabel di sebelah kanan. Jika tidak ada nilai yang cocok di tabel di sebelah kanan, baris tersebut akan tetap dimasukkan dalam hasil join, tetapi nilai kolom dari tabel di sebelah kanan akan menjadi NULL.

Query :

SELECT
    buku.nama_buku,
    author.nama_author
FROM
    buku
LEFT JOIN author ON buku.author_id = author.id;

## RIGHT JOIN

Right join mirip dengan left join, tetapi kebalikannya. Right join menggabungkan semua baris dari tabel di sebelah kanan dengan baris yang sesuai dari tabel di sebelah kiri berdasarkan kondisi yang ditentukan. Jika tidak ada nilai yang cocok di tabel di sebelah kiri, baris tersebut akan tetap dimasukkan dalam hasil join, tetapi nilai kolom dari tabel di sebelah kiri akan menjadi NULL.

Query :

SELECT
    buku.nama_buku,
    rak.nomor_rak
FROM
    buku
RIGHT JOIN rak ON buku.rak_id = rak.id;

## INNER JOIN (JOIN)

Inner join menggabungkan baris dari dua tabel berdasarkan kondisi yang ditentukan dan hanya akan menghasilkan baris yang memiliki nilai yang sesuai di kedua tabel. Jika tidak ada nilai yang cocok, baris tersebut tidak akan dimasukkan dalam hasil join

Query :

SELECT
    buku.nama_buku,
    author.nama_author,
    rak.nomor_rak
FROM
    buku
JOIN author ON buku.author_id = author.id
JOIN rak ON buku.rak_id = rak.id;
