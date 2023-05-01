
const toastLi = document.querySelector('.content')
const toast = document.querySelector('.toast')

toastLi.addEventListener("mousemove", () => {
    toast.classList.add('visible')
    toast.innerText = '!Melhor escolha que está fazendo!'

    setTimeout(function() {
        toast.classList.remove('visible')
    }, 2000)
}) 
