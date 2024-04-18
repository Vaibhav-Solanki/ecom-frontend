import { gql } from "@apollo/client";

export const Categories = gql`
  query Categories($level: Int) {
    categories(level: $level) {
      created_at
      description
      id
      name
      parent_category_id
      parent_category {
        created_at
        description
        id
        name
        parent_category_id
        parent_category {
          description
          created_at
          id
          name
          parent_category_id
        }
      }
    }
  }
`;
