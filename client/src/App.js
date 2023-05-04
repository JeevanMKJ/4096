import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Navigation from "./components/Navigation.js";
import FooterComponent from "./components/FooterComponent.js";
<<<<<<< HEAD
import FooterComponent from "./components/FooterComponent.js";
=======
>>>>>>> 1904ba481641a46d2d679126cf152c7f8ad8a3ef

// import SignUpLoginInPage from "./pages/SignUpLogInPage";
// import GameComponent from "./components/GameComponent.js";
// import Grid from "./components/grid";
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
<<<<<<< HEAD

      <FooterComponent />

=======
      <FooterComponent />
>>>>>>> 1904ba481641a46d2d679126cf152c7f8ad8a3ef
    </ApolloProvider>
  );
}

export default App;
