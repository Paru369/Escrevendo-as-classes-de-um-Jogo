


class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        // Mapeamento dos ataques por tipo
        const ataques = {
            mago: "magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken"
        };

        // Obtém o ataque correspondente ao tipo
        const ataque = ataques[this.tipo.toLowerCase()] || "um ataque desconhecido";

        // Exibe a mensagem final
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}


const prompt = require("prompt-sync")({ sigint: true });

let nome = prompt("Nome do herói: ");
let idade = prompt("Idade do herói: ");
let tipo = prompt("Tipo do herói (mago, guerreiro, monge, ninja): ");

const heroi = new Heroi(nome, idade, tipo);

heroi.atacar();