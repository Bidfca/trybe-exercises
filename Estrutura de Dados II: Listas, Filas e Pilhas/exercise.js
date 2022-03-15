const parentesesEChaves = ["{", "}", "(", ")", "(", "{", "}", ")"];
const abertos = [];
const par = {
  "}": "{",
  ")": "(",
};
let resultado = false;

for (simbolo of parentesesEChaves) {
  if (simbolo === "{" || simbolo === "(") {
    abertos.push(simbolo);
  } else {
    if (abertos[abertos.length - 1] !== par[simbolo]) {
      resultado = false;
      break;
    }
    abertos.pop();
  }
  resultado = true;
}

console.log(resultado);
