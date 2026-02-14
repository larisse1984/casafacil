let b1=document.querySelector("#b1")
let b2=document.querySelector("#b2")
let b3=document.querySelector("#b3")
let v1=document.querySelector("#v1")
let v2=document.querySelector("#v2")
let v3=document.querySelector("#v3")

b1.addEventListener("click",bb1)

function bb1(){
    v1.classList.remove("esconde")
    b1.classList.add("esconde")
}


v1.addEventListener("click",vv1)

function vv1(){
    v1.classList.add("esconde")
    b1.classList.remove("esconde")
}



b2.addEventListener("click",bb2)

function bb2(){
    v2.classList.remove("esconde")
    b2.classList.add("esconde")
}

v2.addEventListener("click",vv2)

function vv2(){
   
    v2.classList.add("esconde")
    b2.classList.remove("esconde")
}
b3.addEventListener("click",bb3)

function bb3(){
    v3.classList.remove("esconde")
    b3.classList.add("esconde")
}
v3.addEventListener("click",vv3)

function vv3(){
    v3.classList.add("esconde")
    b3.classList.remove("esconde")
}


