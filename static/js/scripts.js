let con1 = document.getElementById("container1");
let con = document.getElementById("container");
let con2 = document.getElementById("container2");
let con4 = document.getElementById("container4");
let con3 = document.getElementById("container3");

function showImg(){
    con3.style.display = 'none'
    con4.style.display = 'none'
    con1.style.display = 'none'
    con2.style.display = 'none'
    if(con.style.display == "none"){
        con.style.display = "block"
    }
    else{
        con.style.display = 'block'
    }
}
function showImg1(){
    con3.style.display = 'none'
    con4.style.display = 'none'
    con.style.display = 'none'
    con2.style.display = 'none'
    if(con1.style.display == "block"){
        con1.style.display = "block"
    }
    else{
        con1.style.display = 'block'
    }
}
function showImg2(){
    con3.style.display = 'none'
    con4.style.display = 'none'
    con.style.display = 'none'
    con1.style.display = 'none'
    if(con2.style.display == "block"){
        con2.style.display = "block"
    }
    else{
        con2.style.display = 'block'
    }
}
function showImg3(){
    con2.style.display = 'none'
    con4.style.display = 'none'
    con.style.display = 'none'
    con1.style.display = 'none'
    if(con3.style.display == "block"){
        con3.style.display = "block"
    }
    else{
        con3.style.display = 'block'
    }
}
function showImg4(){
    con3.style.display = 'none'
    con2.style.display = 'none'
    con.style.display = 'none'
    con1.style.display = 'none'
    if(con4.style.display == "block"){
        con4.style.display = "block"
    }
    else{
        con4.style.display = 'block'
    }
}

let toggle = document.getElementById('toggle')
toggle.addEventListener("click", function(){
    var navbar = document.querySelector('.nav')
    navbar.classList.toggle('navbar-expanded')
})