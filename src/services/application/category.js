import * as api from "../api/index.js";

function formatCategories(category) {
  const row = {
    label: category.name,
    key: category.id,
  };

  if (category?.sub_category?.length > 0) {
    row.children = category?.sub_category?.map(formatCategories);
  }

  return row;
}

export function getCategories(level) {
  const { loading, error, data } = api.getCategories(level);
  return data?.categories?.map(formatCategories);
}
