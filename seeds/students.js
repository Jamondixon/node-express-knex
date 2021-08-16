
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1, name: "Jamon", phase: 1},
        {id: 2, name: "Sam", phase: 3},
        {id: 3, name: "Arielle", phase: 3}
      ]);
    });
};
