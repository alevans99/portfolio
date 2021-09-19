    //Allows us to access CSS variables
    let root = document.documentElement;
    let darkmode = true;



    function switchViewMode() {

        if (darkmode) {
            root.style.setProperty('--main-background-color', '#fff');
            root.style.setProperty('--main-font-color', '#000');
            root.style.setProperty('--highlight-color', '#FA4950');
            root.style.setProperty('--button-background-color', '#FA4950');
            root.style.setProperty('--button-border-color', '#FA4950');
            root.style.setProperty('--button-hover-background-color', '#fff');
            root.style.setProperty('--button-hover-border-color', '#FA4950');
            root.style.setProperty('--button-hover-text-color', '#000');
            document.getElementById("dark-mode-image").src = "images/hexagon_black.png";

        } else {
            root.style.setProperty('--main-background-color', '#000');
            root.style.setProperty('--main-font-color', '#fff');
            root.style.setProperty('--highlight-color', '#FFA900');
            root.style.setProperty('--button-background-color', '#000');
            root.style.setProperty('--button-border-color', '#FFA900');
            root.style.setProperty('--button-hover-background-color', '#FFA900');
            root.style.setProperty('--button-hover-border-color', '#FFA900');
            root.style.setProperty('--button-hover-text-color', '#fff');
            document.getElementById("dark-mode-image").src = "images/hexagon_white.png";

        }
        darkmode = !darkmode




    };


    document.getElementById("dark-mode-switch").addEventListener("click", (e) => {

        switchViewMode();

    });