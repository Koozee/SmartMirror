document.addEventListener('DOMContentLoaded', function () {
    const alarmList = document.getElementById('alarm-list');
    const addAlarmBtn = document.getElementById('add-alarm-btn');
    const cancelAlarmBtn = document.getElementById('cancel-alarm-btn');
    const alarmTimeInput = document.getElementById('alarm-time');
    const alarmNameInput = document.getElementById('alarm-name');
    const setalarm = document.getElementById('setalarm');
    const setsalarm = document.getElementById('setsalarm');

    setalarm.addEventListener("click", () => {
        setsalarm.classList.remove("hidden");
    })
    cancelAlarmBtn.addEventListener("click", () => {
        setsalarm.classList.add("hidden");
        alarmTimeInput.value = '';
    })
    let alarmCounter = 1;

    addAlarmBtn.addEventListener('click', function () {
        const alarmTime = alarmTimeInput.value;
        const alarmName = alarmNameInput.value;
        if (alarmTime && alarmCounter <= 10) {
            const listItem = document.createElement('li');
            const namealarm = document.createElement('p');
            const timealarm = document.createElement('h2');
            const deleteBtn = document.createElement('button');
            namealarm.textContent = `${alarmName}`;
            timealarm.textContent = `${alarmTime}`;
            deleteBtn.textContent = 'Hapus';
            listItem.className = 'bg-sky-400 rounded-md p-1 mb-2 relative'
            namealarm.className = 'text-lg font-Montserrat'
            timealarm.className = 'text-2xl font-Montserrat'
            deleteBtn.className = 'font-Montserrat text-base text-red-500 hover:text-red-700 absolute right-0 px-3 top-2';
            deleteBtn.addEventListener('click', function () {
                alarmList.removeChild(listItem);
                alarmCounter--;
                addAlarmBtn.disabled = false;
                alarmTimeInput.disabled = false;
            });
            alarmList.appendChild(listItem);
            listItem.appendChild(namealarm);
            listItem.appendChild(timealarm);
            listItem.appendChild(deleteBtn);
            alarmTimeInput.value = '';
            alarmNameInput.value = '';
            setsalarm.classList.add("hidden");
            alarmCounter++;
        }

        if (alarmCounter > 10) {
            addAlarmBtn.disabled = true;
            alarmTimeInput.disabled = true;
        }
    });
});

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