//Allows us to access CSS variables
let root = document.documentElement;
const sessionMode = JSON.parse(sessionStorage.getItem('darkMode'))
let darkmode = sessionMode !== null ? sessionMode : true
const hexSwitch = document.getElementById(`dark-mode-switch`)
const hexImage = document.getElementById('dark-mode-image')
const gitHubImages = document.querySelectorAll('.github-image')

const schemeColors = {
  black: '#fff',
  white: '#000',
  gold: '#FA4950',
  lightGold: '#570005',
  red: '#FFA900',
  lightRed: 'ffe2a9',
}

const cssVarColors = [
  { cssVarName: '--main-background-color', lightValue: 'black', darkValue: 'white' },
  { cssVarName: '--main-font-color', lightValue: 'white', darkValue: 'black' },
  { cssVarName: '--highlight-color', lightValue: 'gold', darkValue: 'red' },
  { cssVarName: '--highlight-hover-color', lightValue: 'lightGold', darkValue: 'lightRed' },
  { cssVarName: '--button-background-color', lightValue: 'gold', darkValue: 'white' },
  { cssVarName: '--button-border-color', lightValue: 'gold', darkValue: 'red' },
  { cssVarName: '--button-hover-background-color', lightValue: 'white', darkValue: 'red' },
  { cssVarName: '--button-hover-border-color', lightValue: 'gold', darkValue: 'red' },
  { cssVarName: '--button-hover-text-color', lightValue: 'white', darkValue: 'black' },
]

const changeImagesTo = (newMode) => {
  const imageColorToUse = newMode === 'dark' ? 'white' : 'black'
  const imageHoverToUse = newMode === 'dark' ? 'yellow' : 'red'
  const gitHubImageToUse = newMode === 'dark' ? 'light' : 'dark'

  hexImage.src = `images/hexagon_${imageColorToUse}.png`
  hexSwitch.addEventListener('mouseenter', (e) => {
    hexImage.src = `images/hexagon_${imageHoverToUse}.png`;
  });

  hexSwitch.addEventListener('mouseleave', (e) => {
    hexImage.src = `images/hexagon_${imageColorToUse}.png`;
  });

  gitHubImages.forEach((element) => {
    element.src = `images/github-${gitHubImageToUse}.png`;
  });
}


function switchViewModeTo(mode) {
  cssVarColors.forEach((cssVar) => {
    root.style.setProperty(cssVar.cssVarName, schemeColors[cssVar[`${mode}Value`]])
  })
  changeImagesTo(mode)
}

hexSwitch.addEventListener('click', (e) => {
  switchViewModeTo(darkmode ? 'light' : 'dark');
  darkmode = !darkmode
  sessionStorage.setItem('darkMode', darkmode)
});

//First load, set darkmode to default/previously set
switchViewModeTo(darkmode ? 'dark' : 'light')

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
