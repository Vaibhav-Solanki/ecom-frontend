import * as api from "../api/index.js";

export function formatProducts(product) {
  return {
    ...product,
    brand: product?.brand?.name,
    product_images: product?.product_images?.map((image) => image?.url),
    thumbnail: product?.product_images[0].url,
  };
}

export function getProducts() {
  const [getData, { loading, error, data }] = api.getProducts();

  return {
    getData,
    loading,
    error,
    found: data?.products?.found,
    products: data?.products?.products?.map(formatProducts) || [],
  };
}
