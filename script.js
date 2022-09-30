//exercício - 01

// function adicionaItem(event) {

//     const elementDad = document.getElementById("container");

//     const newElement = document.createElement("article");

//     const newContent = document.createTextNode("Um novo item");
//     newElement.appendChild(newContent);

//     elementDad.insertAdjacentElement("beforeend", newElement);

// };

// function adicionaItem(event) {

//     document.getElementById("container").appendChild(document.createElement("article")).innerHTML = document.createTextNode("Um novo item");

// };

//exercício - 02

function adicionaItem(event) {

    const elementDad = document.getElementById("container");

    const newElement = document.createElement("article");

    //parte referente ao exercício - 02
    newElement.setAttribute("class", "item");
    //newElement.setAttribute("onclick", "removeItem(event)"); //uma solução(quase uma gambiarra pois tem um método específico para atribuição de eventos ao elemento addEventListener())
    newElement.addEventListener("click", removeItem);//cria um evento ao novo elemento

    elementDad.insertAdjacentElement("beforeend", newElement);

};

//buscar resolver
// function adicionaItem(event) {

//     document.querySelector(".container").appendChild(document.createElement("article")).setAttribute("class", "item").addEventListener("click", "removeItem(event)"); 

// };

//exercício - 03

function removeItem(event) {

    event.target.remove();

};







// */*/*/*/*/*/*/*/*/*/* OUTRAS FORMAS */*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*

//todos os exercícios
//função que já vem a remoção do novo intem dentro dela através do novoArticle.onclick
// function adicionaItem(event) {
//     event.preventDefault()
//     const main = document.getElementById("container")
//     const novoArticle = document.createElement("article")
//     //função que remove o novo elemento
//     // novoArticle.onclick = function removeItem(event) {
//     //     event.target.remove()
//     // }
//     //adicionando o evento ao novo item
//     novoArticle.addEventListener("click", removeItem)
//     novoArticle.classList.add("item")
//     novoArticle.innerHTML = "Olá, Mundo"
//     main.appendChild(novoArticle)
//     novoArticle.insertAdjacentElement("beforeend")
// }

// function removeItem(event) {
//     event.target.remove()
// }



//exercício - 03

//solução Bruna Spaniol
// function removeItem(event) {
//     event.target.setAttribute("class", "");
// };