function changeWord(selectedText, changedText, text) {
  // tulis kode logic kamu didalam blok ini ya!

  // Pisahkan text menjadi index-index array
  let newText = text.split(" ");

  // Perulangan untuk mengecek apakah kata yang terdapat di array sama dengan yang ingin diubah
  for (let i = 0; i < newText.length; i++) {
    // ambil index text yang ingin diubah
    if (newText[i] == selectedText) {
      // ubah kata dari index tersebut
      newText[i] = changedText;
    }
  }

  // kembalikan nilai dengan mengubah array menjadi string
  return newText.join(" ");
}

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

// EXPECTED RESULT
// Ketika function tersebut dipanggil dengan variabel kalimat1
console.log(changeWord("mencintai", "membenci", kalimat1));
// Maka output yang harus keluar adalah
// => 'Andini sangat membenci kamu selamanya'

// Ketika function tersebut dipanggil dengan variabel kalimat2
console.log(changeWord("bromo", "semeru", kalimat2));
// Maka output yang harus keluar adalah
// => 'Gunung semeru tak akan mampu menggambarkan besarnya cintaku padamu'
