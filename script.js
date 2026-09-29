const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('open')));
document.querySelector('#year').textContent = new Date().getFullYear();

const projectForm = document.querySelector('#project-form');
const formStatus = document.querySelector('#form-status');
projectForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!projectForm.checkValidity()) {
    projectForm.reportValidity();
    return;
  }
  const data = new FormData(projectForm);
  const subject = `Zapytanie projektowe — ${data.get('projectType')}`;
  const body = [
    `Imię / firma: ${data.get('name')}`,
    `E-mail: ${data.get('email')}`,
    `Rodzaj projektu: ${data.get('projectType')}`,
    `Budżet / etap: ${data.get('budget')}`,
    '',
    'Opis potrzeb:',
    data.get('message')
  ].join('\n');
  if (formStatus) formStatus.textContent = 'Otwieram program pocztowy z przygotowaną wiadomością.';
  window.location.href = `mailto:wojciech.korbna@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
