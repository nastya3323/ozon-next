const cart = () => {
  const cartBtn = document.getElementById('cart');
  const cartModal = document.querySelector('.cart');
  const cartCloseBtn = cartModal.querySelector('.cart-close');

  const openCart = () => {
    cartModal.style.display = 'flex';
  };

  const closeCart = () => {
    cartModal.style.display = '';
  };

  cartBtn.addEventListener('click', (event) => {
    event.preventDefault();
    openCart();
  });

  cartCloseBtn.addEventListener('click', closeCart);
};

export default cart;
