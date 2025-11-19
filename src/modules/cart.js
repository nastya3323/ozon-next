import renderCart from './renderCart';
import postData from './postData';

const cart = () => {
  const cartBtn = document.getElementById('cart');
  const cartModal = document.querySelector('.cart');
  const cartCloseBtn = cartModal.querySelector('.cart-close');
  const cartTotal = cartModal.querySelector('.cart-total > span');
  const cartSendBtn = document.querySelector('.cart-confirm');
  const goodsWrapper = document.querySelector('.goods');
  const cartWrapper = document.querySelector('.cart-wrapper');
  const quantity = document.querySelector('.counter');

  let cart = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];

  const openCart = () => {
    cart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [];

    cartModal.style.display = 'flex';

    renderCart(cart);

    cartTotal.textContent = cart.reduce((sum, goodItem) => {
      return sum + goodItem.price;
    }, 0);
  };

  const closeCart = () => {
    cartModal.style.display = '';
  };

  cartBtn.addEventListener('click', (event) => {
    event.preventDefault();
    openCart();
  });

  cartCloseBtn.addEventListener('click', closeCart);

  goodsWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-primary')) {
      const card = event.target.closest('.card');
      const key = card.dataset.key;
      const goods = JSON.parse(localStorage.getItem('goods'));
      cart = localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : [];

      const goodItem = goods.find((good) => {
        return good.id === +key;
      });

      cart.push(goodItem);
      localStorage.setItem('cart', JSON.stringify(cart));
      quantity.textContent = cart.length;
    }
  });

  cartWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-primary')) {
      const card = event.target.closest('.card');
      const key = card.dataset.key;
      cart = localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : [];

      const goodsItem = cart.filter((good) => {
        return good.id !== +key;
      });

      localStorage.setItem('cart', JSON.stringify(goodsItem));

      renderCart(goodsItem);
      quantity.textContent = goodsItem.length;

      cartTotal.textContent = goodsItem.reduce((sum, goodItem) => {
        return sum + goodItem.price;
      }, 0);
    }
  });

  cartSendBtn.addEventListener('click', () => {
    cart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [];

    postData(cart).then(() => {
      localStorage.removeItem('cart');
      renderCart([]);

      cartTotal.textContent = 0;
      quantity.textContent = 0;
    });
  });

  window.addEventListener('load', () => {
    quantity.textContent = cart.length;
  });
};

export default cart;
