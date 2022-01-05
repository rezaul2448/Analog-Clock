function analogClock() {
  const hourEl = document.querySelector(".hour");
  const minEl = document.querySelector(".min");
  const secEl = document.querySelector(".sec");
  //const clockEl = document.querySelector(".clock");

  const date = new Date();
  const hourDeg = (date.getHours() / 12) * 360 - 90;
  const minDeg = (date.getMinutes() / 60) * 360 - 90;
  const secDeg = (date.getSeconds() / 60) * 360 - 90;
  const clockDeg = (date.getSeconds() / 60) * 360 - 90;

  hourEl.style.transform = `rotate(${hourDeg}deg)`;
  minEl.style.transform = `rotate(${minDeg}deg)`;
  secEl.style.transform = `rotate(${secDeg}deg)`;
  clockEl.style.transform = `rotate(${clockDeg}deg)`;

  setInterval(analogClock, 1000);
}
analogClock();
