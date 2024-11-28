let ImgAtual = 0;
const imagens = document.querySelectorAll('.slider-image');
const setaEsquerda = document.getElementById('seta-esquerda');
const setaDireita = document.getElementById('seta-direita');

function atualizarImagens() {
    imagens.forEach((img, indice) => {
        img.style.display = (indice >= ImgAtual && indice < ImgAtual + 2) ? 'inline' : 'none';
    });
    setaEsquerda.style.display = ImgAtual === 0 ? 'none' : 'inline';
    setaDireita.style.display = ImgAtual >= imagens.length - 2 ? 'none' : 'inline';
}

function proximaImagem() {
    if (ImgAtual < imagens.length - 2) {
        ImgAtual++;
    }
    atualizarImagens();
}

function imagemAnterior() {
    if (ImgAtual > 0) {
        ImgAtual--;
    }
    atualizarImagens();
}

// Inicializa a exibição da imagem
atualizarImagens();
