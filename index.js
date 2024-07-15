if (window.innerWidth >= 950) {
    // Configurações para o modo desktop
    ScrollReveal({ 
        reset: false, 
        distance: '25px',
        duration: 2000,
        delay: 250
    });

    // Adicione as classes das imagens que deseja animar aqui
    ScrollReveal().reveal('', { origin: 'left' });
    ScrollReveal().reveal('', { origin: 'right' });
    ScrollReveal().reveal('', { origin: 'top' });
    ScrollReveal().reveal('', { origin: 'bottom' });
} else {
    ScrollReveal({ 
        reset: false, 
        distance: '50px',
        duration: 2000,
        delay: 250
    });
    // Configurações para telas menores que 950 pixels (modo celular)
    // Adicione aqui as classes que deseja animar para telas menores que 950 pixels
    // Por exemplo:
    ScrollReveal().reveal('', { origin: 'left' });

    ScrollReveal().reveal('', { origin: 'right' });

    ScrollReveal().reveal('', { origin: 'top' });

    ScrollReveal().reveal('', { origin: 'bottom' });
}

let currentIndex = 0;
let totalWidth = 0;
let imageWidths = [400, 400, 400, 400]; // Largura de cada imagem inicialmente

function calculateTotalWidth() {
    totalWidth = imageWidths.reduce((acc, width) => acc + width, 0);
}

function updateImageWidths() {
    // Verifica o tamanho da tela
    if (window.innerWidth <= 768) { // Se for um dispositivo móvel
        imageWidths = [390, 390, 390, 390]; // Altera a largura das imagens para 400px
    } else {
        imageWidths = [405, 405, 405, 405]; // Mantém a largura original das imagens para dispositivos de PC
    }
}

function getTranslateXValue() {
    let value = 0;
    for (let i = 0; i < currentIndex; i++) {
        value += imageWidths[i];
    }
    return value;
}

function showNextImage() {
    const carousel = document.querySelector('.carousel');

    // Calcular a largura total apenas uma vez
    if (totalWidth === 0) {
        calculateTotalWidth();
    }

    // Atualiza as larguras das imagens
    updateImageWidths();

    // Move para a próxima imagem
    currentIndex++;

    // Move o carrossel para mostrar a imagem atual
    carousel.style.transition = 'transform 0.5s ease'; // Ativar transição
    carousel.style.transform = `translateX(-${getTranslateXValue()}px)`;

    // Deixe sempre dois números abaixo do número total de imagens
    if (currentIndex >= imageWidths.length) {
        setTimeout(() => {
            currentIndex = 0;
            // Mova o carrossel para mostrar a primeira imagem suavemente
            carousel.style.transition = 'transform 0.5s ease'; // Ativar transição novamente
            carousel.style.transform = `translateX(0px)`; // Mover para a posição da primeira imagem
        }, 1500); // Atraso de 500ms antes de reposicionar
    }
}

// Chame a função de atualização das larguras das imagens quando a tela for redimensionada
window.addEventListener('resize', updateImageWidths);


function getTranslateXValue() {
    let translateXValue = 0;
    for (let i = 0; i < currentIndex; i++) {
        translateXValue += imageWidths[i];
    }
    return translateXValue;
}


setInterval(showNextImage, 3000);

//CARROSSEL 2 --------------------------------:
let currentIndex2 = 0;
let totalWidth2 = 0;
let imageWidths2 = [400, 400, 400, 400, 400]; // Largura de cada imagem inicialmente

function calculateTotalWidth2() {
    totalWidth2 = imageWidths2.reduce((acc, width) => acc + width, 0);
}

function updateImageWidths2() {
    // Verifica o tamanho da tela
    if (window.innerWidth <= 768) { // Se for um dispositivo móvel
        imageWidths2 = [390, 390, 390]; // Altera a largura das imagens para 400px
    } else {
        imageWidths2 = [405, 405, 405]; // Mantém a largura original das imagens para dispositivos de PC
    }
}

function getTranslateXValue2() {
    let value = 0;
    for (let i = 0; i < currentIndex2; i++) {
        value += imageWidths2[i];
    }
    return value;
}

function showNextImage2() {
    const carousel2 = document.querySelector('.carousel2');

    // Calcular a largura total apenas uma vez
    if (totalWidth2 === 0) {
        calculateTotalWidth2();
    }

    // Atualiza as larguras das imagens
    updateImageWidths2();

    // Move para a próxima imagem
    currentIndex2++;

    // Move o carrossel para mostrar a imagem atual
    carousel2.style.transition = 'transform 0.5s ease'; // Ativar transição
    carousel2.style.transform = `translateX(-${getTranslateXValue2()}px)`;

    // Deixe sempre dois números abaixo do número total de imagens
    if (currentIndex2 >= imageWidths2.length) {
        setTimeout(() => {
            currentIndex2 = 0;
            // Mova o carrossel para mostrar a primeira imagem suavemente
            carousel2.style.transition = 'transform 0.5s ease'; // Ativar transição novamente
            carousel2.style.transform = `translateX(0px)`; // Mover para a posição da primeira imagem
        }, 1500); // Atraso de 500ms antes de reposicionar
    }
}

// Chame a função de atualização das larguras das imagens quando a tela for redimensionada
window.addEventListener('resize', updateImageWidths2);

// Inicialize a primeira chamada para mostrar a primeira imagem
updateImageWidths2();
setInterval(showNextImage2, 3000); // Transição a cada 3 segundos


