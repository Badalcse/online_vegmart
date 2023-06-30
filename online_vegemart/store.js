let cartItems = [];
        let cartTotal = 0;

        function addToCart(product) {
       cartItems.push(product);
        cartTotal += getProductPrice(product);
         updateCart();
        }
        function updateCart() {
        const cartItemsElement = document.getElementById('cart-items');
        const cartTotalElement = document.getElementById('cart-total');
  
         cartItemsElement.innerHTML = '';
         cartItems.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        cartItemsElement.appendChild(li);
        });
  
       cartTotalElement.innerText = cartTotal.toFixed(2);
       }
       function getProductPrice(product) {
  // Implement your logic to fetch the actual price for the product
  // For simplicity, return fixed prices in this example
  switch (product) {
    case 'Apple':
      return 1.99;
      case 'Carrots':
      return 1.99;
      case 'Spinach':
        return 3.99;
        case 'Broccoli':
          return 2.66;
          case 'potato':
            return 2;
            case 'brinja':
              return 2;
              case 'cauliflower':
                return 2;
              case 'papaya':
                return 2;
                case 'grapes':
                  return 2;
                  case 'orange':
                    return 2;
                    case 'pomegranate':
                      return 2;

    case 'Banana':
      return 0.99;
      default:
      return 0;
    
     
  }
}

