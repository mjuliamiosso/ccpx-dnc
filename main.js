const dia = document.getElementById('dia')
const horas = document.getElementById('hora')
const minutos = document.getElementById('minuto')
const segundos = document.getElementById('segundo')

const lancamento = "01 dec 2024"

function countDown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24)
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24
    const finalMinutos = Math.floor(segTotal / 60 ) % 60
    const finalSegundos = Math.floor(segTotal) % 60

    dia.innerHTML = finalDias
    horas.innerHTML = formatoTempo(finalHoras)
    minutos.innerHTML = formatoTempo(finalMinutos)
    segundos.innerHTML = formatoTempo(finalSegundos)
    
}

function formatoTempo( tempo ){
    return tempo <10? `0${tempo}` : tempo
}

countDown()
setInterval(countDown, 1000)