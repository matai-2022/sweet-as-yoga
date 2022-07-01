exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('classes').del()
  await knex('classes').insert([
    {
      id: 1,
      name: 'Sweaty As',
      description: 'A very sweaty yoga experience!',
      dateTime: '2022-06-30 10:00',
    },
    {
      id: 2,
      name: 'Sleepy As',
      description: 'A very sleepy yoga experience!',
      dateTime: '2022-07-01 11:00',
    },
    {
      id: 3,
      name: 'Bendy As',
      description: 'A very bendy yoga experience!',
      dateTime: '2022-07-01 15:00',
    },
    {
      id: 4,
      name: 'Inverted As',
      description: 'A very inverted yoga experience!',
      dateTime: '2022-07-02 10:30',
    },
    {
      id: 5,
      name: 'Sweaty As',
      description: 'A very sweaty yoga experience!',
      dateTime: '2022-07-03 10:00',
    },
    {
      id: 6,
      name: 'Sleepy As',
      description: 'A very sleepy yoga experience!',
      dateTime: '2022-07-04 11:00',
    },
    {
      id: 7,
      name: 'Bendy As',
      description: 'A very bendy yoga experience!',
      dateTime: '2022-07-05 09:00',
    },
    {
      id: 8,
      name: 'Inverted As',
      description: 'A very inverted yoga experience!',
      dateTime: '2022-07-06 10:30',
    },
  ])
}
