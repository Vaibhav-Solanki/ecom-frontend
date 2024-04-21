import * as api from "../api/index.js";

function formatProducts(product) {
  return {
    ...product,
    brand: product?.brand?.name,
    product_images: product?.product_images?.map((image) => image?.url),
    thumbnail: product?.product_images[0].url,
  };
}

export function getProducts(args = {}) {
  const { loading, error, data } = api.getProducts(args);
  return data?.products?.map(formatProducts);
}
