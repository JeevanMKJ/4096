const db = require('../config/connection');
const { undefined2 } = require('../models');

const techData = require('./techData.json');

db.once('open', async () => {
  await undefined2.deleteMany({});

  const technologies = await undefined2.insertMany(techData);

  console.log('Technologies seeded!');
  process.exit(0);
});
