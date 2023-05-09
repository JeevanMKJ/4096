import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SCORES } from '../utils/queries'

const HighScores = () => {
  const { loading, data } = useQuery(QUERY_SCORES)
console.log(data?.scores)
  if (loading) {
      return <div>Loading...</div>;
    }
    
  return (
  
    <div>
      <div>
        {data.scores &&
          data.scores.map((score) => (
            <p>{score.points}</p>
          ))}
      </div>
    </div>
    // <p>Hello</p>
  );
};

export default HighScores;