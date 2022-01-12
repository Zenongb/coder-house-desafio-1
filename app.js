// creo un numero al azar entre 1 y 10
let numParaAdivinar = Math.floor(Math.random() * 10) + 1
let intentosTotales = 5
let intentos = 0
alert('Adivina el número entre 1 y 10! Tenes ' + intentosTotales + ' intentos')

do {
  // uso var en la declaracion porque si no me tira error de que no existe la var
  var numIntentado = parseInt(prompt('Decime un número! Te quedan ' + (intentosTotales - intentos) + ' intentos'))

  // checkeo si el intento es un numero o no, en caso de que no sea no se cuenta
  // el intento
  if (Number.isNaN(numIntentado)) {
    alert('Eso no es un número!')
  } else { intentos++ }

} while (numIntentado !== numParaAdivinar && intentos < intentosTotales)

// checkeo si el jugador gano o se le agotaron los intentos
if (numIntentado === numParaAdivinar) {
  alert('Felicitaciones! adivinaste el número, que era ' + numParaAdivinar)
} else {
  alert('Perdiste! :( El número a adivinar era ' + numParaAdivinar)
}
