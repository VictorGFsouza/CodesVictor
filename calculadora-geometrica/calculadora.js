function calcularAreaTriangulo(){
    const base= prompt ("Informe a base do triângulo:")
    const altura= prompt ("Informe a altura do triângulo:")
    return base * altura / 2 
}

function calcuraAreaRetangulo(){
    const base= prompt ("Informe a base do retângulo:")
    const altura= prompt ("Informe a altura do retângulo:")   
    return base * altura / 2 
}

function calcuraAreaQuadrado(){
    const lado= prompt ("Informe o lado do quadrado:")
    return lado * lado 
}

function calcuraAreaTrapezio(){
    const baseMaior= parseFloat(prompt ("Informe a base maior do trapezio:"))
    const baseMenor= parseFloat(prompt ("Informe a base menor do trapezio:"))
    const altura= prompt ("Informe a altura do trapezio:")
    return (baseMaior + baseMenor) * altura / 2
}

function calcularAreaCirculo(){
    const raio= prompt ("Informe o raio do circulo:")   
    return 3.14 * (raio * raio) 
}

function exibirMenu() {
    return prompt(
        "Calculadora Geométrica\n" +
        "1. Calcular área do triângulo\n" +
        "2. Calcular área do retângulo\n" +
        "3. Calcular área do quadrado\n" +
        "4. Calcular área do trapezio\n" +
        "5. Calcular área do circulo\n" +
        "6. Sair\n"
    )
}

function executar() {
    let opcao= ""

    do{
        opcao = exibirMenu()
        let resultado

        switch (opcao) {
            case "1": 
                resultado = calcularAreaTriangulo ()
                break;
            case "2": 
                resultado = calcuraAreaRetangulo ()
                break;
            case "3": 
                resultado = calcuraAreaQuadrado ()
                break;
            case "4": 
                resultado = calcuraAreaTrapezio ()
                break;
            case "5": 
                resultado = calcularAreaCirculo ()
                break;
            case "6": 
                alert("Saindo....")
                break;
            case "1": 
                resultado = calcularAreaTriangulo
                break;
        
            default:
                alert("Opção inválida!")
                break;
        }

        if(resultado) {
            alert("Resultado: " + resultado)
        }
    } while (opcao !=="6")
}

executar()