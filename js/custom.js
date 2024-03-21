// Custom JS
function clickBtn($element) {
    const smileClass = 'btn-smile-face'
    const sadClass = 'btn-lose-face'

    $element.classList.toggle(smileClass)
    $element.classList.toggle(sadClass)

    // Resets the table
    const cellList = document.querySelectorAll('.cell')
    for (const cell of cellList) {
        cell.removeAttribute('data-cell-value')
    }
}


// document.addEventListener('DOMContentLoaded', function () {
//     const cellList = document.querySelectorAll('.cell')
//
//     for (const cell of cellList) {
//         cell.addEventListener('mousedown', function () {
//             cell.classList.add('cell-pressed')
//         })
//
//         cell.addEventListener('mouseup', function () {
//             cell.classList.remove('cell-pressed')
//         })
//     }
// })
