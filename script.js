let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Volte Logo! :(";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})

var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var links = document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
})

var typed = new Typed(".input",{
    strings:["Multiinstrumentista","Artista de rua","Desenvolvedor Frontend"],
    typeSpeed:70,
    backspeed:55,
    loop:true
})