//Nome da Header interativa 
let docTitle = document.title;
addEventListener("blur", () => {
    document.title = "Volte Logo! :(";
})
addEventListener("focus", () => {
    document.title = docTitle;
})

//document.addEventListener('scroll', handleScroll);

var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var links = document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
})

var typed = new Typed(".input",{
    strings:[,"Musico","Multiinstrumentista","Artista de rua","Desenvolvedor Frontend"],
    typeSpeed:110,
    backSpeed:75,
    loop:true
})
