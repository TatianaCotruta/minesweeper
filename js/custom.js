document.addEventListener('DOMContentLoaded', function () {
    const $button = document.querySelector('.reset-btn')
    const $buttonParent = $button.parentElement
    const onResetBtnInteractFn = () => {
        $buttonParent.classList.toggle('pressed')
    }

    $button.addEventListener('mousedown', onResetBtnInteractFn)
    $button.addEventListener('mouseup', onResetBtnInteractFn)
})

function resetGame() {
    const $cellList = document.querySelectorAll('.cell')

    for (const $cell of $cellList) {
        $cell.removeAttribute('data-cell-value')
    }
    
    // TODO Reset counter
}
