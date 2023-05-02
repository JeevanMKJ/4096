import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

//import SignUpLoginInPage from "./pages/SignUpLogInPage";
=======
import Grid from "./components/grid";


const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (

    
=======
  <ApolloProvider client={client}>
    <Grid />
  </ApolloProvider>

  );
}

export default App;
