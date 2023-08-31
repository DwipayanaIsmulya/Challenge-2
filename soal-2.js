const checkTypeNumber = (givenNumber) => {
  // tulis kode logic kamu didalam blok ini ya!

  // deklarasi result
  let result;
  // cek jika givenNumber tidak diisi parameter
  if (givenNumber == undefined) {
    // in print
    result = "Error: Bro where is the parameter?";
  } else {
    // cek jika givenNumber tipe datanya bukan number
    if (typeof givenNumber != "number") {
      // in print
      result = "Error: Invalid data type";
    } else {
      // cek jika givenNumber habis dibagi 2 maka
      if (givenNumber % 2 == 0) {
        // in print
        result = "GENAP";
        // cek jika givenNumber tidak habis dibagi 2 maka
      } else if (givenNumber % 2 == 1) {
        // in print
        result = "GANJIL";
      }
    }
  }

  // kembalikan nilai result
  return result;
};

// EXPECTED RESULT
// Ketika function tersebut dipanggil
console.log(checkTypeNumber(10)); // OUTPUT yang keluar => "GENAP"
console.log(checkTypeNumber(3)); // OUTPUT yang keluar => "GANJIL"
console.log(checkTypeNumber("3")); // OUTPUT yang keluar => "Error: Invalid data type"
console.log(checkTypeNumber({})); // OUTPUT yang keluar => "Error: Invalid data type"
console.log(checkTypeNumber([])); // OUTPUT yang keluar => "Error: Invalid data type"
console.log(checkTypeNumber()); // OUTPUT yang keluar => "Error: Bro where is the parameter?"
