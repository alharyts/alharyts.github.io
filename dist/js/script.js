// dark mode
const html = document.querySelector("html");
const rightBtn = document.querySelector("#rightBtn");
const portfolio = document.querySelector("#portfolio");
const night = document.querySelector("#night");
const afternoon = document.querySelector("#afternoon");

rightBtn.addEventListener("click", function (e) {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    afternoon.classList.remove("hidden");
    night.classList.add("hidden");
    localStorage.theme = "light";
  } else {
    html.classList.add("dark");
    afternoon.classList.add("hidden");
    night.classList.remove("hidden");
    localStorage.theme = "dark";
  }
});

const theme = localStorage.theme;

if (theme === "dark") {
  afternoon.classList.add("hidden");
  night.classList.remove("hidden");
  html.classList.add("dark");
} else {
  afternoon.classList.remove("hidden");
  night.classList.add("hidden");
  html.classList.remove("dark");
}

const experience = document.getElementById("btn-experience");
const education = document.getElementById("btn-education");
const barExperience = document.getElementById("bar-experience");
const barEducation = document.getElementById("bar-education");

experience.addEventListener("click", function () {
  experience.classList.add(
    "bg-emerald-600",
    "dark:bg-indigo-500",
    "text-white"
  );
  education.classList.remove(
    "bg-emerald-600",
    "dark:bg-indigo-500",
    "text-white"
  );
  education.classList.add("text-black");
  barEducation.classList.add("hidden");
  barExperience.classList.remove("hidden");
});

education.addEventListener("click", function () {
  education.classList.add("bg-emerald-600", "dark:bg-indigo-500", "text-white");
  education.classList.remove("text-black");
  experience.classList.remove(
    "bg-emerald-600",
    "dark:bg-indigo-500",
    "text-white"
  );
  experience.classList.add("text-black");
  barEducation.classList.remove("hidden");
  barExperience.classList.add("hidden");
});

// typing text
const texts = ["BackEnd", "FrontEnd", "FullStack"];
const typedText = document.getElementById("typed-text");

function typeAnimation() {
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];

    if (charIndex < currentText.length && !isDeleting) {
      typedText.textContent += currentText.charAt(charIndex);
      charIndex++;
    } else if (charIndex > 0 && isDeleting) {
      typedText.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      isDeleting = !isDeleting;
    }

    const typingSpeed = isDeleting ? 150 : 250;
    const delay = isDeleting ? 500 : 1000;

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, delay);
    } else if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(type, delay);
    } else {
      setTimeout(type, typingSpeed);
    }
  }

  type();
}

typeAnimation();

// gallery
const displayPct = document.getElementById("display-pct");
const picture = document.querySelectorAll(".picture");

displayPct.onclick = function(){
  displayPct.requestFullscreen();
}

picture.forEach(function (pct) {
  pct.addEventListener("click", function (e) {
    const activeElement = document.querySelector(".picture.active");

    if (activeElement) {
      activeElement.classList.remove("active");
    }

    e.target.classList.add("active");
    displayPct.setAttribute("src", e.target.src);
  });
});

// nav toggle
const toggleTarget = document.getElementById('toggleTarget');
const btnToggle = document.getElementById('nav-toggle');

btnToggle.addEventListener('click', function(){
  toggleTarget.classList.toggle('hidden');
});

document.addEventListener('click', function(event) {
  if (!event.target.closest('#nav-toggle')) {
    toggleTarget.classList.add('hidden');
  }
});



