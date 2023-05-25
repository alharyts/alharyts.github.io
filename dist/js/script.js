let stars = document.getElementById('stars');
let moon = document.getElementById('moons');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
});

const figure = document.getElementById('myQuotes');
    
window.addEventListener('scroll', function() {
    if (window.scrollY === 0) {
        figure.style.display = "block";
    } else {
        figure.style.display = "none";
    }
});

// dark mode
const html = document.querySelector('html');
const moons = document.querySelector('#moon')
const sunny = document.querySelector('#sun');
moons.addEventListener('click', function(){
  if(moons.checked){
    html.classList.add('dark');
    localStorage.theme = 'dark';
    sunny.classList.remove('sunny');
    mountains_behind.classList.remove('mountains_behind');
    mountains_front.classList.remove('mountains_front');
  }else{
    html.classList.remove('dark');
    localStorage.theme = 'light';
    sunny.classList.add('sunny');
    mountains_behind.classList.add('mountains_behind');
    mountains_front.classList.add('mountains_front');
  }
});

window.addEventListener('load', function() {
  const theme = localStorage.theme;
  if (theme === 'dark') {
    html.classList.add('dark');
    moons.checked = true;
    sunny.classList.remove('sunny');
    mountains_behind.classList.remove('mountains_behind');
    mountains_front.classList.remove('mountains_front');
  } else {
    html.classList.remove('dark');
    moons.checked = false;
    sunny.classList.add('sunny');
    mountains_behind.classList.add('mountains_behind');
    mountains_front.classList.add('mountains_front');
  }
});

