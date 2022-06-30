exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('classes').del()
  await knex('classes').insert([
    {
      id: 1,
      name: 'Sweaty As',
      description: 'A very sweaty yoga experience!',
      dateTime: 'June 30th 2022, 4:30:00 pm',
    },
    {
      id: 2,
      name: 'Sleepy As',
      description: 'A very sleepy yoga experience!',
      dateTime: 'July 1st 2022, 10:00:00 am',
    },
    {
      id: 3,
      name: 'Bendy As',
      description: 'A very bendy yoga experience!',
      dateTime: 'July 1st 2022, 3:00:00 pm',
    },
    {
      id: 4,
      name: 'Inverted As',
      description: 'A very inverted yoga experience!',
      dateTime: 'July 2nd 2022, 4:00:00 pm',
    },
    {
      id: 5,
      name: 'Sweaty As',
      description: 'A very sweaty yoga experience!',
      dateTime: 'July 3rd 2022, 4:00:00 pm',
    },
    {
      id: 6,
      name: 'Sleepy As',
      description: 'A very sleepy yoga experience!',
      dateTime: 'July 4th 2022, 4:00:00 pm',
    },
    {
      id: 7,
      name: 'Bendy As',
      description: 'A very bendy yoga experience!',
      dateTime: 'July 5th 2022, 4:00:00 pm',
    },
    {
      id: 8,
      name: 'Inverted As',
      description: 'A very inverted yoga experience!',
      dateTime: 'July 6th 2022, 4:00:00pm',
    },
  ])
}
