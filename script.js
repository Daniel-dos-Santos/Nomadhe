//Nome da Header interativa 
let docTitle = document.title;
addEventListener("blur", () => {
    document.title = "Volte Logo! :(";
})
addEventListener("focus", () => {
    document.title = docTitle;
})

//Função scroll do site 
const sections = document.querySelectorAll('section'), navLinks = document.querySelectorAll('ul li a');

const resetLinks = () => navLinks.forEach(link => link.classList.remove(active));

const handleScroll = () => {
    const { pageYOffset } = window;
    sections.forEach(section => {
        const { id, offsetTop, clientHeight } = section;
        const offset = offsetTop - 1;

        if (pageYOffset >= offset && pageYOffset < offset + clientHeight) {
            resetLinks();
            navLinks.forEach(link => {
                if (link.dataset.scroll === id) {
                    link.classList.add('active');
                }
            });
        }
    });
};

//Multitexto da home
document.addEventListener('scroll', handleScroll);

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