const saldo = '9'
const partidasVitoriosas = 9

let nivel

if (partidasVitoriosas < 10) {
  nivel = 'Bronze'
} else if (partidasVitoriosas < 20) {
  nivel = 'Prata'
} else if (partidasVitoriosas < 30) {
  nivel = 'Ouro'
} else if (partidasVitoriosas < 40) {
  nivel = 'Platina'
} else if (partidasVitoriosas < 50) {
  nivel = 'Ascendente'
} else {
  nivel = 'Radiante'
}

console.log(`O Herói tem de saldo ${saldo} vitórias e está no nível ${nivel}`)
