
const barang = ["Keyboard", "Mouse", "Monitor", "Kabel HDMI"];

function tampilkanBarang(data) {
    if (data.length === 0) {
        console.log("Daftar barang kosong");
    }

    for (let i = 0; i < data.length; i++) {
        console.log((i + 1) + ". " + data[i]);
    }

    console.log("Jumlah barang: " + data.length);
}

function tambahBarang(data, nama) {
    if (nama === "" || data.includes(nama)) {
        return false;
    }

    data.push(nama);
    return true;
}

function cariBarang(data, nama) {
    return data.indexOf(nama);
}

function hapusBarang(data, nama) {
    let indeks = cariBarang(data, nama);

    if (indeks === -1) {
        return false;
    }

    data.splice(indeks, 1);
    return true;
}

// Program utama
console.log("=== INVENTARIS LAB ===");

tampilkanBarang(barang);

console.log("\nTambah Webcam:", tambahBarang(barang, "Webcam"));
console.log("Cari Monitor:", cariBarang(barang, "Monitor"));
console.log("Hapus Mouse:", hapusBarang(barang, "Mouse"));

console.log("\nDaftar Barang Terbaru:");
tampilkanBarang(barang);

// Pengujian
console.log("\n=== PENGUJIAN ===");

let uji = ["Keyboard", "Mouse", "Monitor"];

console.log("Tambah Printer:", tambahBarang(uji, "Printer"));
console.log("Tambah Monitor:", tambahBarang(uji, "Monitor"));
console.log("Tambah kosong:", tambahBarang(uji, ""));
console.log("Cari Scanner:", cariBarang(uji, "Scanner"));
console.log("Hapus Scanner:", hapusBarang(uji, "Scanner"));

console.log("Array kosong:");
tampilkanBarang([]);
