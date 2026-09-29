// const nama = "Inas";
// const nilaiTeori = 75;
// const nilaiPraktek = 80;
// const kehadiran = 90;
// const pelanggaranBerat = false;

// const rataRata = (nilaiTeori + nilaiPraktek) / 2;

// let status = "";
// let keterangan = "";

// if (pelanggaranBerat) {
//   status = "Tidak lulus";
//   keterangan = "Pelanggaran Disiplin";
// } else if (kehadiran < 90) {
//   status = "Tidak Lulus";
//   keterangan = "Kehadiran Kurang";
// } else if (nilaiTeori < 75) {
//   status = "Tidak Lulus";
//   keterangan = "Teori Kurang";
// } else if (nilaiPraktek < 80) {
//   status = "tidak lulus";
//   keterangan = "praktek kurang";
// } else {
//   if (rataRata > 90) {
//     status = "Lulus";
//     keterangan = "Sangat Baik";
//   } else if (rataRata > 85) {
//     status = "Lulus";
//     keterangan = "Baik";
//   } else {
//     status = "Lulus";
//     keterangan = "cukup";
//   }
// }
// console.log("Nama: " + nama);
// console.log("Rata - Rata: " + rataRata);
// console.log("Status: " + status);

const totalBelanja = 1000000;
const isMember = false;
let discount = 0;

if (isMember || totalBelanja >= 2000000) {
  discount = 0.1;
} else if (totalBelanja >= 500000) {
  discount = 0.2;
} else {
  persen = discount;
}

const potongan = totalBelanja * discount;
const bayar = totalBelanja - potongan;

// templet literal atau `` backtik
console.log(`potongan harga: ${potongan}`);
console.log(`total bayar: ${bayar}`);

// switch - case
const color = "Hijau";
switch (color) {
  case "Biru":
    console.log("biru");
    break;
  case "merah":
    console.log("merah");
    break;
  default:
    console.log("bukan keduanya");
}

// for, foreach, while, do-while
for (let i = 0; i < 10; i++) {
  console.log(`Nilai variabel ${i}`);
}

// array = struktur data yang bisa menyimpan data lebih dari 1
// const nama2 = "budi, laras, andi";
let nama2 = ["Budi", "Laras", "Andi"];
const keranjang = ["Buah", "Sayuran", "Ikan"];
nama2[2] = "Agung";
console.log(`${nama2[2]} ${keranjang[1]}`);
nama2.unshift("Rozak"); // nambahin di depan
nama2.push("Rakha"); // nambahin di belakang
// spread operator = ...
nama2 = ["Wawan", ...nama2, "Maman"];
console.log(`nama baru ${nama2}`);

// indexOf = method atau function
const target = nama2.indexOf("Budi");
console.log(target);

// length = panjang array
const total = nama2.length;
const totalKeranjang = keranjang.length;
console.log(nama2.length);

// object = struktur data yang menggunakan simbol {}
let a = {
  nama3: "Inas",
  alamat: "Jalan",
  jurusan: "IT",
};
console.log(a.nama3);
console.log(a.jurusan);
console.log(a["alamat"]);
a.nilai = 90;
delete a.alamat;
a["email"] = "inas@gmail.com";
console.log(a);

const siswa = [
  {
    id: 1,
    nama4: "Rakha",
    nilai1: 80,
  },
  {
    id: 2,
    nama4: "Bagus",
    nilai1: 50,
  },
  {
    id: 3,
    nama4: "Sani",
    nilai1: 75,
  },
];

console.log(siswa);
// siswa.forEach(function(data, index){
//      console.log("siswa", data)}); // function biasa
siswa.forEach((data, index) => {
  console.log(`data siswa dengan index ${index} yaitu bernama ${data.nama4}`); // dengan menggunakan arrow function
}); //looping forEach

const siswaLulus = siswa.filter((s) => {
  return s.nilai1 >= 70;
});

console.log(siswaLulus);
