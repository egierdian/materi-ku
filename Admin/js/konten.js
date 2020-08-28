let db , dataRef;

// referensi ke database
db = firebase.database();
dataRef = db.ref('mapel');
// menampilkan data ke halaman browser

dataRef.on('value' , dataBerhasil , dataGagal);

function dataBerhasil(data){
    let tampilkan = "";
    let tampilData ="";
    let ambilData = document.getElementById("data-show");
        data.forEach(function(konten) {
            console.log(konten.val());
            tampilData += `
            
            <tr>
                <td>${konten.val().Judul}</td>
                <td>${konten.val().Kategori}</td>
                <td width="20%">
                    <a class="waves-effect orange btn-small" href="edit.html?id=${konten.val().ID}">Ubah</a>
                    <a class="waves-effect red darken-1 btn-small" onclick="hapus(${konten.val().ID})">Hapus</a>
                </td>
            </tr>
            `;
    });
    tampilkan = `
    <table class="highlight">
        <thead>
        <tr>
            <th>Judul</th>
            <th>Kategori</th>
            <th>Aksi</th>
        </tr>
        </thead>
        <tbody>
        ${tampilData}
        </tbody>
    </table>
    `;
    ambilData.innerHTML = tampilkan;  
}

function dataGagal(err){
  console.log(err);
}

function hapus(ID){
    var cek_hapus = confirm('Apakah anda yakin ingin menghapus data ?');
    if (cek_hapus) {
        // hapus data produk
        dataRef.child(ID).remove();
    }
}
// menampilkan data ke halaman browser
dataRef.on('child_removed' , dataDihapus , dataGagal);
function dataDihapus() {
    alert('Data berhasil dihapus !');  
}