const header = document.querySelector('header');
const nav = document.querySelector('nav');
const fixnav = header.offsetTop;
const darktoogle = document.querySelector('.input');
const html = document.querySelector('html');
const power = document.getElementById('power');
const wifi = document.getElementById('wifi');
const bluetooth = document.getElementById('bluetooth');
const statuswifi = document.getElementById('statuswifi');
const statusbt = document.getElementById('statusbt');
const onPower = document.querySelector('.onPower');
const offPower = document.querySelector('.offPower');
const wifiOff = document.querySelector('.wifiOff');
const wifiOn = document.querySelector('.wifiOn');
const btOn = document.querySelector('.btOn');
const btOff = document.querySelector('.btOff');
const bgwifi = document.getElementById('bgwifi');
const bgbt = document.getElementById('bgbt');
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



var poweron = 0;
var powerwifion = 0;
var powerbton = 0;
//navbar fixed
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
    if (darktoogle.checked) {
        html.classList.add('dark')

    } else {
        html.classList.remove('dark')
    }

});

// power button
power.addEventListener('click', function () {
    if (!poweron) {
        poweron = 1
        onPower.classList.remove('hidden')
        offPower.classList.add('hidden')
        bgwifi.classList.remove('pointer-events-none')
        bgbt.classList.remove('pointer-events-none')
    } else {
        poweron = 0
        onPower.classList.add('hidden')
        offPower.classList.remove('hidden')
        bgwifi.classList.add('pointer-events-none')
        bgbt.classList.add('pointer-events-none')
        wifiOn.classList.add('hidden')
        wifiOff.classList.remove('hidden')
        bgwifi.style.backgroundColor = '#8EA7E9'
        statuswifi.innerText = 'Mati'
        btOn.classList.add('hidden')
        btOff.classList.remove('hidden')
        bgbt.style.backgroundColor = '#8EA7E9'
        statusbt.innerText = 'Mati'
    }

})
// wifi button
wifi.addEventListener('click', function () {
    if (!powerwifion) {
        powerwifion = 1
        wifiOn.classList.remove('hidden')
        wifiOff.classList.add('hidden')
        bgwifi.style.backgroundColor = 'blue'
        statuswifi.innerText = 'Hidup'
    } else {
        powerwifion = 0
        wifiOn.classList.add('hidden')
        wifiOff.classList.remove('hidden')
        bgwifi.style.backgroundColor = '#8EA7E9'
        statuswifi.innerText = 'Mati'
    }

})
// bluetooth button
bluetooth.addEventListener('click', function () {
    if (!powerbton) {
        powerbton = 1
        btOn.classList.remove('hidden')
        btOff.classList.add('hidden')
        bgbt.style.backgroundColor = 'blue'
        statusbt.innerText = 'Hidup'
    } else {
        powerbton = 0
        btOn.classList.add('hidden')
        btOff.classList.remove('hidden')
        bgbt.style.backgroundColor = '#8EA7E9'
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
        Dayy = date.getDate(),
        year = date.getFullYear(),
        month = date.getMonth() + 1;
    nameday = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    namedaystring = nameday[day];
    format = Dayy + '/' + month + '/' + year
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
    document.getElementById("day").innerText = namedaystring;
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
