const postData = () => {
  return fetch(
    'https://ozon-test-64b97-default-rtdb.firebaseio.com/goods.json',
    {
      method: 'POST',
      body: JSON.stringify({
        category: 'Игровая приставка',
        hoverImg: 'https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg',
        img: 'https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg',
        price: 50000,
        sale: false,
        title: 'Игровая приставка WoW',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
  ).then((res) => res.json());
};

export default postData;
