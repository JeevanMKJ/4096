import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SCORES } from '../utils/queries'

const HighScores = () => {
  const { loading, data } = useQuery(QUERY_SCORES)
// console.log(data?.scores)

  
if (loading) {
      return <div>Loading...</div>;
    }
  const sortedScores = [...data.scores].sort((a,b) => b.points - a.points);
// console.log(sortedScores)  

  return (
  
    <div>
      <div>
        {
          sortedScores.map((score) => (
            <p>{score.points}{score.player}</p>
          ))}
      </div>
    </div>
    // <p>Hello</p>
  );
};

export default HighScores;