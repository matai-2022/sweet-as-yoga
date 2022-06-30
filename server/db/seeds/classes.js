exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('classes').del()
  await knex('classes').insert([
    {
      id: 1,
      name: 'Sweaty As',
      description: 'A very sweaty yoga experience!',
      dateTime: '30 Jun 2022 10:00:00 GMT',
    },
    {
      id: 2,
      name: 'Sleepy As',
      description: 'A very sleepy yoga experience!',
      dateTime: '01 Jul 2022 11:00:00 GMT',
    },
    {
      id: 3,
      name: 'Bendy As',
      description: 'A very bendy yoga experience!',
      dateTime: '01 Jul 2022 15:00:00 GMT',
    },
    {
      id: 4,
      name: 'Inverted As',
      description: 'A very inverted yoga experience!',
      dateTime: '02 Jul 2022 10:30:00 GMT',
    },
    {
      id: 5,
      name: 'Sweaty As',
      description: 'A very sweaty yoga experience!',
      dateTime: '03 Jul 2022 10:00:00 GMT',
    },
    {
      id: 6,
      name: 'Sleepy As',
      description: 'A very sleepy yoga experience!',
      dateTime: '04 Jul 2022 11:00:00 GMT',
    },
    {
      id: 7,
      name: 'Bendy As',
      description: 'A very bendy yoga experience!',
      dateTime: '05 Jul 2022 09:00:00 GMT',
    },
    {
      id: 8,
      name: 'Inverted As',
      description: 'A very inverted yoga experience!',
      dateTime: '06 Jul 2022 10:30:00 GMT',
    },
  ])
}
