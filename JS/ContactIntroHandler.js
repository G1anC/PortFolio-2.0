const intro = document.getElementById("intro-to-disappear")
const contactSection = document.getElementById("to-enter")
let pourcentage = 100;

function delay(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });
}

async function showContactContent() {
    await delay(250);
    while (pourcentage >= 0) {
        intro.style.opacity = pourcentage + "%";
        pourcentage--;
        await delay(0.5);
    }
    while (pourcentage < 100) {
        contactSection.style.opacity = pourcentage + "%";
        pourcentage++;
        await delay(0.5);
    }
}
showContactContent();
