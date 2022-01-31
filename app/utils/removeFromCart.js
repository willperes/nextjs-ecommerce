function removeFromCart(id) {
    let cartProducts = [];
  
    if (localStorage.hasOwnProperty('cartProducts')) {
      cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    } else {
      return;
    }
  
    /*
      Realizar iteração no array retirado do localStorage, e então remover
      o produto que possui o id informado ao chamar a função removeFromCart(id)
    */
    for (let i = 0; i < cartProducts.length; i++) {
      if (cartProducts[i].id === id) {
        cartProducts.splice(i, 1);
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
        return;
      }
    }
  }
  
  export default removeFromCart;