const button = document.querySelector('button')
let count = document.querySelector('#count')
button.addEventListener('click', function (){
    count.textContent = Number(count.textContent) +1
})

