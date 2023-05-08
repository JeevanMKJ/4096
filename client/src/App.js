import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

import Navigation from "./components/Navigation.js";
import Footer from "./components/FooterComponent.js";
import Game from "./components/GameComponent.js";
import HighScores from "./components/HighScoresComponent.js";
import HowToPlay from "./components/HowToPlayComponent.js";
import Profile from "./components/ProfileComponent.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";


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
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Navigation />
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<Game />}
              />
               <Route 
                path="/highscores" 
                element={<HighScores  />}
              />
                <Route 
                path="/howtoplay" 
                element={<HowToPlay />}
              />
              <Route 
                path="/me" 
                element={<Profile />}
              />
               <Route 
                path="/login" 
                element={<Login />}
              />
              <Route 
                path="/signup" 
                element={<Signup />}
              />
              </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider >
  );
}

export default App;
