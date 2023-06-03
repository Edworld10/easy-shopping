/*
    CONTROLADOR DE FLUXO 
    - IF(SE) ---->  
    - ELSE (SE NAO) OBS ELSE NÃO PRECISA DE CONDIÇÃO ELE SEMPRE VAI ENTRAR QUANDO O IF FOR FALSE  

    OPERADORES DE COMPARAÇÃO 
    > MAIOR QUE 
    < MENOR QUE  
    == IGUAL QUE 
*/

const notaDoAluno = 7
const notaDeCorte = 5

if (notaDoAluno > notaDeCorte ) {
    // O QUE SERÁ EXECUTADO, O SE IF FOR VERDADEIRO
    console.log("Parabéns, você passou de ano")
    
} else { 
    // SE O IF FOR FALSO, ELE ENTRA AQUI 
    console.log("Você se lascou meu amigo")
}