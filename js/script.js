const buttons = document.querySelectorAll('#image-picker li');
const image = document.querySelector('#product-image');

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log(e);
    buttons.forEach((btn) => {
      btn.querySelector('.color').classList.remove('selected');
    });
    const button = e.target;
    const id = button.getAttribute('id');

    button.querySelector('.color').classList.add('selected');
    image.classList.add('changing');
    image.setAttribute('src', `img/iphone-${id}.jpg`);
  });
});

function mobile() {
  const hamburguer = document.querySelector('.hamburguer');
  const nav = document.querySelector('.nav');

  hamburguer.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

mobile();
