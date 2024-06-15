import { ApolloProvider } from "@apollo/client";

import Landing from "./Landing";
import client from "./api/client";

const App = () => (
  <ApolloProvider client={client}>
    {/* This is the landing page for the app */}
    <Landing />
  </ApolloProvider>
);

export default App;
