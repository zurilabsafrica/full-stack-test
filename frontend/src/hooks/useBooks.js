import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../api/queries";

const useBooks = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  return { loading, error, data };
};

export default useBooks;
