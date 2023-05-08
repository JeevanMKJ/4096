import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SCORES } from '../utils/queries'

const HighScores = () => {
  const { data } = useQuery(QUERY_SCORES)
console.log(data.scores[0])

  return (
    <div>
      <div>
        {data.scores &&
          data.scores.map((score) => (
            // <div key={score}>
            //   <div>
            //     <h4>
            //       {score.scores} <br />
            //     </h4>
            //   </div>
            // </div>
            <p>{score.points}</p>
          ))}
      </div>
    </div>
  );
};

export default HighScores;
