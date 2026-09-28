// Nilai teori 75
// Nilai praktek minimal 80
// kehadiran minimal 90%
// tidak memiliki pelanggaran berat = true false

// jika rata2 > 90 , lulus, predikat sangat baik
// jika rata2 > 85, lulus, predikat baik
// selain itu lulus

// kehadiran kurang dari 90%, tidak lulus (kehadiran kurang)
// nilai teori kurang dari 75, tidak lulus (teori kurang)
// nilai praktek kurang dari 80, tidak lulus (praktek kurang)
// jika ada pelanggaran berat, tidak lulus (pelanggaran disiplin)

// output:
// Nama: ????
// Rata - rata: ????
// Status: Lulus/tidak lulus

// (nilai teori + nilai praktek)/2

const nama = "Inas";
const nilaiTeori = 75;
const nilaiPraktek = 80;
const kehadiran = 90;
const pelanggaranBerat = false;

const rataRata = (nilaiTeori + nilaiPraktek) / 2;

let status = "";
let keterangan = "";

if (pelanggaranBerat) {
  status = "Tidak lulus";
  keterangan = "Pelanggaran Disiplin";
} else if (kehadiran < 90) {
  status = "Tidak Lulus";
  keterangan = "Kehadiran Kurang";
} else if (nilaiTeori < 75) {
  status = "Tidak Lulus";
  keterangan = "Teori Kurang";
} else if (nilaiPraktek < 80) {
  status = "tidak lulus";
  keterangan = "praktek kurang";
} else {
  if (rataRata > 90) {
    status = "Lulus";
    keterangan = "Sangat Baik";
  } else if (rataRata > 85) {
    status = "Lulus";
    keterangan = "Baik";
  } else {
    status = "Lulus";
    keterangan = "cukup";
  }
}
console.log("Nama: " + nama);
console.log("Rata - Rata: " + rataRata);
console.log("Status: " + status);
