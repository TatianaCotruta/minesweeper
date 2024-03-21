// Custom JS
function clickBtn($element) {
    // const smileClass = 'btn-smile-face'
    // const sadClass = 'btn-lose-face'
    //
    // $element.classList.toggle(smileClass)
    // $element.classList.toggle(sadClass)

    // Resets the table
    const cellList = document.querySelectorAll('.cell')
    for (const cell of cellList) {
        cell.removeAttribute('data-cell-value')
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const $button = document.querySelector('.reset-btn')

    $button.addEventListener('mousedown', function () {
        console.log('mousedown')
        // Modify the styles of the button to have inset border
    })

    $button.addEventListener('mouseup', function () {
        console.log('mouseup')
        // Modify the styles of the button to have outset border
    })
})
