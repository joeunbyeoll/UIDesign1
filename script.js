const mainImage = document.getElementById('mainImage');
const hoverImages = document.getElementById('hoverImages');

mainImage.addEventListener('mouseenter', () => {
  hoverImages.classList.add('visible');
});

mainImage.addEventListener('mouseleave', () => {
  hoverImages.classList.remove('visible');
});

 document.querySelector('#darkmode').addEventListener('click', function() {
      document.getElementsByTagName('body')[0].classList.toggle('dark');
});
 
