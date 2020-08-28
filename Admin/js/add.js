let db , dataRef;

let date = new Date();

let tahun = ""+date.getFullYear();
let iniId = tahun.substring(2) + (date.getMonth()<10?'0':'') + (date.getMonth() + 1)  + (date.getDate()<10?'0':'') + date.getDate() /* InIBATAS*/ + (date.getHours()<10?'0':'') + date.getHours() + (date.getMinutes()<10?'0':'') + date.getMinutes() + (date.getSeconds()<10?'0':'') + date.getSeconds();

// console.log(iniId);

// referensi ke database
db = firebase.database();
dataRef = db.ref('mapel/' + iniId);



// Tambah data
let simpanData  = document.getElementById('Simpan');
let txtJudul    = document.getElementById('judul_field');
let txtIsi      = document.getElementById('isi_field');
let txtKtg      = document.getElementById('kategori');


// const storage = firebase.storage();
simpanData.addEventListener('click' , function(e) {
  e.preventDefault();
  dataRef.set({
        ID : iniId,
        Judul : txtJudul.value,
        Isi : txtIsi.value,
        Kategori : txtKtg.value
  });

  window.alert('berhasil');
  window.location.href = '/admin/index.html';
});

// selain push , bisa juga set . tapi hanya untuk
dataRef.on('child_changed' , dataBerubah , dataGagal);

function dataBerubah() {
  alert('Data berhasil diperbaharui!');  
}

function dataGagal() {
  console.log("isi data");
}