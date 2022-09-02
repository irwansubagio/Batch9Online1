// tangkap element form
let absensi_form = document.getElementById('absensi_form');
let root = document.getElementById('root');

// kita buat array unrtuk menampung data absensi
let absensi_data = [];

// tambahakan event listerer submit ke element absensi_form
absensi_form.addEventListener('submit', (event) => {
  // mencegah form dari reload page
  event.preventDefault();

  let fullname = event.target.fullname.value;

  // validasi mini
  if (fullname == '') {
    alert('Silahkan Masukkan Nama Lengkap');
    return;
  }

  // push data ke dalam array absensi data
  absensi_data.push({
    nama_lengkap: fullname,
    waktu: new Date().toLocaleTimeString(),
    tanggal: new Date().toLocaleDateString(),
  });

  // reset input field
  event.target.fullname.value = '';

  // console.info(absensi_data);
  // panggil function to html
  renderToHtml();
});

// function untuk render data array ke html div root
function renderToHtml() {
  // reset elemet div id=root
  root.innerHTML = '';
  // mapping array to html element
  absensi_data.forEach((e, i) => {
    root.innerHTML += `
    <div class="card" draggable="true" ondragend="handleDelete(${i})">
      <span>${i + 1}. &nbsp; ${e.nama_lengkap} </span>
      <span> ${e.waktu} ${e.tanggal} </span> 
    </div>
    `;
  });
}

// function handle delete
function handleDelete(index) {
  // delete 1 data dari array
  absensi_data.splice(index, 1);

  // render kembali data dalam array ke htmml
  renderToHtml();
}
