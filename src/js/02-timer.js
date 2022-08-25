import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

console.log()
const buttonStart = document.querySelector('[data-start]');
let dataDays = document.querySelector('[data-days]');
let dataHours = document.querySelector('[data-hours]');
let dataMinutes = document.querySelector('[data-minutes]');
let dataSeconds = document.querySelector('[data-seconds]');

buttonStart.setAttribute('disabled', "");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 0.1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (Date.parse(selectedDates[0]) < Date.parse(options.defaultDate)) {
      alert("Please choose a date in the future");
    } else {
      buttonStart.removeAttribute('disabled');
    }

    let ms = Date.parse(selectedDates[0]) - Date.parse(options.defaultDate);

    function onstartTimer(evt) {
      const timerId = setInterval(() => {
        ms -= 1000;
        console.log(ms);

        function addLeadingZero(value) {
          dataDays.textContent = String(convertMs(ms).days).padStart(value, '0');
          dataHours.textContent = String(convertMs(ms).hours).padStart(value, '0');
          dataMinutes.textContent = String(convertMs(ms).minutes).padStart(value, '0');
          dataSeconds.textContent = String(convertMs(ms).seconds).padStart(value, '0');
        }
        addLeadingZero(2);

        function convertMs(ms) {
          const second = 1000;
          const minute = second * 60;
          const hour = minute * 60;
          const day = hour * 24;

          // Remaining days
          const days = Math.floor(ms / day);
          // Remaining hours
          const hours = Math.floor((ms % day) / hour);
          // Remaining minutes
          const minutes = Math.floor(((ms % day) % hour) / minute);
          // Remaining seconds
          const seconds = Math.floor((((ms % day) % hour) % minute) / second);

          return {days, hours, minutes, seconds};
        }
        convertMs(ms);

        if (ms === 0) {
          clearTimeout(timerId)

        }
      }, 1000);
    }
    buttonStart.addEventListener('click', onstartTimer);
    },
};
const deltaTimePickerFlat = flatpickr("#datetime-picker", options);














