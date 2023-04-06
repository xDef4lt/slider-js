import { mudarClasseBtn, trocarSlide, trocarTexto } from './modules.js';

const btn_slider = document.querySelectorAll('.select');
const slides = document.querySelectorAll('video')

let slideAtual = slides[0];
let slideProximo = slides[1];

let primeiroBtn = btn_slider[0];
let proximoBtn = btn_slider[1];

const sliders = document.querySelectorAll(".slider");

const nextSlide = () => {
    const current = document.querySelector(".active");
    current.classList.remove("active");
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add("active");
        current.querySelector(".text-container").classList.add('active');
    } else {
        sliders[0].classList.add("active");
        const firstSlide = sliders[0];
        const firstSlideText = firstSlide.querySelector(".text-container");
        firstSlideText.style.display = "block";
    }
};

setInterval(() => {
    mudarClasseBtn(primeiroBtn, proximoBtn);
    primeiroBtn = proximoBtn;
    proximoBtn = primeiroBtn.nextElementSibling || btn_slider[0];

    nextSlide();
}, 9000);