import { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

function App() {
  const [count, setCount] = useState(0);

  const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
  });

  client
    .query({
      query: gql`
        query Book {
          books {
            title
            author
            coverPhotoURL
            readingLevel
          }
        }
      `,
    })
    .then((result) => console.log(result));

  return (
    <div className="">
      <p className="text-lg font-bold font-mulish">Hello</p>
    </div>
  );
}

export default App;
