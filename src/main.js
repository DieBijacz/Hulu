const modal = document.querySelector('.modal')
const loginbtn = document.querySelector('.login-btn')
const closebtn = document.querySelector('.close')

loginbtn.addEventListener('click', openModal)
closebtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)

function openModal() {
    modal.style.display = 'block'
}

function closeModal() {
    modal.style.display = 'none'
}

function outsideClick(e) {
    if (e.target == modal) {
        closeModal()
    }
}