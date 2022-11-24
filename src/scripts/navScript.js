window.addEventListener("load", function () {
    const navMap = {
        "/web_22_23/src/pages/index.html": 0,
        "/web_22_23/src/pages/things.html": 1,
    };

    const active = 'navigation-button-chosen'
    const inactive = 'div-hovered'

    const currentLocation = document.location.pathname
    const navElems = document.getElementsByClassName("navigation-button");

    const curIndex = navMap[currentLocation];

    for (let i = 0; i < navElems.length; i++) {
        const elem = navElems[i];
        if (i === curIndex) {
            elem.classList.add(active);
        } else {
            elem.classList.add(inactive);
        }
    }
});