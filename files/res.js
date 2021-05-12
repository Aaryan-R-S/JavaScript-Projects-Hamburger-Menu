let b=document.querySelector('.burger')
let l=document.querySelector('.items')
let n=document.querySelector('.navbar')

b.addEventListener('click', function run(){
     n.classList.toggle('navh')
     l.classList.toggle('visl')
})
