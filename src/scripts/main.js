AOS.init();



const dataEvento = new Date("oct 9, 2024 23:59:59 ");
const timeStampDoEVento = dataEvento.getTime();

const contador = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const intervaloTempoAteEvento = timeStampDoEVento - timeStampAtual;

    const diaEmMilissegundos = 1000 * 60 * 60 * 24;
    const horaEmMilissegundos = 1000 * 60 *60;
    const minutoEmMilissegundos = 1000 * 60;

    const diasAteEvento = Math.floor(intervaloTempoAteEvento / diaEmMilissegundos);
    const horasAteEvento = Math.floor((intervaloTempoAteEvento % diaEmMilissegundos) / horaEmMilissegundos);
    const minutosAteEvento = Math.floor((intervaloTempoAteEvento % horaEmMilissegundos) / minutoEmMilissegundos);
    const segundosAteEvento = Math.floor((intervaloTempoAteEvento % minutoEmMilissegundos) / 1000) + 1;

    document.getElementById('contador').innerHTML = `${diasAteEvento}dias ${horasAteEvento}hr ${minutosAteEvento}min ${segundosAteEvento}seg`;

    if(diasAteEvento == 0){
        clearInterval(contador);
        document.getElementById('contador').innerHTML = "É hoje!!!";
    }
}, 1000)



