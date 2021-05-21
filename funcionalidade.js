function converter() {

    var moeda = Number(document.getElementById('valor').value)

    var opcoes = document.getElementById('moedas').value

    var resultado = document.getElementById('resultado')

    console.log(moeda)

    console.log(opcoes)
    
    switch (opcoes) {
        case "1":
            moeda = moeda * 5.37
            break;

        case "2":
            moeda = moeda * 6.51          
            break;

        case "3":
            moeda = moeda * 7.43      
            break;

        case "4":
            moeda = moeda * 0.051    
            break;

        case "5":
            moeda = moeda * 4.16
            break;

        case "6":
            moeda = moeda * 6.02
            break;

        case "7":
            moeda = moeda * 4.23
            break;
                
        case "8":
            moeda = moeda * 0.83
            break;

        case "9":
            moeda = moeda * 0.061
            break;

        case "10":
            moeda = moeda * 0.76
            break;      

        default:
            break;
    }

    resultado.innerHTML = `${moeda} reais`

}
