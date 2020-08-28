
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

var db , dataRef;

// referensi ke database
db = firebase.database();
dataRef = db.ref('mapel');

console.log(dataRef);

// menampilkan data ke halaman browser
dataRef.on('value' , dataBerhasil , dataGagal);

function dataBerhasil(data) {
    let urlParam = new URLSearchParams(window.location.search);
    let idParam = urlParam.get("id");
    let tampilkan = "";
    var ambilData = document.getElementById("body-content");

        data.forEach(function(konten) {
            var c = konten.val().ID;
            if(c == idParam){
            tampilkan += `
                        <div class="row"> 
                            <div class="col l12 m12 s12" style="padding-top:10px;">
                                <div class="card" >
                                    <div class="card-content">
                                        <h5>${konten.val().Judul}</h5>
                                        <br/>
                                        <p>
                                        ${konten.val().Isi}
                                        </p>
                                    </div>
                                </div>
                                
                            </div>  
                        </div>`;
            }
        });
    ambilData.innerHTML = tampilkan;  
}

function dataGagal(err) {
  console.log(err);
}