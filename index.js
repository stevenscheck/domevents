const button = document.querySelector('button')
let count = document.querySelector('#count')
button.addEventListener('click', function (){
    count.textContent = Number(count.textContent) +1
})

let p = document.querySelector("#placeholder")

const button2 = document.querySelector("#grow")
grow.addEventListener("click", function(){
    
    style = window.getComputedStyle(p, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    p.style.fontSize = (currentSize + 5)+"px"    

})

const button3 = document.querySelector("#shrink")
shrink.addEventListener("click", function(){
    
    style = window.getComputedStyle(p, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    p.style.fontSize = (currentSize - 5)+"px"    

})

