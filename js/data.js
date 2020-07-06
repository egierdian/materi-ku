
// Initialize Firebase 
var config = {
    apiKey: "AIzaSyB5usrQKua0zDoUMWS-NoMf6wGoihAz4rE",
    authDomain: "warmat-9d32d.firebaseapp.com",
    databaseURL: "https://warmat-9d32d.firebaseio.com",
    projectId: "warmat-9d32d",
    storageBucket: "warmat-9d32d.appspot.com",
    messagingSenderId: "124927091557",
    appId: "1:124927091557:web:531ed441a700752f5df78c",
    measurementId: "G-KB1D9J96DN"
};
firebase.initializeApp(config);

var db , dataRef;

// referensi ke database
db = firebase.database();
dataRef = db.ref('products/data');
// menampilkan data ke halaman browser
function DataProduk() {
    dataRef.on('value' , dataBerhasil , dataGagal);
}

function dataBerhasil(data) {
    // console.log(data);
    var tampilkan = "";
    var ambilData = document.getElementById("tampilData");
        data.forEach(function(konten) {
            console.log(konten.val()); //output Bandung
            var str = konten.val().Image;
            var nama = konten.val().Name;
            // console.log(str);
            var hasil = str.replace(/\\/g, '');
            var replacenama = nama.replace(/"/g, '');
            // console.log(hasil);
            
            console.log(konten.val().ID);
            tampilkan += `<div class="col s6 m4 l3" style="padding-top:15px;">
            
                <div class="card" style="border-bottom: solid 2px #d81b60;">
                    <div class="card-image">
                        <img src="${hasil.replace(/""/g,'')}">
                    </div>
                    
                    <div class="card-content" style="margin-top: -15px;">
                        <a href="/detail.html?id=${konten.val().ID.replace(/"/g,'')}"><span class="card-title" style="font-size:16px; line-height: 16px;">${replacenama}</span></a>
                        <a class="btn btn-small disabled red">Rp. ${konten.val().Harga.replace(/"/g, '')}</a>         
                    </div>
                </div>
                </div>`;
    });
    ambilData.innerHTML = tampilkan;  
}

function dataGagal(err) {
  console.log(err);
}


// Menampilkan kategori 
var db_kategori , dataRef_kategori;

// referensi ke database
db_kategori = firebase.database();
dataRef_kategori = db_kategori.ref('cms/setting');
// menampilkan data ke halaman browser
function DataKategori() {
    dataRef_kategori.on('value' , dataKategoriBerhasil , dataKategoriGagal);
}
function dataKategoriBerhasil(data) {
    // console.log(data);
    var tampilkan = "";
    var ambilData = document.getElementById("tampilKategori");
        data.forEach(function(konten) {
            // console.log(konten.val()); //output data 
            var a = konten.val().Tag.replace(/"/g, '');
            if(a == "category") {
                console.log(konten.val());
                var image = konten.val().Image.replace(/\\/g, '');
                var imageJadi = image.replace(/,/g, '');
                tampilkan += `<div class="col s6 m3 l2" style="float:center; padding-top:15px;">
            
                <div class="card" style="border-bottom: solid 2px #d81b60;">
                    <div class="card-image">
                        <img src=${imageJadi.replace(/""/g,'')}">
                    </div>
                    
                    <div class="card-content" style="margin-top: -10px; margin-bottom:-15px; margin-left: -10px;">
                        <a href="/category.html?category=${konten.val().Name.replace(/"/g, '')}"><span class="card-title" style="font-size:12px; line-height:16px;">${konten.val().Name.replace(/"/g, '')}</span></a>       
                    </div>
                </div>
                </div>`;
            }
            
            
    });
    ambilData.innerHTML = tampilkan;
}

function dataKategoriGagal(err) {
  console.log(err);
}
