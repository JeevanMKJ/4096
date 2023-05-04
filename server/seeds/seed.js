const db = require('../config/connection');
const { User, Scores } = require('../models');
const userSeeds = require('./userSeeds.json');
const scoresSeeds = require('./scoresSeeds.json');

db.once('open', async () => {
  try {
    await Scores.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < scoresSeeds.length; i++) {
      const { _id, player } = await Scores.create(scoresSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: player },
        {
          $addToSet: {
            scores: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
