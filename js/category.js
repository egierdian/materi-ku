
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

console.log(dataRef);

// menampilkan data ke halaman browser
dataRef.on('value' , dataBerhasil , dataGagal);

function dataBerhasil(data) {
    // console.log(data);
    let urlParam = new URLSearchParams(window.location.search);
    let idParam = urlParam.get("category");
    console.log(idParam);
    var tampilkan = "";
    var ambilData = document.getElementById("body-content");
        console.log(data.val());
        //
        data.forEach(function(konten) {
            var c = konten.val().Category.replace(/"/g, '');
            if(c == idParam){
                console.log(konten.val());
                var str = konten.val().Image;
                var nama = konten.val().Name;
                // console.log(str);
                var hasil = str.replace(/\\/g, '');
                var replacenama = nama.replace(/"/g, '');
                // console.log(hasil);
                
                console.log(konten.val().ID);
                tampilkan += `
                    <div class="card" style="border-bottom: solid 2px #d81b60;">
                        <div class="card-image">
                            <img src="${hasil.replace(/""/g,'')}">
                        </div>
                        <div class="card-content" style="margin-top: -15px;">
                            <a href="/detail.html?id=${konten.val().ID.replace(/"/g,'')}"><span class="card-title" style="font-size:16px; line-height: 16px;">${replacenama}</span></a>
                            <a class="btn btn-small disabled red">Rp. ${konten.val().Harga.replace(/"/g, '')}</a>         
                        </div>
                    </div>`;
            }
            
    });
    ambilData.innerHTML = tampilkan;  
}

function dataGagal(err) {
  console.log(err);
}
