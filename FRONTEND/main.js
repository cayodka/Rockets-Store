const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
let currentIndex = 0;

const clonedItems = items.map(item => item.cloneNode(true));
track.append(...clonedItems);

const updateCarousel = () => {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  if (currentIndex >= items.length) {
    setTimeout(() => {
      track.style.transition = 'none';
      currentIndex = 0;
      track.style.transform = 'translateX(0)';
    }, 500);
  }
};


const nextSlide = () => {
  currentIndex++;
  track.style.transition = 'transform 0.5s ease-in-out';
  updateCarousel();
};

const prevSlide = () => {
  if (currentIndex === 0) {
    track.style.transition = 'none';
    currentIndex = items.length - 1;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  } else {
    currentIndex--;
  }
  track.style.transition = 'transform 0.5s ease-in-out';
  updateCarousel();
};

let autoPlay = setInterval(nextSlide, 3000);


nextButton.addEventListener('click', () => {
  clearInterval(autoPlay);
  nextSlide();
  autoPlay = setInterval(nextSlide, 3000);
});

prevButton.addEventListener('click', () => {
  clearInterval(autoPlay);
  prevSlide();
  autoPlay = setInterval(nextSlide, 3000);
});



document.getElementById('btMenuHeader').addEventListener('click', function () {
  const menuLateral = document.getElementById('menuLateral');

  if (menuLateral.style.visibility === 'visible') {
    menuLateral.style.visibility = 'hidden';
  } else {
    menuLateral.style.visibility = 'visible';
    menuLateral.style.opacity = '1';
  }
});

document.getElementById('sairMenuLateral').addEventListener('click', function () {
  const menuLateral = document.getElementById('menuLateral');
  if (menuLateral.style.visibility = 'hidden') {
    menuLateral.style.visibility === 'visible';
  } else {
    menuLateral.style.visibility === 'hidden';
  }
})


document.querySelector('a[href="#subAbaMenuLateralConosco"]').addEventListener('click', function (e) {
  e.preventDefault();

  const menuLateral = document.getElementById('menuLateral');
  const faleConosco = document.getElementById('subAbaMenuLateralFalaConosco');
  const sobreNos = document.getElementById('subAbaMenuLateralSobreNós');


  [menuLateral, sobreNos].forEach(aba => {
    if (aba) {
      aba.style.visibility = 'hidden';
      aba.style.opacity = '0';
    }
  });


  if (faleConosco) {
    faleConosco.style.visibility = 'visible';
    faleConosco.style.opacity = '1';
  }
});


document.getElementById('sairFaleConosco').addEventListener('click', function () {
  const faleConosco = document.getElementById('subAbaMenuLateralFalaConosco');
  if (faleConosco) {
    faleConosco.style.visibility = 'hidden';
    faleConosco.style.opacity = '0';
  }
});


document.querySelector('a[href="#subAbaMenuLateralSobreNós"]').addEventListener('click', function (e) {
  e.preventDefault();

  const menuLateral = document.getElementById('menuLateral');
  const sobreNos = document.getElementById('subAbaMenuLateralSobreNós');
  const faleConosco = document.getElementById('subAbaMenuLateralFalaConosco');

  [menuLateral, faleConosco].forEach(aba => {
    if (aba) {
      aba.style.visibility = 'hidden';
      aba.style.opacity = '0';
    }
  });

  if (sobreNos) {
    sobreNos.style.visibility = 'visible';
    sobreNos.style.opacity = '1';
  }
});


document.getElementById('sairSobreNos').addEventListener('click', function () {
  const sobreNos = document.getElementById('subAbaMenuLateralSobreNós');
  if (sobreNos) {
    sobreNos.style.visibility = 'hidden';
    sobreNos.style.opacity = '0';
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const loginText = document.getElementById("loginHeader");
  loginText.addEventListener("click", function () {
    window.location.href = "/telalogin.html";
  });
});




const carinhoCompras = document.getElementById('abaCarinhoDeCompras');
document.getElementById('carrinhoComprasHeader').addEventListener('click', function () {
  if (carinhoCompras) {
    carinhoCompras.classList.toggle('visible');
  }
});

document.getElementById('sairCarrinhosCompras').addEventListener('click', function () {
  if (carinhoCompras) {
    carinhoCompras.classList.remove('visible');
  }
});





// NAO MEXE

document.addEventListener("DOMContentLoaded", function () {
  const boxProdutos = document.getElementById("boxProdutos");

  let produtosDoLocalStorage = [];

  try {
    produtosDoLocalStorage = JSON.parse(localStorage.getItem("produtos")) || [];
    console.log("Produtos carregados do localStorage:", produtosDoLocalStorage); 
  } catch (e) {
    console.error("Erro ao carregar produtos do localStorage:", e);
  }

  if (produtosDoLocalStorage.length === 0) {
    console.log("Nenhum produto encontrado no localStorage.");
    return;
  }

  produtosDoLocalStorage.forEach(produto => {
    const novaLinha = document.createElement("div");
    novaLinha.classList.add("cardprodutos"); // Adicionando a classe cardprodutos
    novaLinha.style.display = "flex";
    novaLinha.style.justifyContent = "space-between";
    novaLinha.style.marginBottom = "10px";

    const id = boxProdutos.children.length + 1; 

    novaLinha.innerHTML = `
      <span class="nome">${produto.nome}</span>
      <span class="foto"></span>
      <span class="quantidade">Quantidade disponivel: <br></span>
      <span class="pedidos">${produto.pedidos}</span>
    `;

    const fotoElement = novaLinha.querySelector(".foto");
    if (produto.foto && (produto.foto.startsWith("http") || produto.foto.startsWith("data:image"))) {
      const img = document.createElement("img");
      img.src = produto.foto; 
      img.style.width = "100px";
      img.style.height = "auto";
      fotoElement.appendChild(img);
    } else {
      fotoElement.textContent = "Sem foto"; 
    }

    boxProdutos.appendChild(novaLinha); 
  });
});
