export default function addToCart(product, size) {
    let cartProducts = [];

    if (localStorage.hasOwnProperty('cartProducts')) {
        cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    }

    for (let i = 0; i < cartProducts.length; i++) {
        let id = product.id;
        if (cartProducts[i].id === id) {
          cartProducts[i].qty = cartProducts[i].qty + 1;
          localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
          return;
        }
      }
    
      cartProducts.push({
        name: product.name,
        id: product.id,
        cost: product.cost,
        size,
        image: product.image,
        qty: 1
      })
      localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
}