class Carro {
    motor: Motor

    constructor(motor: Motor) {
        this.motor = motor
    }
}

// Se eu altero a classe Motor eu preciso alterar a classe Carro

// class Carro {
//     motor: Motor

//     constructor() {
//         this.motor = new Motor();
//     }
// }

class Motor {
    cilindrada: number

    constructor(cilindrada: number) {
        this.cilindrada = cilindrada
    }
}