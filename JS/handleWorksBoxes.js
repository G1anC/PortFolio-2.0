
document.querySelectorAll('box-title').forEach(boxBtn => {
    boxBtn.addEventListener('enter', () => {
        // display the image noted box-image in an animation which is set to display none
    })
})

document.querySelectorAll('.box-title').forEach(boxBtn => {
    boxBtn.addEventListener('click', () => {
        // display the less class in an animation which is set to display none
        // display the rest of the box with an animation

        boxBtn.innerHTML = "coucou";

    })
})