import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import * as querySchema from "../schema/query.js";
import * as mutationSchema from "../schema/mutation.js";

export function getCategories(level) {
  return useQuery(querySchema.Categories, {
    variables: { level },
  });
}

export function getProducts({ categoryId, brandId }) {
  return useQuery(querySchema.Products, {
    variables: { categoryId, brandId },
  });
}

export function updateCustomer({ name, picture }) {
  return useMutation(mutationSchema.UpdateCustomer, {
    variables: { name, picture },
  });
}
