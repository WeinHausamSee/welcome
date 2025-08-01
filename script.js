const images = [
  'images/placeholder1.jpg',
  'images/placeholder2.jpg',
  'images/placeholder3.jpg'
];

let current = 0;
const slide = document.getElementById('slide');

setInterval(() => {
  current = (current + 1) % images.length;
  slide.src = images[current];
}, 5000);