
 const plus = Array.from(document.querySelectorAll('.btn-plus'))
const moin = Array.from(document.querySelectorAll('.btn-moin'))
let price = Array.from(document.querySelectorAll(".prix"))
    let amount = Array.from(document.querySelectorAll(".count"))


for(let el of plus){
  el.addEventListener("click", ()=>{
el.nextElementSibling.innerHTML=Number(el.nextElementSibling.innerHTML )+ 1
document.querySelector(".tot").innerHTML = sum()
  })
}
for (let el of moin)
{
        el.addEventListener("click", ()=>{
            if( Number(el.previousElementSibling.innerHTML)>=1){
            el.previousElementSibling.innerHTML=Number(el.previousElementSibling.innerHTML)-1
             document.querySelector(".tot").innerHTML = sum()
    }
 })
}


var removeCartItemButtons = document.getElementsByClassName('fa-trash-alt')
// console.log(removeCartItemButtons) 
for (let i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
 
   button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.remove()
 amount[i].innerHTML = 0;
    // update Total
     document.querySelector(".tot").innerHTML = sum()        
    })
    
}
let like = document.querySelectorAll(".fa-heart")
 for (const li of like) {
    li.addEventListener('click', (e) =>{
      if (e.target.style.color=="red") {
        e.target.style.color="black"
      }
      else
      {e.target.style.color="red"}
    }) 
  }
  
function sum() {
    let price = Array.from(document.querySelectorAll(".prix"))
    let amount = Array.from(document.querySelectorAll(".count"))
    let add = 0
    for (let i = 0; i < amount.length; i++) {
        add += price[i].innerHTML * amount[i].innerHTML
    }
    return add
}