import { gql } from "@apollo/client";

export const UpdateCustomer = gql`
  mutation UpdateCustomer($name: String, $picture: String) {
    updateCustomer(name: $name, picture: $picture) {
      email
      created_at
      id
      name
      picture
      uid
    }
  }
`;
