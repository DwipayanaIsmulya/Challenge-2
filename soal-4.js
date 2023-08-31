const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High ",
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

function hitungTotalPenjualan(dataPenjualan) {
  // tulis kode logic kamu didalam ini ya

  // deklarasi variabel result
  let result = 0;

  // cek apakah parameter bukan berupa object ?
  if (typeof dataPenjualan != "object") {
    // in print
    result = "ERROR : Invalid data type";
  } else {
    // lakukan perulangan untuk mengecek seberapa banyak jumlah array
    for (let i = 0; i < dataPenjualan.length; i++) {
      // lakukan penjumlahan pada properti dari totalTerjual
      result += dataPenjualan[i].totalTerjual;
    }
  }

  // kembalikan nilai result
  return result;
}

// EXPECTED RESULT
// Ketika Function tersebut dipanggil dengan variabel dataPenjualanPakAldi

console.log(hitungTotalPenjualan(dataPenjualanPakAldi));

// EXEPECTED RESULT => 307
// 307 dari mana? dari setiap value property 'totalTerjual', yaitu 90 + 37 + 90 + 90
