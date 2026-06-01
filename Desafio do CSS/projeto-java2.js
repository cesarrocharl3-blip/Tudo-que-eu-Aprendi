//Pricipais Funções usadas:
// ForEach - Para iterar sobre os itens do array e criar os elementos HTML dinamicamente.
// addEventListener - Para adicionar um evento de clique ao botão, permitindo que a função seja executada quando o usuário clicar nele.

const menuOptions = [

    { name: 'X-Salada', price: 30, vegan: false, src: '../imagens/pj2-xsalada' },

    { name: 'X-Bacon', price: 34, vegan: false, src: '../imagens/pj2-xbacon.png' },

    { name: 'X-Bacon Egg', price: 39, vegan: false, src: '../imagens/pj2-bacon-egg.png' },

    { name: 'Monstruoso', price: 50, vegan: false, src: '../imagens/pj2-monstruoso.png' },

    { name: 'Big Vegano', price: 55, vegan: true, src: '../imagens/pj2-monstruoso-vegan.png' },

    { name: 'X-Vegan', price: 45, vegan: true, src: '../imagens/pj2-xvegan.png' },

]

//ForEach

const button1 = document.getElementById('b1');
const list = document.querySelector('ul');
let myList = '';


function mostrarTodos(menu = menuOptions) { // array = menuOptions - Se não for passado nenhum valor para a função, ela usará o menuOptions como padrão

myList = '';  
totalValue.innerHTML = '';
totalValue1.innerHTML = '';

menu.forEach((products) => {
    myList += `
        <li>
            <img class="img-cardapio" src="${products.src}" alt="${products.name}">
            <p class="burger-name">${products.name}</p>
            <p class="price">R$ ${products.price.toFixed(2)}</p>
        </li>
    `;
});

list.innerHTML = myList;
}     

button1.addEventListener('click', () => mostrarTodos());



//Map

const button2 = document.getElementById('b2');

const menu10 = menuOptions.map (value => ({

...value,
price: value.price*0.9

}));


function mapDiscount() {

    myList = '';  
    totalValue.innerHTML = '';                  // limpa o reduce se estiver visível
    totalValue1.innerHTML = '';                  // limpa o reduce se estiver visível

    menu10.forEach((products) => {
  
    myList += `
        <li>
            <img class="img-cardapio" src="${products.src}" alt="${products.name}">
            <p class="burger-name">${products.name}</p>
            <p class="price">R$ ${products.price.toFixed(2)}</p>
        </li>
    `;
});

list.innerHTML = myList;
}     

button2.addEventListener('click', mapDiscount);



// Reduce

const button3 = document.getElementById('b3');
const totalValue = document.getElementById('totalValue');
const totalValue1 = document.getElementById('totalValue1');

function reduce() {

const arrayReduce = menuOptions.reduce ((acc, totalPrice) => {
    
    const soma = acc + totalPrice.price;
     
        return soma;
    
}, 0);

list.innerHTML = '';
totalValue.innerHTML = `Valor total da compra:`;
totalValue1.innerHTML = `R$ ${arrayReduce.toFixed(2)}`


}

button3.addEventListener('click', reduce);


//Filter 

const button4 = document.getElementById('b4');

function filter() {

const veganMenu = menuOptions.filter (value => value.vegan === true);

mostrarTodos(veganMenu)

}

button4.addEventListener('click', filter)