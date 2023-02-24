let menu = document.querySelector('#btn-menu');
let barranav = document.querySelector(".barranav");

menu.onclick = ()  => {
    menu.classList.toggle('fa-times');
    barranav.classList.toggle('active');
}

ventana.onscroll = ()  => {
    menu.classList.remove('fa-times');
    barranav.classList.remove('active');
}

let hidetext_btn = document.getElementById('hidetext_btn');

let hide_text = document.getElementById('hide_text');

hidetext_btn.addEventListener('click',toggletext);

function toggletext(){
    hide_text.classList.toggle('show');
}