// Navegação suave para os links do menu
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const section = document.querySelector(href);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60,
        behavior: 'smooth',
      });
    }
  });
});

// Animar as seções ao aparecer na viewport
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('visible');
    }
  });
}

let options = {
  threshold: 0.2,
};
let observer = new IntersectionObserver(onEntry, options);
document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// Formulário: ao enviar, apenas mostra alerta (sem backend)
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert(
    `Obrigado, ${form.name.value}! Sua mensagem foi recebida com sucesso. Entrarei em contato em breve.`
  );
  form.reset();
});
