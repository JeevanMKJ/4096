import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SCORES } from '../utils/queries'

const HighScores = () => {
  const { loading, data } = useQuery(QUERY_SCORES)
  // console.log(data?.scores)


  if (loading) {
    return <div>Loading...</div>;
  }
  const sortedScores = [...data.scores].sort((a, b) => b.points - a.points);
  // console.log(sortedScores)  

  return (

    <div>
      <div className="columns-2 mt-4 font-serif text-gray-700">
        <h4>Player</h4>
        <h4>Scores</h4>
      </div>
      <br></br>
      <div>
        {
          sortedScores.map((score) => (
            <>
              <div className="font-serif columns-2 text-gray-600 text-md">
                <p>{score.player}</p>
                <p>{score.points}</p>
              </div>
            </>
          ))}
      </div>
    </div>
    // <p>Hello</p>
  );
};

export default HighScores;