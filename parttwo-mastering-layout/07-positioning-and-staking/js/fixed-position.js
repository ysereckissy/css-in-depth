const button = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

button.addEventListener('click', event => {
    event.preventDefault();
    modal.style.display = 'block';
});

close.addEventListener('click', event => {
    event.preventDefault();
    modal.style.display = 'none';
});