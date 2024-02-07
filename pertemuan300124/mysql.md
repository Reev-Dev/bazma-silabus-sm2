<!-- # Pertemuan 1 -->

## Cara membuat database baru

Buka terminal, lalu ketikkan 'mysql -u root -p' dan passwordnya kosong (langsung enter)

default mysql adalah username: root dan passwordnya: (kosong)

### Cara membuat database baru

Berikan kode yang ada di module dengan cara 'create database smk_personal;'

### Membuat table baru di smk_personal

Buat tabel baru dengan nama biodata dan kolomnya:
 -id, nama, kelas, jurusan, umur;

 create table biodata (
->id int primary key not null,
->nama varchar(255),
->kelas varchar(20),
->jurusan varchar(255),
->umur int
->);

### Lihat data table biodata

Dapat menggunakan query desc biodata;
Dapat juga menggunakan select * from biodata;

### Membuiat data baru pada tabel biodata

Disini akan menambahkan data baru dengan query berikut:
insert into biodata (id, nama, kelas, jurusan, umur) values (1, "Attar", "XI", "SIJA", 16);

Lihat data

* = untuk melihat seluruh data

### mencari data berdasarkan id

Menggunakan query:
select * from biodata where id = ?(1)

### Update data berdasarkan id

Query:

update biodata set nama = "..." where id = ...;

### Hapus berdasarka id

Query:

delete from biodata where id = ...;

NOT

select * from sekolahan where not alamat = "Bogor";

select * from sekolahan where (jurusan = "SIJA" and kapasitas_alamat > 200) or (jurusan = "RPL" and kapasitas_siswa > 300)not alamat = "

## Order by

-Descending => dimulai dari tulisan z - a / id / created_at(tanggal_buat)
-Ascending => dimulai dari tulisan a - z / id / created_at(tanggal_buat)

<!-- mengambil jurusan dari z - a -->
select * from sekolahan order by jurusan desc;

<!-- mengambil jurusan dari a - z -->
select * from sekolahan order by jurusan asc;

## Limit

<!-- membatasi jumlah data -->
select * from table limit 5;

<!-- membatasi jumlah dengan desc / asc -->
select * from table order by condition limit 5;

<!-- dengan where dan membatasi jumlah dengan desc / asc -->
select * from tabel
where condition
limit limitation;

select * from sekolahan where jurusan = "RPL" order by id desc limit 5;

## Like => pencarian data

% huruf / huruf %

jamal => huruf%
asep => %huruf

select * from tabel 
where field like "custom%";

<!-- mencari dengan huruf depan -->
select * from sekolahan where nama_sekolah like "A%";

<!-- mencari dengan huruf belakang -->
select * from sekolahan where nama_sekolah like "A%";

<!-- mecari dengan huruf bebas -->
select * from sekolahan where nama_sekolah like "%h%";


<!-- the following SQL statement selects all customers with a field that have "or" in any position: -->

select * from tabel
where field like "%or%";

## Aliases

<!-- mendefinisikan pergantian field -->
select field as asField. 
from tabel;

nama_sekolah = namaSekolah, kapasitas_siswa = kapasitas, alamat = tempat

<!-- nama_sekolah -->
select nama_sekolah as namaSekolah fromsekolahan;

select id, nama_sekolah as namaSekolah,jurusan, kapasitas_siswa as kapasitasSiswa from sekolahan;

camelCase = snake_case

## In

select column 
from table_name
where column_name in (select statement);

select * from table
where condition in (s);

select * from sekolahan where jurusan in ("SIJA", "MT");

tugas : 
1 filtering data (where)
2 cari data dengan (like) =judul,kategori, penulis
3 data id desc
4 filteirng jumlah halaman >= & < &  = (bebas)
5 tahun tebrit >= 2020 <= 2026
6 batas umur dimulai dari 8 - 20
7 harga dimulai dari desc / asc
8 harga range dari 30000 - 200000
9 Harus ada upd delete
10 upl yutub

Belajar Membuat Database Perpustakaan [Nama - XI - Backend Developer]