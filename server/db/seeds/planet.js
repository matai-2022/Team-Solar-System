exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('planets').del()
  await knex('planets').insert([
    {
      id: 1,
      name: 'Mercury',
      order: 1,
      dateDiscovered: 'Unknown',
      dayLength: '176 Earth days',
      yearLength: '88 Earth days',
      planetType: 'Terrestrial',
      atmosphere:
        'thin exosphere composed mostly of oxygen sodium hydrogen and potassium',
      climate: '-180C to 430c ',
      moons: 'None',
      exploration: `The first spacecraft to visit Mercury was NASA's Mariner 10`,
      coolFact:
        'only as wide as the Atlantic Ocean (18 mercuries fit into earth)',
    },

    {
      id: 2,
      name: 'Venus',
      order: 2,
      dateDiscovered: '650 bc by the mayans, they used it to create a calendar',
      dayLength: '243 Earth days',
      yearLength: '225 Earth days',
      planetType: 'Terrestrial',
      atmosphere:
        'The pressure is so intense it is like being under a kilometer of water',
      climate: 'Surface temperature 480c ',
      moons: 'None',
      exploration: `The mariner 2 was one of the first missions to Venus in 1962`,
      coolFact: `Often called Earth's twin because it is similar in size and density. It's the hottest planet at 480c, and known as the morning and evening star (second brightest object in the sky after the moon)`,
    },

    {
      id: 3,
      name: 'Earth',
      order: 3,
      dateDiscovered:
        'The name Earth is at least 1000 years old - germanic in origin, meaning ground',
      dayLength: '24 hours',
      yearLength: '365 Earth days',
      planetType: 'Terrestrial',
      atmosphere:
        'Earth has an atmosphere that consists of 78% nitrogen, 21% oxygen, and 1% other gases such as argon, carbon dioxide, and neon near the surface',
      climate: '-89C to 56C  ',
      moons: 'One',
      exploration: `no known alien space exploration `,
      coolFact:
        'We live here, only planet with 70% of surface covered with water.',
    },

    {
      id: 4,
      name: 'Mars',
      order: 4,
      dateDiscovered: `No planet beyond Earth has been studied as intensely as Mars. Recorded observations of Mars date as far back as the era of ancient Egypt over 4,000 years ago, when they charted the planet's movements in the sky.`,
      dayLength: '24.6 hours',
      yearLength: '687 Earth days',
      planetType: 'Terrestrial',
      atmosphere:
        'The atmosphere is so thin  that the temperature at your feet can be 24 degrees, and 0 degrees at your head ',
      climate: '-153 to 20c',
      moons: 'Two - Phobos & deimos',
      exploration: `NASA has three spacecraft in orbit: Mars Reconnaissance Orbiter, Mars Odyssey, and MAVEN.`,
      coolFact:
        'Currently has two rovers and 6 orbiting space crafts. It is home to the largest volcano in the solar system - Olympus mons, which is 3 times larger than Mt Everest',
    },

    {
      id: 5,
      name: 'Jupiter',
      order: 5,
      dateDiscovered: '1610 Galileo Galilei makes the first observations',
      dayLength: 'Shortest day in the solar system - 10 hours',
      yearLength: '11.86 Earth years',
      planetType: 'Gas giant',
      atmosphere:
        'many layers of clouds - top layer is ammonia ice - mid layer ammonium hydrosulfide crystals - innermost water ice and vapour',
      climate: 'average -110c ',
      moons: '53',
      exploration: `NASA's Juno space craft arrived in the Jovian system in 2016 studying the giant planet from orbit.`,
      coolFact:
        'Has some of the largest moons in the solar system - Europa might be able to sustain life beneath its icy surface. Jupiter is more than twice as large as all the other planets combined. If earth was a 20c coin, Jupiter would be the size of a basketball. Jupiter has a persistent storm called the great red spot which is twice the size of earth!',
    },

    {
      id: 6,
      name: 'Saturn',
      order: 6,
      dateDiscovered: 'Known by the Ancients',
      dayLength: '10.7 hours',
      yearLength: '29 Earth years',
      planetType: 'Gas giant',
      atmosphere: 'Primarily made up of hydrogen',
      climate: 'average -139.15C ',
      moons: '53 confirmed, 29 provisional',
      exploration: `The international Cassini  mission arrived in 2004 and studied Saturn from orbit over 13 years, before being transformed into an atmospheric probe and plunging into the surface in 2017 `,
      coolFact:
        'Has 7 rings thought to be made of broken up comets, asteroids, and shattered moons. 2nd largest planet in the solar system',
    },

    {
      id: 7,
      name: 'Uranus',
      order: 7,
      dateDiscovered:
        '1781 by William Herschel who thought it was a comet or a star',
      dayLength: '17 hours 14 minutes',
      yearLength: '84 Earth years',
      planetType: 'Ice giant',
      atmosphere: `Uranus' atmosphere is mostly hydrogen and helium, with a small amount of methane and traces of water and ammonia. The methane gives Uranus its signature blue color.', climate: 'minimum temperature of -224, even colder than Neptune in some places`,
      moons: '27',
      exploration: `only NASA's Voyager 2 has visited Uranus after a 9 year journey in 1986`,
      coolFact:
        'The first planet found with the aid of a telescope. William Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George III. Instead, the planet was named for Uranus, the Greek god of the sky, as suggested by Johann Bode.',
    },

    {
      id: 8,
      name: 'Neptune',
      order: 8,
      dateDiscovered:
        '1612 it was incorrectly recorded as a fixed star by Galileo - then predicted by Urbain Joseph in 1846 via mathematics ',
      dayLength: '16 hours',
      yearLength: '165 Earth years',
      planetType: 'Ice giant',
      atmosphere: `Neptune's atmosphere is made up mostly of hydrogen and helium with just a little bit of methane. Neptune's neighbor Uranus is a blue-green color due to such atmospheric methane, but Neptune is a more vivid, brighter blue, so there must be an unknown component that causes the more intense color', climate: '-180C to 430c `,
      moons: '14',
      exploration: `1989 voyager 2 is the first and only spacecraft to study the planet. `,
      coolFact:
        'Only planet not discoverable by the naked eye, was predicted by mathematics before its discovery',
    },

    {
      id: 9,
      name: 'Pluto',
      order: 9,
      dateDiscovered: '1930 by Clyde Tombaugh',
      dayLength: '153 hours',
      yearLength: '248 Earth years',
      planetType: 'Dwarf planet',
      atmosphere:
        'Pluto has a thin, tenuous atmosphere that expands when it comes closer to the Sun and collapses as it moves farther away - similar to a comet. The main constituent is molecular nitrogen, though molecules of methane and carbon monoxide have also been detected.',
      climate: 'average temperature -232c ',
      moons: 'five',
      exploration: `In 2015 New Horizons flew past Pluto after 3462 days of traveling, taking images of the dwarf planet. `,
      coolFact:
        'Pluto is the only world (so far) named by an 11-year-old girl. In 1930, Venetia Burney of Oxford, England, suggested to her grandfather that the new discovery be named for the Roman god of the underworld. He forwarded the name to the Lowell Observatory and it was selected.',
    },
  ])
}
