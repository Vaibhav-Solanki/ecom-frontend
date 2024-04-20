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
