//function list mobile

function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

document.querySelectorAll("#navMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("navMenu").classList.remove("show");
  });
});

document.addEventListener("click", function (e) {
  const menu = document.getElementById("navMenu");
  const icon = document.querySelector(".menu-icon");

  if (!menu.contains(e.target) && !icon.contains(e.target)) {
    menu.classList.remove("show");
  }
});

//Function Nama
function sapaan() {
  let namaTersimpan = sessionStorage.getItem("namaUser");

  if (!namaTersimpan) {
    let nama = prompt("Silakan masukkan nama Anda:", "");

    if (nama === null || nama === "") {
      nama = "Guest";
    }

    sessionStorage.setItem("namaUser", nama);
    namaTersimpan = nama;
  }

  const elemenNama = document.getElementById("Nama-User");
  if (elemenNama) {
    elemenNama.innerText = namaTersimpan;
  }
}

sapaan();

//Massage Us
const tombolSubmit = document.querySelector(".Tombol-Kirim");

if (tombolSubmit) {
  tombolSubmit.addEventListener("click", function (e) {
    e.preventDefault();

    const nama = document.getElementById("input-nama").value;
    const tanggal = document.getElementById("input-tanggal").value;
    const pesan = document.getElementById("input-pesan").value;

    const genderTerpilih = document.querySelector(
      'input[name="gender"]:checked',
    );
    const gender = genderTerpilih ? genderTerpilih.value : "-";

    const waktuSekarang = new Date().toLocaleString("id-ID", {
      dateStyle: "full",
      timeStyle: "short",
    });

    if (nama === "" || pesan === "") {
      alert("Nama dan Pesan tidak boleh kosong ya!");
      return;
    }

    document.getElementById("time-res").innerText = waktuSekarang;
    document.getElementById("name-res").innerText = nama;
    document.getElementById("date-res").innerText = tanggal;
    document.getElementById("gender-res").innerText = gender;
    document.getElementById("msg-res").innerText = pesan;

    alert(
      "Terima kasih " + nama + ", pesan Anda sudah tampil di kotak sebelah!",
    );
  });
}
