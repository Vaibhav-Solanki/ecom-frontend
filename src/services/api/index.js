import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import * as querySchema from "../schema/query.js";
import * as mutationSchema from "../schema/mutation.js";

export function getCategories(level) {
  return useQuery(querySchema.Categories, {
    variables: { level },
  });
}

export function getCategory(categoryId) {
  return useLazyQuery(querySchema.Category, {
    variables: { categoryId },
  });
}

export function getBrand(brandId) {
  return useLazyQuery(querySchema.Brand, {
    variables: { brandId },
  });
}

export function getProducts() {
  return useLazyQuery(querySchema.Products);
}

export function updateCustomer({ name, picture }) {
  return useMutation(mutationSchema.UpdateCustomer, {
    variables: { name, picture },
  });
}
