import { priceFilter } from './filters';
import getData from './getData';
import renderGoods from './renderGoods';

priceFilter;
const price = () => {
  const min = document.getElementById('min');
  const max = document.getElementById('max');

  let minValue;
  let maxValue;

  min.addEventListener('input', (event) => {
    minValue = event.target.value;

    getData().then((data) => {
      renderGoods(priceFilter(data, minValue, maxValue));
    });
  });

  max.addEventListener('input', (event) => {
    maxValue = event.target.value;

    getData().then((data) => {
      renderGoods(priceFilter(data, minValue, maxValue));
    });
  });
};

export default price;
