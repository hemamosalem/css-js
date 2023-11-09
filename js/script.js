
var allcars = document.querySelectorAll(".cars div")
var div1=document.querySelector("#div1")
var btn1=document.querySelector("#btn1")
var myDiv=document.querySelector("myDiv")
var totalPrice=0

allcars.forEach(function(item){
    item.onclick=function(){

        totalPrice += +(item.getAttribute("price"))
        div1.innerHTML += item.textContent + "____"

        if(div1.innerHTML !=""){
            btn1.style.display ="block"
            }
    }
})

btn1.onclick = function(){

    document.getElementById("myDiv").innerHTML="the sum is :" + totalPrice

    
}
