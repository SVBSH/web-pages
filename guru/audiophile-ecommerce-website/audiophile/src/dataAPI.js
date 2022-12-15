import data from './data.json';

function getData(id) {
  if (id < 0 || data.length - 1 < id) {
    console.error('Invalid Id set')
    return [];
  }

  return data[id];
}


function getProductByCategory(category) {
  console.log(`Getting ${category} products...`)

  return data.filter(
    product =>
      product.category === category
  );
}


export { getData, getProductByCategory };