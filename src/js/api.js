import axios from 'axios';

export const getSkus = (skus) => {
  const skusArray = skus.split(',').sort(() => (.5 - Math.random()));
  return `${skusArray[0]},${skusArray[1]}`;
}

export const getProducts = (skus) => {
  const sku = skus.split(',');
  axios.post('/blackfriday/preparequestions/', {
    sku1: sku[0],
    sku2: sku[1]
  });
  // const response = axios.get('/p/json/', { params: { skus }});
  return response;
}