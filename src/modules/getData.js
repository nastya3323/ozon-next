const getData = () => {
  return fetch(
    'https://ozon-test-64b97-default-rtdb.firebaseio.com/goods.json/'
  ).then((res) => res.json());
};

export default getData;
