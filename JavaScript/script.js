'use strict';
const filterButtons = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.portfolio-item');

// Mostrar solo "web" al cargar
items.forEach(item => {
  if (item.classList.contains('web')) {
    item.classList.add('show');
  } else {
    item.classList.remove('show');
  }
});

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    items.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.classList.add('show');
      } else {
        item.classList.remove('show');
      }
    });
  });
});

function mostrarAlerta() {
        alert("Estamos trabajando en ello. ¡Vuelve pronto!");
    }

const $form = document.getElementById("form")
$form.addEventListener("submit", (event) => {
  event.preventDefault();
const name = $form.name.value;
const lastname = $form.lastname.value;
const email = $form.email.value;
const country = $form.country.value;
const subject = $form.subject.value;



const result = `Hola ${name} ${lastname}, 

Gracias por tu mensaje. Hemos recibido tu consulta sobre "${subject}" y pronto te responderemos. 

Hemos registrado tu correo electrónico: ${email}, y sabemos que nos contactas desde ${country}. 

¡Estaremos en contacto pronto!`;

console.log(result);


  alert(result);
  $form.reset();
});