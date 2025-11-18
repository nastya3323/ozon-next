export const searchFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    const title = goodsItem.title.toLowerCase();
    return title.includes(value.toLowerCase());
  });
};

export const categoryFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.category === value;
  });
};

export const priceFilter = (goods, min, max) => {
  return goods.filter((goodsItem) => {
    if (!min && !max) {
      return goodsItem;
    } else if (min && max) {
      return goodsItem.price >= +min && goodsItem.price <= +max;
    } else if (min && !max) {
      return goodsItem.price >= +min;
    } else if (!min && max) {
      return goodsItem.price <= +max;
    }
  });
};
