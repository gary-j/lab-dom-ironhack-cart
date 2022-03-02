// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input[type=number]');
  const subtotalShow = product.querySelector('#cart .subtotal span');
  
  const priceValue = price.textContent;
  const quantityValue = quantity.value;

  const subtotalCalc = priceValue * quantityValue;

  subtotalShow.textContent=subtotalCalc;

  return subtotalCalc;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll('#cart .product');

  let total = 0;

  allProducts.forEach(element => {
      updateSubtotal(element);
      total += Number(element.querySelector('#cart .subtotal span').textContent);
      console.log(element.querySelector('#cart .subtotal span').textContent);
  });

  // allProducts.forEach(element=> {
  //   preTotal = updateSubtotal(element);
  //   total += subtotalCalc;
  // })

  console.log(total);

  // ITERATION 3
  //... your code goes here
  const showTotal = document.querySelector('#total-value span');
  showTotal.textContent = total;
  

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  event.remove();
}

// BOUTONS REMOVE
const buttons = document.querySelectorAll('.btn-remove');
buttons.forEach(button => {
  button.addEventListener('click', function(event) {
    console.log("JAI CLIQUE SUR LE BTN REMOVE : ", button.parentElement.parentElement)
    removeProduct(button.parentElement.parentElement);
  calculateAll();

  })
})

// ITERATION 5

const createButton = document.getElementById('create');

const productToCreate = document.querySelector('tfoot .create-product');
console.log(productToCreate, ' : PRODUCT TO CREATE');

createButton.addEventListener('click', () => createProduct(productToCreate));


function createProduct() {
  //... your code goes here
let inputValue = productToCreate.querySelector('td:first-of-type input').value

  // 1. Je récupère la table
  const tBody = document.querySelector('#cart tbody');
  // 2. Test, je récupère bien les infos de mon new product ?
  console.log(inputValue, ": Custom Product Name");
  // 3. J'insère une nouvelle rangée à ma table
  let newRow = tBody.insertRow(-1);
  // 4. Je lui ajoute la classe 'product',
  // pour que les méthodes la prenne en compte
  newRow.classList.add('product');
  // 5. Je copie le html des row dans ma nouvelle row
  // avec les données de mon nouveau produit
  newRow.innerHTML=`<td class="name">
  <span>${inputValue}</span>
  </td>
  <td class="price">$<span>${productToCreate.querySelector('td:nth-of-type(2) input').value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`;

  // 6. Je clear les inputs
  productToCreate.querySelector('td:first-of-type input').value='';
  productToCreate.querySelector('td:nth-of-type(2) input').value='';

  // 7. Activation du bouton 'remove'
  let removeBtn = newRow.querySelector('.btn-remove')
  console.log(removeBtn, "REMOVE BTN");

  removeBtn.addEventListener('click', function(event) {
    console.log("new BTN REMOVE clik: ", removeBtn.parentElement.parentElement);
    removeProduct(removeBtn.parentElement.parentElement);
  calculateAll();

  })
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

