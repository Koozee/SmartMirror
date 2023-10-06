const darktoogle = document.querySelector('.input');
const html = document.querySelector('html');
const info1 = document.getElementById('info1');
const vlamp1 = document.getElementById('vlamp1');
const vlamp1txt = document.getElementById('vlamp1txt');
const vlamp2 = document.getElementById('vlamp2');
const vlamp2txt = document.getElementById('vlamp2txt');
const vjarak = document.getElementById('vjarak');
const vjaraktxt = document.getElementById('vjaraktxt');
const vcahaya = document.getElementById('vcahaya');
const vcahayatxt = document.getElementById('vcahayatxt');
const vlrgb = document.getElementById('vlrgb');
const vlrgbtxt = document.getElementById('vlrgbtxt');

//navbar fixed
const header = document.querySelector('header');
const fixnav = header.offsetTop;
window.onscroll = function () {

    if (window.pageYOffset > fixnav) {
        header.classList.add('navbar-fixed')
        // navigation.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
        // navigation.classList.remove('navbar-fixed')
    }
}

// dark mode toggle
darktoogle.addEventListener('click', function () {
    const sun = document.getElementById('sun')
    const moon = document.getElementById('moon')
    if (darktoogle.checked) {
        html.classList.add('dark')
        sun.classList.add('hidden')
        moon.classList.remove('hidden')
    } else {
        html.classList.remove('dark')
        sun.classList.remove('hidden')
        moon.classList.add('hidden')
    }

});

// power button
var valuepower = 0;
power.addEventListener('click', function () {
    const poweroff = document.getElementById('poweroff');
    const poweron = document.getElementById('poweron');
    const navc = document.getElementById('navcontrol');
    const volt0 = document.getElementById('volt0');
    const volt5 = document.getElementById('volt5');
    const statusvolt = document.getElementById('statusvolt');
    if (!valuepower) {
        valuepower = 1
        poweron.classList.remove('hidden')
        poweroff.classList.add('hidden')
        navc.classList.add('bg-header')
        navc.classList.remove('bg-nav')
        wifi.classList.remove('pointer-events-none')
        bluetooth.classList.remove('pointer-events-none')
        volt5.classList.remove('hidden')
        volt0.classList.add('hidden')
        statusvolt.innerText = "5 VOLT"
    } else {
        valuepower = 0
        valuewifi = 0
        valuebluetooth = 0
        poweron.classList.add('hidden')
        poweroff.classList.remove('hidden')
        navc.classList.remove('bg-header')
        navc.classList.add('bg-nav')
        wifi.classList.add('pointer-events-none')
        bluetooth.classList.add('pointer-events-none')
        wifion.classList.add('hidden')
        wifioff.classList.remove('hidden')
        statuswifi.innerText = 'Mati'
        bton.classList.add('hidden')
        btoff.classList.remove('hidden')
        statusbt.innerText = 'Mati'
        volt5.classList.add('hidden')
        volt0.classList.remove('hidden')
        statusvolt.innerText = "0 VOLT"
    }

})

// wifi button
var valuewifi = 0;
const wifi = document.getElementById('wifi')
const wifioff = document.getElementById('wifioff')
const wifion = document.getElementById('wifion')
const statuswifi = document.getElementById('statuswifi')
wifi.addEventListener('click', function () {
    if (!valuewifi) {
        valuewifi = 1
        wifion.classList.remove('hidden')
        wifioff.classList.add('hidden')
        statuswifi.innerText = 'Hidup'
    } else {
        valuewifi = 0
        wifion.classList.add('hidden')
        wifioff.classList.remove('hidden')
        statuswifi.innerText = 'Mati'
    }

})
// bluetooth button
var valuebluetooth = 0;
const bluetooth = document.getElementById('bluetooth')
const btoff = document.getElementById('btoff')
const bton = document.getElementById('bton')
const statusbt = document.getElementById('statusbt')
bluetooth.addEventListener('click', function () {
    if (!valuebluetooth) {
        valuebluetooth = 1
        bton.classList.remove('hidden')
        btoff.classList.add('hidden')
        statusbt.innerText = 'Hidup'
    } else {
        valuebluetooth = 0
        bton.classList.add('hidden')
        btoff.classList.remove('hidden')
        statusbt.innerText = 'Mati'
    }

})

// creating a function and calling it in every seconds
setInterval(() => {
    let date = new Date(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        day = date.getDay(),
        tanggal = date.getDate(),
        year = date.getFullYear(),
        month = date.getMonth() ;
    nameday = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    namemonth = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "August", "September", "Oktober", "November,", "Desember"]
    namedaystring = nameday[day];
    namemonthstring = namemonth[month];
    format = namedaystring + "," + " " + tanggal + " " + namemonthstring + " " + year
    let d;
    d = hour < 12 ? "AM" : "PM"; //if hour is smaller than 12, than its value will be AM else its value will be pm
    // hour = hour > 12 ? hour - 12 : hour; //if hour value is greater than 12 than 12 will subtracted ( by doing this we will get value till 12 not 13,14 or 24 )
    // hour = hour == 0 ? (hour = 12) : hour; // if hour value is  0 than it value will be 12

    // adding 0 to the front of all the value if they will less than 10
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    document.getElementById("numHour").innerText = hour;
    document.getElementById("numMin").innerText = min;
    document.getElementById("numSec").innerText = sec;
    document.getElementById("dates").innerText = format;
    // document.getElementById(".am_pm").innerText = d;
}, 1000); // 1000 milliseconds = 1s

rgb.addEventListener("input", () => {
    vlrgbtxt.textContent = `${rgb.value} %`;
});
vlamp1.addEventListener("input", () => {
    vlamp1txt.textContent = `${vlamp1.value} %`;
})
vlamp2.addEventListener("input", () => {
    vlamp2txt.textContent = `${vlamp2.value} %`;
})
vjarak.addEventListener("input", () => {
    vjaraktxt.textContent = `${vjarak.value} cm`;
})
vcahaya.addEventListener("input", () => {
    vcahayatxt.textContent = `${vcahaya.value} Cd`;
})
