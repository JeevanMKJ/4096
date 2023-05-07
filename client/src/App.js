import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

import Navigation from "./components/Navigation.js";
import FooterComponent from "./components/FooterComponent.js";


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client} className='bg-sweater'>
      <Navigation />
      <FooterComponent />
    </ApolloProvider >
  );
}

export default App;
