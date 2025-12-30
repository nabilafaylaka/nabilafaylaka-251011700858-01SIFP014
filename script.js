function updateDateTime() {
    const now = new Date();
    const hari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
    const bulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];

    document.getElementById("dateTime").innerHTML =
        `${hari[now.getDay()]}, ${now.getDate()} ${bulan[now.getMonth()]} ${now.getFullYear()} |
        ${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}:${now.getSeconds().toString().padStart(2,'0')}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();

function showContent(id) {
    document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

const audios = document.querySelectorAll(".audio");

function nextSong(index) {
    audios[index].pause();
    audios[index].currentTime = 0;
    let nextIndex = (index + 1) % audios.length;
    audios[nextIndex].play();
}