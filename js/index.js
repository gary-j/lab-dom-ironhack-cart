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

// test
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
console.log(productToCreate, ' : PRODUC TO CREATE');

createButton.addEventListener('click', () => createProduct(productToCreate));


function createProduct() {
  //... your code goes here
  const tBody = document.querySelector('#cart tbody');
console.log(productToCreate.querySelector('td:first-of-type input').value, ": Custom Product Name");
let newRow = tBody.insertRow(-1);
newRow.innerHTML=`<td class="name">
  <span>${productToCreate.querySelector('td:first-of-type input').value}</span>
</td>
<td class="price">$<span>${productToCreate.querySelector('td:nth-of-type(2) input').value}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;

  // let newRow = tBody.insertRow(-1);
  // newRow.insertCell();
 

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

