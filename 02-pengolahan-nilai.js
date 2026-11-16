
const nilai = [80, 70, 90, 65, 75, 85];

function tampilkanNilai(data) {
    for (let i = 0; i < data.length; i++) {
        console.log("Siswa " + (i + 1) + ": " + data[i]);
    }
}

function hitungRataRata(data) {
    if (data.length === 0) {
        return 0;
    }

    let total = 0;

    for (let i = 0; i < data.length; i++) {
        total += data[i];
    }

    return total / data.length;
}

function hitungJumlahTuntas(data, batas) {
    let jumlah = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i] >= batas) {
            jumlah++;
        }
    }

    return jumlah;
}

// Program utama
console.log("=== NILAI PRAKTIK ===");

tampilkanNilai(nilai);

let tuntas = hitungJumlahTuntas(nilai, 75);

console.log("\nJumlah siswa:", nilai.length);
console.log("Rata-rata:", hitungRataRata(nilai));
console.log("Siswa tuntas:", tuntas);
console.log("Belum tuntas:", nilai.length - tuntas);

// Pengujian
console.log("\n=== PENGUJIAN ===");

const nilaiUji = [60, 65, 70, 80, 90];
let jumlahTuntas = hitungJumlahTuntas(nilaiUji, 75);

tampilkanNilai(nilaiUji);

console.log("Jumlah siswa:", nilaiUji.length);
console.log("Rata-rata:", hitungRataRata(nilaiUji));
console.log("Siswa tuntas:", jumlahTuntas);
console.log("Belum tuntas:", nilaiUji.length - jumlahTuntas);
