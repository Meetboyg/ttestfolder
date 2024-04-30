const modal = document.getElementById("modal")
const btn = document.getElementById("btn")
const X = document.getElementById("X")
btn.addEventListener("click", ()=>{
    modal.style.visibility = 'unset'
})
modal.addEventListener("click", (e)=>{
    if(e.target == modal){
        modal.style.login = 'hidden'
    }
})

X.addEventListener("click", ()=>{
    modal.style.visibility = 'hidden'
})