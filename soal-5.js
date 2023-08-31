const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

// BERIKUT ADALAH CONTOH OBJECT YANG HARUS DI RETURN PADA FUNCTION YANG AKAN KAMU BUAT
// SEMUA VALUE PADA PROPERTI DIBAWAH INI ADALAH CONTOH DATA SAJA,
// JADI ITU BUKAN PERHITUNGAN YANG SEBENARNYA

// PADA PROPERTI totalKeuntungan dan totalModal, NILAI YANG DIHASILKAN HARUS DALAM
// BERUPA FORMAT RUPIAH, CONTOH totalKeuntungan 14650000 DI JADIKAN FORMAT RUPIAH
// MENJADI 'Rp. 14.650.000'

// {
//     totalKeuntungan: 'Rp. 10.000.000', // harus dalam format rupiah
//     totalModal: 'Rp. 6.000.000', // harus dalam format rupiah
//     presentaseKeuntungan: '60%', // presentase keuntungan berdasarkan totalModal dan totalJual
//     produkBukuTerlaris: 'BUKU TERLARIS BERDASARKAN DATA DIATAS', // nama product yang paling banyak dijual
//     penulisTerlaris: 'PENULIS TERLARIS BERDASARKAN DATA DIATAS', // nama penulis bukunya paling banyak dijual
// }

function formatRupiah(bilangan) {
  // deklarasi variabel dari integer ke string
  let number_string = bilangan.toString(),
    // mengambil dengan modulus ukuran string menjadi 3 ukuran 3 ukuran
    sisa = number_string.length % 3,
    // mengambil sisa supaya bisa dibagi per ribuan
    rupiah = number_string.substr(0, sisa),
    // mengambil per 3 digit
    ribuan = number_string.substr(sisa).match(/\d{3}/g);

  if (ribuan) {
    // jika ada sisa maka gunakan separator . untuk memisahkan per 3 digit dan untuk menghindari . di depan bilangan
    separator = sisa ? "." : "";
    // gabungkan sisa dengan ribuan
    rupiah += separator + ribuan.join(".");
  }

  return rupiah;
}

function getInfoPenjualan(dataPenjualan) {
  // tulis kode logic kamu didalam blok ini ya!

  // deklarasi variabel bantu
  let totalKeuntungan = 0,
    totalModal = 0,
    presentaseKeuntungan = 0,
    maxBuku = -99999,
    maxPenulis = -99999;

  // deklarasi sebuah object sebagai result
  const result = {
    totalKeuntungan: "",
    totalModal: "",
    presentaseKeuntungan: "",
    produkBukuTerlaris: "",
    penulisTerlaris: "",
  };

  // lakukan validasi tipe data object/array
  if (typeof dataPenjualan != "object") {
    // in print
    result = "ERROR : Invalid data type";
  } else {
    // lakukan perulangan untuk mengecek seberapa banyak jumlah array dan mengakses masing masing objectnya
    for (let i = 0; i < dataPenjualan.length; i++) {
      // perhitungan totalKeuntungan untuk keseluruhan object
      totalKeuntungan +=
        dataPenjualan[i].hargaJual * dataPenjualan[i].totalTerjual;

      // perhitungan totalModal untuk keseluruhan object
      totalModal +=
        dataPenjualan[i].hargaBeli *
        (dataPenjualan[i].totalTerjual + dataPenjualan[i].sisaStok);

      // perhitungan nama product yang paling banyak dijual
      if (maxBuku < dataPenjualan[i].totalTerjual) {
        maxBuku = dataPenjualan[i].totalTerjual;
        // insert in object
        result.produkBukuTerlaris = dataPenjualan[i].namaProduk;
      }

      // perhitungan nama penulis bukunya paling banyak dijual
      if (maxPenulis < dataPenjualan[i].totalTerjual) {
        maxPenulis = dataPenjualan[i].totalTerjual;
        // insert in object
        result.penulisTerlaris = dataPenjualan[i].penulis;
      }
    }

    // perhitungan presentase keuntungan berdasarkan totalModal dan totalJual
    presentaseKeuntungan = ((totalKeuntungan - totalModal) / totalModal) * 100;

    // insert totalKeuntungan, totalModal, dan presentaseKeuntungan ke object
    result.totalKeuntungan = "Rp. " + formatRupiah(totalKeuntungan);
    result.totalModal = "Rp. " + formatRupiah(totalModal);
    result.presentaseKeuntungan = presentaseKeuntungan.toFixed(1) + "%";

    // kembalikan nilai result
    return result;
  }
}

// EXPECTED RESULT
// Ketika function tersebut dipanggil dengan variabel dataPenjualanNovel

console.log(getInfoPenjualan(dataPenjualanNovel));
// EXPECTED RESULT => OBJECT dengan format seperti yang disebutkan diatas
