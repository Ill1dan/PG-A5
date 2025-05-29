const background = document.getElementById("background");
const themeBtn = document.getElementById("theme-btn");
const bg = document.getElementsByClassName("back");

// Change the background color of the page
if (themeBtn) {
    themeBtn.addEventListener("click", function() {
        // Generate a random light color
        const r = Math.floor(Math.random() * 76) + 180;
        const g = Math.floor(Math.random() * 76) + 180;
        const b = Math.floor(Math.random() * 76) + 180;
        const randomLightColor = `rgb(${r}, ${g}, ${b})`;

        background.style.backgroundColor = randomLightColor;
        themeBtn.style.backgroundColor = randomLightColor;

        for (let i = 0; i < bg.length; i++) {
            bg[i].style.backgroundColor = randomLightColor;
        }
    });
}