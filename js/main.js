let nums = document.querySelectorAll(".box .num");
let section = document.querySelector(".stats");
let started = false;
let scroll = document.querySelector(".scroll");

function startCount(element) {
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    element.textContent++;
    if (element.textContent === goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 250) {
    if (!started) {
      nums.forEach((num) => {
        startCount(num);
      });
      started = true;
    }
  } else if (window.scrollY >= sec.offsetTop - 250) {
    if (!begin) {
      spans.forEach((span) => {
        start(span);
      });
      progs.forEach((element) => {
        element.style.width = element.dataset.goal;
      });
    }
    begin = true;
  }
  if (window.scrollY >= 1000) {
    scroll.style.right = "20px";
  } else {
    scroll.style.right = "-50px";
  }
};
scroll.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

let progs = document.querySelectorAll(".prog span");
let spans = document.querySelectorAll(".skills .skill .numa");
let sec = document.querySelector(".skills");
let begin = false;

function start(element) {
  let target = element.dataset.goal;
  let cour = setInterval(() => {
    element.textContent++;
    if (element.textContent === target) {
      clearInterval(cour);
    }
  }, 1500 / target);
}

let countdowntime = new Date("31 Dec,2022 23:59:59").getTime();
let day = document.querySelector(".days");
let secs = document.querySelector(".seconds");
let mins = document.querySelector(".minutes");
let hours = document.querySelector(".hours");

let timer = setInterval(() => {
  let dateNow = new Date().getTime();

  let datediff = countdowntime - dateNow;

  let days = Math.floor(datediff / (1000 * 60 * 60 * 24));
  days < 10 ? (day.innerHTML = `0${days}`) : (day.innerHTML = days);

  let hrs = Math.floor((datediff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  hrs < 10 ? (hours.innerHTML = `0${hrs}`) : (hours.innerHTML = hrs);

  let mns = Math.floor((datediff % (1000 * 60 * 60)) / (1000 * 60));
  mns < 10 ? (mins.innerHTML = `0${mns}`) : (mins.innerHTML = mns);

  let scs = Math.floor((datediff % (1000 * 60)) / 1000);
  scs < 10 ? (secs.innerHTML = `0${scs}`) : (secs.innerHTML = scs);

  day.innerHTML = days;
  hours.innerHTML = hrs;
  if ((datediff = 0)) {
    clearInterval(timer);
  }
}, 1000);

const un = document.querySelector(".unique");
un.style.color = "blue";
