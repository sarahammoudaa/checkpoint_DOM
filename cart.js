
function updateCaseNumber(product, price, isIncreasing) {
  const caseInput = document.getElementById(product + '-number');
  let caseNumber = caseInput.value;

  if (isIncreasing) {
    caseNumber = parseInt(caseNumber) + 1;
  } else if (caseNumber > 0) {
    caseNumber = parseInt(caseNumber) - 1;
  }

  caseInput.value = caseNumber;

  // Update case total
  const caseTotal = document.getElementById(product + '-total');
  caseTotal.innerText = caseNumber * price;
  calculateTotal();
}

function getInputvalue(product) {
  const productInput = document.getElementById(product + '-number');
  const productNumber = parseInt(productInput.value);
  return productNumber;
}

function calculateTotal() {
  const phoneTotal = getInputvalue('phone') * 2300;
  const caseTotal = getInputvalue('case') * 23;
  const totalPrice = phoneTotal + caseTotal;
  // Update the total price in the HTML
  document.getElementById('total-price').innerText = totalPrice;
}

document.getElementById('case-plus').addEventListener('click', function() {
  updateCaseNumber('case', 23, true);
});

document.getElementById('case-minus').addEventListener('click', function() {
  updateCaseNumber('case', 23, false);
});

document.getElementById('phone-plus').addEventListener('click', function() {
  updateCaseNumber('phone', 2300, true);
});

document.getElementById('phone-minus').addEventListener('click', function() {
  updateCaseNumber('phone', 2300, false);
});


const likeItem = document.querySelectorAll('.like-item');

likeItem.forEach(function(image) {
  image.addEventListener('click', function() {
    if (image.src.endsWith('like1.png')) {
      image.src = 'images/like2.png';
    } else {
      image.src = 'images/like1.png';
    }
  });
});

// Function to remove an item
function removeItem(product) {
    const productTotal = document.getElementById(product + '-total');
    const productQuantity = document.getElementById(product + '-number').value;
    const productPrice = parseInt(productTotal.innerText);
    const totalPrice = parseInt(document.getElementById('total-price').innerText);
  
    // Calculate the new total price
    const newTotalPrice = totalPrice - productPrice;
  
    // Update the total price in the HTML
    document.getElementById('total-price').innerText = newTotalPrice;
  
    // Reset the quantity and total of the product
    document.getElementById(product + '-number').value = 0;
    productTotal.innerText = 0;
  
    // Hide the product item from the cart
    const productItem = document.querySelector(`.cart-item:nth-child(${product === 'phone' ? 1 : 2})`);
    productItem.style.display = 'none';
  }
  
  // Function to update the quantity of an item
  function updateQuantity(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productQuantity = parseInt(productInput.value);
  
    if (isIncreasing) {
      productQuantity += 1;
    } else if (productQuantity > 0) {
      productQuantity -= 1;
    }
  
    productInput.value = productQuantity;
  
    // Update the product total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productQuantity * price;
  
    // Calculate the total price
    calculateTotal();
  }
  
  // Function to calculate the total price
  function calculateTotal() {
    const phoneTotal = parseInt(document.getElementById('phone-total').innerText);
    const caseTotal = parseInt(document.getElementById('case-total').innerText);
    const totalPrice = phoneTotal + caseTotal;
  
    // Update the total price in the HTML
    document.getElementById('total-price').innerText = totalPrice;
  }
  
  // Add event listeners to the remove buttons
  document.getElementById('remove-phone').addEventListener('click', function() {
    removeItem('phone');
  });
  
  document.getElementById('remove-phone1').addEventListener('click', function() {
    removeItem('case');
  });
  
  document.getElementById('checkout').addEventListener('click', function() {
    alert("Your order has been checked out!")  });

