

const iconToggle = document.querySelector('.toggle_icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu_link');
const iconClose = document.querySelector('.close_icon');

iconToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

iconClose.addEventListener('click',() => {
    navbarMenu.classList.remove('active');
});

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    })
});

//Hora de cambiar el BackGround del Header :3
/*function scrollHeader(){...}: Se define una función llamada scrollHeader que se 
encarga de gestionar el comportamiento del encabezado mientras se desplaza la ventana.
const header = document.getElementById('header');: Se selecciona el elemento del DOM 
con el ID 'header' y se almacena en la variable header. Es probable que este elemento 
represente el encabezado de la página.
this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');: 
Aquí se utiliza un operador condicional (ternario). Si la posición vertical de 
desplazamiento (this.scrollY) es mayor o igual a 20 píxeles, se añade la clase 'active' al elemento del encabezado, usando header.classList.add('active'); de lo contrario, se elimina la clase 'active' del elemento del encabezado con header.classList.remove('active'). Esta clase 'active' probablemente contiene estilos CSS que modifican la apariencia del encabezado.
window.addEventListener('scroll', scrollHeader);: Se añade un event listener a 
la ventana (window) que escucha el evento de desplazamiento (scroll). Cuando se
 produce el evento de desplazamiento, se ejecuta la función scrollHeader. 
 En resumen, cada vez que la ventana se desplaza, se verifica la posición y se 
 añade o quita la clase 'active' del elemento del encabezado, dependiendo de la 
 posición de desplazamiento. Esto puede utilizarse para cambiar la apariencia del 
 encabezado a medida que se desplaza la página.*/ 
function scrollHeader(){
    const header = document.getElementById('header');
    this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
}

window.addEventListener('scroll', scrollHeader);


/*Por supuesto, este código utiliza una biblioteca llamada Typed.js para generar 
un efecto de escritura automática en un elemento específico de la página web. Aquí 
está el desglose:
if (typed) { ... }: Comprueba si se encontró algún elemento con la clase 'typed'.
let typed_strings = typed.getAttribute('data-typed-items');: Obtiene el 
atributo data-typed-items del elemento con la clase 'typed'. Este atributo puede 
contener una lista de elementos separados por comas que se van a escribir de manera 
automática.
typed_strings = typed_strings.split(',');: Divide la cadena obtenida del atributo data-typed-items en un array,
 separando los elementos por comas. Esto convierte la cadena en una lista de elementos individuales que serán escritos 
 por Typed.js.

new Typed('.typed', { ... }): Inicializa un nuevo objeto de la biblioteca Typed.js en
 el elemento con la clase 'typed'. Esta biblioteca permite la animación de texto en la página.

strings: typed_strings: Aquí se especifica el array de cadenas (que se dividió 
    anteriormente) que Typed.js escribirá en el elemento.
loop: true: Indica que el efecto de escritura automática se repetirá en bucle.
typeSpeed: 100: Establece la velocidad de escritura del texto.
backSpeed: 50: Define la velocidad de retroceso al borrar el texto.
backDelay: 2000: Especifica el tiempo de espera antes de comenzar el retroceso en
 milisegundos.*/

const typed = document.querySelector('.typed');
if (typed){
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    })
}

/*Funcion para que el menu se ilumine al pasar la pagina*/
const sections = document.querySelectorAll('section[id]');

function scrollActive (){
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        
        let sectionId = section.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);

/*Codigos JS para el carrucel pops*/
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
    });
});


/*
const pages = document.querySelectorAll('.resume_content > div');
//const pages = document.querySelectorAll('.page');
//const resume = document.querySelector('.resume');
const resumeSections = resume.querySelectorAll('.resume_content > div');


function resumeActive(){
    const scrollY = window.scrollY;

    pages.forEach(page => {
        const sectionHeight = page.offsetHeight;
        const sectionTop = page.offsetTop - 120;

        let sectionid = page.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.resume_tabs a[href *=' + sectionid + ']').classList.add('current');
        }else{
            document.querySelector('.resume_tabs a[href *=' + sectionid + ']').classList.remove('current');

        }
    })
}

window.addEventListener('scroll',resumeActive);*/
/*
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.resume_wrap');
    const menuItems = document.querySelectorAll('.resume_tabs ul li a');
  
    function highlightMenuItem() {
      let scrollPosition = window.scrollY || window.pageYOffset;
  
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 120;
        const sectionBottom = sectionTop + section.offsetHeight;
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          // Resaltar la sección actual en el menú
          menuItems[index].classList.toggle('current');
        } else {
          // Quitar el resaltado si no está en la sección actual
          menuItems[index].classList.remove('current');
        }
      });
    }
  
    window.addEventListener('scroll', highlightMenuItem);
  });
*/


  