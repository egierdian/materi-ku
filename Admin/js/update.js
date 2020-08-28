let dbs , dataRefs;

// membuat id parameter
let urlParams = new URLSearchParams(window.location.search);
let idParams = urlParams.get("id");

// referensi ke database
dbs = firebase.database();
dataRefs = dbs.ref('mapel/' + idParams);

// Tambah data
let simpanData  = document.getElementById('Simpan');
let txtJudul    = document.getElementById('judul_field');
let txtIsi      = document.getElementById('isi_field');
let txtKtg      = document.getElementById('kategori');

simpanData.addEventListener('click' , function(e) {
    e.preventDefault();
    // menyimpan data
    dataRef.set({
        ID : idParams,
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
  console.log('Data berhasil diperbaharui!');  
}

function dataGagal() {
  console.log("isi data");
}