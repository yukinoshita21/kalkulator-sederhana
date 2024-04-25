var hasilTambah = ''
var hasilKurang = ''
var hasilBagi = ''
var hasilKali = ''
var mauLagi = true

var con = confirm('apakah anda mau melakukan penghitungan kalkulasi?')


while ( con == true ) {

var pilih = prompt(' silahkan pilih [tambah,kurang,bagi,kali]')

if (pilih == 'tambah') {
var tambah1 = parseFloat(prompt('masukan angka tambah 1'))
var tambah2 = parseFloat(prompt('masukan angka tambah 2'))
hasilTambah = tambah1 + tambah2
alert('hasil penjumlahan anda adalah ' + hasilTambah)
} else if (pilih == 'kurang') {
var kurang1 = parseFloat(prompt('masukan angka kurang 1'))
var kurang2 = parseFloat(prompt('masukan angka kurang 2'))
hasilKurang = kurang1 - kurang2
alert('hasil pengurangan anda adalah ' + hasilKurang)
} else if (pilih == 'bagi') {
var bagi1 = parseFloat(prompt('masukan angka bagi 1'))
var bagi2 = parseFloat(prompt('masukan angka bagi 2'))
hasilBagi = bagi1 / bagi2
alert('hasil pembagian anda adalah ' + hasilBagi)
} else if (pilih == 'kali') {
var kali1 = parseFloat(prompt('masukan angka kali 1'))
var kali2 = parseFloat(prompt('masukan angka kali 2'))
hasilKali = kali1 * kali2
alert('hasil perkalian anda adalah ' + hasilKali)
} else {
alert('silahkan pilih pilihan yang tersedia, okay?')
}

var lagi = prompt('lagi atau udahan?');

if (lagi == 'lagi') {
    con = true;
  } else if (lagi.toLowerCase() == 'udahan') {
    con = confirm('Klik "Cancel" untuk keluar');
    if (con == false) {
      break; // Keluar dari perulangan
    }
  } else {
    alert('Pilih yang benar');
  }

}

