// Initialize Firebase 
var config = {
    apiKey: "AIzaSyATPKgucmsvnMfE657NNZhof8Wu18LKqc8",
    authDomain: "materi-ku.firebaseapp.com",
    databaseURL: "https://materi-ku.firebaseio.com",
    projectId: "materi-ku",
    storageBucket: "materi-ku.appspot.com",
    messagingSenderId: "1044309735530",
    appId: "1:1044309735530:web:73a4d9ab118324c179b213",
    measurementId: "G-4LGN1ENH94"
};

firebase.initializeApp(config);

let db , dataRef;

// referensi ke database
db = firebase.database();
dataRef = db.ref('mapel');
// menampilkan data ke halaman browser
const MateriPelajaran = () => {
    dataRef.on('value' , dataBerhasil , dataGagal);
}

const dataBerhasil = (data) => {
    let ambilData = document.getElementById("tampilData");
        data.forEach(function(konten) {
            // console.log(konten.val());
            let urlParam = new URLSearchParams(window.location.search);
            let idParam = urlParam.get("kategori");
            if(idParam){
                if(idParam == konten.val().Kategori){
                    // console.log(konten.val().Judul);
                    ambilData.innerHTML += `
                    <div class="col s12 m6 l4" style="padding-top:15px; padding-bottom: 10px;">
                        <div class="card" style="border-bottom: solid 2px #d81b60;">
                            <div class="card-image">
                                <a href="/detail.html?id=${konten.val().ID}"><img src="../images/icon.jpg" height="210px"></a>
                            </div>
                            <div class="card-content" style="margin: -10px -5px;">
                                <a href="/detail.html?id=${konten.val().ID}" style="hover:none;"><span class="card-title" style="font-size:15px; line-height: 16px;">${konten.val().Judul}</span></a>      
                            </div>
                        </div>
                    </div>`;
                }
            }
            
            else{
                console.log(konten.val().Kategori);
                ambilData.innerHTML += `
                <div class="col s12 m6 l4" style="padding-top:15px; padding-bottom: 10px; ">
                    <div class="card" style="border-bottom: solid 2px #d81b60;">
                        <div class="card-image">
                            <a href="/detail.html?id=${konten.val().ID}"><img src="../images/icon.jpg" height="210px"></a>
                        </div>
                        <div class="card-content" style="margin: -10px -5px;">
                            <a href="/detail.html?id=${konten.val().ID}"><span class="card-title" style="font-size:15px; line-height: 16px;">${konten.val().Judul}</span></a>      
                        </div>
                    </div>
                </div>`;
            }

    });
}

const dataGagal = (err) => {
  console.log(err);
}