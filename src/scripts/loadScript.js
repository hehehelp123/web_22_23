const startTime = new Date().getTime();
window.addEventListener("load", function () {
    const endTime = new Date().getTime();
    const loadTime = (endTime - startTime) / 1000
    const timeElem = document.getElementsByClassName("time-display")[0];
    timeElem.textContent = "Load time: " + loadTime + " seconds"
});