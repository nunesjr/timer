function relogio() {
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }

    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function iniciarRelogio() {
        timer = setInterval(() => {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }

    document.addEventListener('click', function (event) {
        const elemento = event.target;

        if (elemento.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
            relogio.style.color = 'black';
        }

        if (elemento.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.style.color = 'red';
        }

        if (elemento.classList.contains('iniciar')) {
            clearInterval(timer);
            relogio.style.color = 'black';
            iniciarRelogio();
        }
    })
}
relogio();