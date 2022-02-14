
const toastLi = document.querySelector('.toast-01')
const toast = document.querySelector('.toast')

toastLi.onmousemove = function () {
    toast.classList.add('visible')
    toast.innerText = '!Melhor escolha que está fazendo!'

    setTimeout(function() {
        toast.classList.remove('visible')
    }, 2000)
}