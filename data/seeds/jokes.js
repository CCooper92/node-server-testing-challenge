
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jokes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('jokes').insert([
        {joke: "what", punchline: 'me'},
        {joke: "who", punchline: 'you'},
        {joke: "where", punchline: 'us'}
      ]);
    });
};
