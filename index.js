document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const TOTAL_IMAGES = container.clientWidth < 720 ? 15 : 30;
  const IMG_SIZES = [24, 32, 40, 48, 16, 20, 72];
  
  createRandomImages();

  function getRandomPosition(max) {
    return Math.floor(Math.random() * max);
  }

  function createRandomImages() {
    for (let i = 0; i < TOTAL_IMAGES; i++) {
      const img = document.createElement("img");
      const size = IMG_SIZES[Math.floor(Math.random() * IMG_SIZES.length)];
      img.src = "morango.png";
      img.classList.add("image");
      img.classList.add("absolute");
      img.classList.add(`h-${size}`);
      img.classList.add(`w-${size}`);
      img.classList.add(`z-${i % 2 == 0 ? "50" : "30"}`);

      const x = getRandomPosition(container.clientWidth - 250);
      const y = getRandomPosition(container.clientHeight);

      img.style.left = `${x}px`;
      img.style.top = `${y}px`;

      container.appendChild(img);
    }
  }

  
  gsap.utils.toArray(".image").forEach((img) => {
    gsap.to(img, {
      y: () => gsap.utils.random(-700, 500), // Movimenta cada imagem aleatoriamente
      rotation: () => gsap.utils.random(0, 180), // Rotação aleatória entre -180° e 180°
      scrollTrigger: {
        trigger: img,
        start: "top bottom", // Quando a imagem entra na tela
        end: "bottom top", // Quando a imagem sai da tela
        scrub: true, // Faz a rotação acompanhar o scroll
      },
    });
  });

  animateShowImages()
});

function animateShowImages() {
    gsap.fromTo(
      "img",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: Math.random() * 2,
        ease: "power2.out",
        rotate: "+=" + Math.floor(Math.random() * 360),
        stagger: 0.1,
      }
    );

}

document.addEventListener("scroll", function() {
  const scrollY = window.scrollY;
  const scrollX = window.scrollX;
  console.log("Posição de rolagem vertical:", scrollY);
  console.log("Posição de rolagem horizontal:", scrollX);
});