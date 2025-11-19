import { hotSaleFilter, priceFilter } from './filters';
import getData from './getData';
import renderGoods from './renderGoods';

const filter = () => {
  const minInput = document.getElementById('min');
  const maxInput = document.getElementById('max');
  const discountCheckbox = document.getElementById('discount-checkbox');
  const checkCheckmark = document.querySelector('.filter-check_checkmark');

  minInput.addEventListener('input', () => {
    getData().then((data) => {
      renderGoods(
        priceFilter(
          hotSaleFilter(data, discountCheckbox.checked),
          minInput.value,
          maxInput.value
        )
      );
    });
  });

  maxInput.addEventListener('input', () => {
    getData().then((data) => {
      renderGoods(
        priceFilter(
          hotSaleFilter(data, discountCheckbox.checked),
          minInput.value,
          maxInput.value
        )
      );
    });
  });

  discountCheckbox.addEventListener('change', (event) => {
    if (discountCheckbox.checked) {
      checkCheckmark.classList.add('checked');
    } else {
      checkCheckmark.classList.remove('checked');
    }

    getData().then((data) => {
      renderGoods(
        priceFilter(
          hotSaleFilter(data, discountCheckbox.checked),
          minInput.value,
          maxInput.value
        )
      );
    });
  });
};

export default filter;
