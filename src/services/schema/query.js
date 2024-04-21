import { gql } from "@apollo/client";

export const Categories = gql`
  query Categories($level: Int) {
    categories(level: $level) {
      id
      name
      description
      parent_category_id
      created_at
      sub_category {
        id
        name
        description
        parent_category_id
        created_at
        sub_category {
          id
          name
          description
          parent_category_id
          created_at
        }
      }
    }
  }
`;

export const Products = gql`
  query Products($page: PaginationInput, $categoryId: Int, $brandId: Int) {
    products(category_id: $categoryId, brand_id: $brandId) {
      found
      products(page: $page) {
        id
        name
        description
        stock_quantity
        price
        discounted_price
        product_images {
          url
        }
        brand {
          name
        }
      }
    }
  }
`;

export const Category = gql`
  query Category($categoryId: Int!) {
    category(id: $categoryId) {
      id
      name
      description
    }
  }
`;

export const Brand = gql`
  query Brand($brandId: Int!) {
    brand(id: $brandId) {
      id
      name
      description
    }
  }
`;
