//exercício - 01

// function adicionaItem(event) {

//     const elementDad = document.getElementById("container");

//     const newElement = document.createElement("article");

//     const newContent = document.createTextNode("Um novo item");
//     newElement.appendChild(newContent);

//     elementDad.insertAdjacentElement("beforeend", newElement);

// };

//exercício - 02

function adicionaItem(event) {

    const elementDad = document.getElementById("container");

    const newElement = document.createElement("article");

    //parte referente ao exercício - 02
    newElement.setAttribute("class", "item");

    elementDad.insertAdjacentElement("beforeend", newElement);

};

//exercício - 03

function removeItem(event) {
       
    event.target.remove();
    
};