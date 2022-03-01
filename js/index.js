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


}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let total = 0;

  const allProducts = document.querySelectorAll('#cart .product');
  allProducts.forEach(element => {
      updateSubtotal(element);
      // total += subtotalCalc;
  });

  // console.log(allProducts);

  // ITERATION 3
  //... your code goes here

  const totalValue = document.getElementById('total-value');
  totalValue.innerText = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  event.style.display='none';

  // const buttons = document.querySelectorAll('.btn-remove');
  // buttons.forEach(button => {
  //   button.addEventListener('click', () => {
  //     console.log("JAI CLIQUE SUR LE BTN REMOVE")
  //   })
  // })

}

// test
const buttons = document.querySelectorAll('.btn-remove');
buttons.forEach(button => {
  button.addEventListener('click', function(event) {
    console.log("JAI CLIQUE SUR LE BTN REMOVE : ", button.parentElement.parentElement)
    removeProduct(button.parentElement.parentElement);
  })
})

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

