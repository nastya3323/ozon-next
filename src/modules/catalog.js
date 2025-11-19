import renderGoods from './renderGoods';
import getData from './getData';
import { categoryFilter } from './filters';

const catalog = () => {
  const btnCatalog = document.querySelector('.catalog-button > button');
  const catalogModal = document.querySelector('.catalog');
  const catalogModalItems = catalogModal.querySelectorAll('li');

  let isOpen = false;

  btnCatalog.addEventListener('click', () => {
    isOpen = !isOpen;

    if (isOpen) {
      catalogModal.style.display = '';
    } else {
      catalogModal.style.display = 'block';
    }
  });

  catalogModalItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      const text = event.target.textContent;

      getData().then((data) => {
        renderGoods(categoryFilter(data, text));
      });
    });
  });
};

export default catalog;
