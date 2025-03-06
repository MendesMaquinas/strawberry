const container = document.getElementById("container");
const imageSrc = "morango.png"; // Substitua pela URL da sua imagem
const totalImages = 30; // Quantidade de imagens
const imgSizes = [24, 32, 40, 48, 16, 20, 72];
function getRandomPosition(max) {
  return Math.floor(Math.random() * max);
}

function createRandomImages() {
  for (let i = 0; i < totalImages; i++) {
    const img = document.createElement("img");
    const size = imgSizes[Math.floor(Math.random() * imgSizes.length)];
    img.src = imageSrc;
    img.classList.add("image");
    img.classList.add("absolute");
    img.classList.add(`h-${size}`);
    img.classList.add(`w-${size}`);
    img.classList.add(`z-${i % 2 == 0 ? "50" : "30"}`);
    //img.classList.add(`rotate-100deg`);

    //ta rateando no x
    const x = getRandomPosition(container.clientWidth - 250);
    const y = getRandomPosition(container.clientHeight);

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    container.appendChild(img);
  }
}

createRandomImages(); // Chama a função ao carregar a página

const tl = gsap.timeline({});
gsap.utils.toArray(".image").forEach((img) => {
gsap.fromTo(
img,
{ opacity: 0 },
{
  opacity: 1,
  duration: 1, // Tempo da animação
  delay: Math.random() * 2, // Atraso aleatório entre 0 e 2 segundos
  ease: "power2.out",
  rotate: Math.floor(Math.random() * 360),
}
);
});

gsap.utils.toArray(".image").forEach((img) => {
gsap.to(img, {
y: () => gsap.utils.random(-700, 500), // Movimenta cada imagem aleatoriamente
rotation: () => gsap.utils.random(0, 180), // Rotação aleatória entre -180° e 180°
scrollTrigger: {
  trigger: img,
  start: "top bottom", // Quando a imagem entra na tela
  end: "bottom top", // Quando a imagem sai da tela
  scrub: true, // Faz a rotação acompanhar o scroll
}
});
});