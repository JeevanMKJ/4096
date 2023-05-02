import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Navigation from "./components/Navigation.js";
import SignUpLoginInPage from "./pages/SignUpLogInPage";

import Grid from "./components/grid";
// import SignUpLoginInPage from "./pages/SignUpLogInPage";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navigation />
      {/* <SignUpLoginInPage /> */}
      {/* <Grid /> */}
    </ApolloProvider>
  );
}

export default App;
