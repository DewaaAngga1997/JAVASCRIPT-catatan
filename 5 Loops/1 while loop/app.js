// loop sementara
// Perulangan while melewati blok kode sebagai
// selama kondisi yang ditentukan benar.
// jika kita ingin melakukan sesuatu berulang kali kita bisa menggunakannya

// infinite while loop
// while(true){
//  console.log(1)
// }

// Blocked while loop
// while(false){
//     console.log(2)
// }

// real example
var count = 0;
while (count < 5) {
  // kondisi
  // untuk memutus loop kita perlu melakukan sesuatu
  count++;
  console.log('count', count);

  // gunakan pada contoh kata nyata
  document.getElementById('while').innerHTML += `Student : ${count} <br>`;
}

// gunakan kata kunci lanjutkan untuk melewati putaran tertentu
var count = 0;
while (count < 5) {
  count++;
  if (count == 3) {
    continue;
  } // kode berikutnya setelah melanjutkan tidak akan dieksekusi
  console.log('count', count);
}

// break the loop
// use condetion
var count = 0;
while (count < 5) {
  var el = document.getElementById('while');
  if (count == 3) {
    break;
  } else {
    el.innerHTML += `Count : ${count} <br>`;
  }
  count++;
}

// do while
var i = 0;
do {
  i++;
  document.getElementById('while').innerHTML += `i value ${i}`;
} while (false);
// jika kondisi tidak benar akan mengeksekusi code terlebih dahulu
// kemudian akan memblokir

var n = 0;
do {
  n++;
  document.getElementById('while').innerHTML += `n value ${n} <br>`;
} while (n < 5);
