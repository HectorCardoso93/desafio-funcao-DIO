// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador
let heroi = "HectorMilGrau";
let vitorias = 45;
let derrotas = 10;

// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
let [saldoVitoria, nivelHeroi] = Rankeadas(vitorias,derrotas);

function Rankeadas(vit, der){
    let totalVitorias = vit - der;
    let nivel = "";

    // Se vitórias for menor do que 10 = Ferro
    // Se vitórias for entre 11 e 20 = Bronze
    // Se vitórias for entre 21 e 50 = Prata
    // Se vitórias for entre 51 e 80 = Ouro
    // Se vitórias for entre 81 e 90 = Diamante
    // Se vitórias for entre 91 e 100= Lendário
    // Se vitórias for maior ou igual a 101 = Imortal
    
    switch(true){
        case (totalVitorias <= 10):
            nivel = "Ferro";
            break;
        case (totalVitorias >= 11 && totalVitorias <= 20):
            nivel = "Bronze";
            break;
        case (totalVitorias >= 21 && totalVitorias <= 50):
            nivel = "Prata";
            break;
        case (totalVitorias >= 51 && totalVitorias <= 80):
            nivel = "Ouro";
            break;
        case (totalVitorias >= 81 && totalVitorias <= 90):
            nivel = "Diamante";
            break;
        case (totalVitorias >= 91 && totalVitorias <= 100):
            nivel = "Lendário";
            break;
        case (totalVitorias >= 101):
            nivel = "Imortal";
            break;
        default:
            nivel = null;
            console.log("Valor inválido");
            break;
    }
    return [totalVitorias,nivel]
}

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
console.log(`O Herói ${heroi} tem saldo de ${saldoVitoria} está no nível de ${nivelHeroi}`)