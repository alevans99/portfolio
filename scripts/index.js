//Allows us to access CSS variables
let root = document.documentElement;
let darkmode = true;

function switchViewMode() {
  if (darkmode) {
    root.style.setProperty('--main-background-color', '#fff');
    root.style.setProperty('--main-font-color', '#000');
    root.style.setProperty('--highlight-color', '#FA4950');
    root.style.setProperty('--highlight-hover-color', '#570005');

    root.style.setProperty('--button-background-color', '#FA4950');
    root.style.setProperty('--button-border-color', '#FA4950');
    root.style.setProperty('--button-hover-background-color', '#fff');
    root.style.setProperty('--button-hover-border-color', '#FA4950');
    root.style.setProperty('--button-hover-text-color', '#000');

    // root.style.setProperty('--nc-news-background', '#b4f6f4');
    // root.style.setProperty('--beatdrop-background', '#d068bb7e');
    // root.style.setProperty('--worth-starting-background', '#b7ceceb8');

    document.getElementById('dark-mode-image').src = 'images/hexagon_black.png';

    document.querySelectorAll('.github-image').forEach((element) => {
      element.src = 'images/github-dark.png';
    });
  } else {
    root.style.setProperty('--main-background-color', '#000');
    root.style.setProperty('--main-font-color', '#fff');
    root.style.setProperty('--highlight-color', '#FFA900');
    root.style.setProperty('--highlight-hover-color', '#ffe2a9');
    root.style.setProperty('--button-background-color', '#000');
    root.style.setProperty('--button-border-color', '#FFA900');
    root.style.setProperty('--button-hover-background-color', '#FFA900');
    root.style.setProperty('--button-hover-border-color', '#FFA900');
    root.style.setProperty('--button-hover-text-color', '#fff');

    // root.style.setProperty('--nc-news-background', '#2b041080');
    // root.style.setProperty('--beatdrop-background', '#3a15027e');
    // root.style.setProperty('--worth-starting-background', '#1c0f1382');

    document.getElementById('dark-mode-image').src = 'images/hexagon_white.png';
    document.querySelectorAll('.github-image').forEach((element) => {
      element.src = 'images/github-light.png';
    });
  }
  darkmode = !darkmode;
}

document.getElementById('dark-mode-switch').addEventListener('click', (e) => {
  switchViewMode();
});

document.querySelectorAll('.portfolio-preview-container').forEach((element) => {
  element.addEventListener('mouseover', (e) => {
    element
      .querySelectorAll('.portfolio-preview-overlay')[0]
      .classList.remove('hidden');
  });

  element.addEventListener('mouseleave', (e) => {
    element
      .querySelectorAll('.portfolio-preview-overlay')[0]
      .classList.add('hidden');
  });
});
