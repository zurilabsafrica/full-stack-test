import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query Book {
    books {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;
