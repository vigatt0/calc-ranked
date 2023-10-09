const name = 'Vigatt0'

const partidasVitoriosas = 15

let nivel = 'Ferro'

let xp = 2500

if (partidasVitoriosas < 10) {
  nivel = 'Ferro'
}

if (xp <= 1000) {
  console.log('Ferro')
  nivel = 'Ferro'
} else if (xp <= 2000) {
  console.log('Bronze')
  nivel = 'Bronze'
} else if (xp <= 5000) {
  console.log('Prata')
  nivel = 'Prata'
} else if (xp <= 7000) {
  console.log('Ouro')
  nivel = 'Ouro'
} else if (xp <= 9000) {
  console.log('Platina')
  nivel = 'Platina'
} else if (xp <= 10000) {
  console.log('Ascendente')
  nivel = 'Ascendente'
} else {
  console.log('Radiante')
  nivel = 'Radiante'
}

console.log(`O Heroi de nome ${name} está no nível ${nivel}`)
