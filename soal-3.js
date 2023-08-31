function getAngkaTerbesarKedua(personName) {
  // tulis kode logic kamu didalam blok ini ya!

  // deklarasi variable result untuk hasil. max, dan min untuk variabel bantu
  let result;
  let max = -99999;
  let min = 99999;

  //   cek apakah tidak ada parameter ?
  if (personName == undefined) {
    // in print
    result = "ERROR : Tidak ada parameter yang di isikan";
  } else {
    // cek apakah parameter bukan berupa object ?
    if (typeof personName != "object") {
      // in print

      result = "ERROR : Invalid data type";
    } else {
      // perulangan untuk mendapat index array
      for (let i = 0; i < personName.length; i++) {
        // cek untuk mendapat nilai terbesar
        if (max < personName[i]) {
          // buat nilai terbesar
          max = personName[i];
        }

        if (min > personName[i]) {
          // buat nilai terbesar
          min = personName[i];
        }
      }

      // cek untuk mendapat nilai terbesar kedua
      for (let i = max - 1; i > min; i--) {
        // cek apakah nilai tersebut ada di array
        if (personName.includes(i)) {
          result = i;
          break;
        }
      }
    }
  }

  // kembalikan nilai
  return result;
}

// EXPECTED RESULT
// Ketika Function tersebut dipanggil

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
// EXPECTED OUTPUT :
// 8

console.log(getAngkaTerbesarKedua(0));
// EXPECTED OUTPUT :
// "ERROR : (Kamu jelasin ini error nya apa dan kenapa)"

console.log(getAngkaTerbesarKedua());
// EXPECTED OUTPUT :
// "ERROR : (Kamu jelasin ini error nya apa dan kenapa)"
