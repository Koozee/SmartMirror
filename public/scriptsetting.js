// dark mode toggle
const darktoogle = document.querySelector('.input');
const html = document.querySelector('html');
darktoogle.addEventListener('click', function () {
    if (darktoogle.checked) {
        html.classList.add('dark')
    } else {
        html.classList.remove('dark')
    }

});

const setwifi = document.getElementById('setwifi')
const setswifi = document.getElementById('setswifi')
var settwifi = 0
setwifi.addEventListener("click", function () {
    if (!settwifi) {
        settwifi = 1
        setswifi.classList.remove("hidden")
    } else {
        settwifi = 0
        setswifi.classList.add("hidden")

    }
})

const setbt = document.getElementById('setbt')
const setsbt = document.getElementById('setsbt')
var settbt = 0
setbt.addEventListener("click", function () {
    if (!settbt) {
        settbt = 1
        setsbt.classList.remove("hidden")
    } else {
        settbt = 0
        setsbt.classList.add("hidden")

    }
})
const setacc = document.getElementById('setacc')
const setsacc = document.getElementById('setsacc')
var settacc = 0
setacc.addEventListener("click", function () {
    if (!settacc) {
        settacc = 1
        setsacc.classList.remove("hidden")
    } else {
        settacc = 0
        setsacc.classList.add("hidden")

    }
})