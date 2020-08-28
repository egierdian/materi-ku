let db , dataRef, dataRefss, dbss;

// ini id
let date = new Date();
let tahun = ""+date.getFullYear();
let iniId = tahun.substring(2) + (date.getMonth()<10?'0':'') + (date.getMonth() + 1)  + (date.getDate()<10?'0':'') + date.getDate() /* InIBATAS*/ + (date.getHours()<10?'0':'') + date.getHours() + (date.getMinutes()<10?'0':'') + date.getMinutes() + (date.getSeconds()<10?'0':'') + date.getSeconds();

// membuat id parameter
let urlParam = new URLSearchParams(window.location.search);
let idParam = urlParam.get("id");

// database
db = firebase.database();
dataRef = db.ref('mapel/'+ idParam);

// menampilkan data ke halaman browser
dataRef.on('value' , dataBerhasil , dataGagal);

function dataBerhasil(data){
    // let simpanData  = document.getElementById('Simpan');
    let txtJudul    = document.getElementById('judul_field');
    let txtIsi      = document.getElementById('isi_field');
    let txtKtg      = document.getElementById('kategori');

    // konversi data
    let dataJudul   = data.val().Judul;
    let dataIsi     = data.val().Isi;
    let dataKtg     = data.val().Kategori;

    // initialize
    txtJudul.value  = dataJudul;
    txtIsi.value    = dataIsi;
    txtKtg.value    = dataKtg;
}

function dataGagal(err){
  console.log(err);
}

