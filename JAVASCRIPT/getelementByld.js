/*
    getElementByld -> Trás Um elemento pelo ID 
    getElementByClassName -> Trás TODOS os elementos com essa classe 
    getElementByTagName -> Trás TODOS os elementos com essa TAG
    getElementByName -> Trás TODOS os elementos com esse NAME OBS name são usandos em formularios
    querySelector -> Trás um elmento, o Primeiro que encontrar EX:
    ---> procurar uma class (".main-input ") pode procurar pelo id ('#main-input) // pode selectecion ex ("button.main-input")
    queryselectorALL -> Trás todos os elementos que encontrar    
        EX: const input = document.geElmentByID("main-input") pegando input do html e depois você da um:
        console.log(input) OBS esses elementos são criados de formas iguais no mesmo. 
    OBS lembrando quando eu crio um elemento posso ter um apenas com mesmo nome 
    agora quando é uma class podemos ter varias ex em um h1 em um p em um buttone.tc

*/
 const element=  document.querySelector(".alguma-coissa")
 console.log(element.textContent) // SÓ HTML
 onsole.log(element.innerText)  // LEVA EM CONTA O CSS
 onsole.log(element.innerHTML) // TRÁS TUDO -> PERMITE ADICIONAR HTML 