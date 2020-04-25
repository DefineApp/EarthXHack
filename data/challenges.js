export default {
  1: {
    id: 1,
    name: 'Earth Day 2020',
    description: "Let's show Planet Earth that we care!",
    startDate: new Date('2020-04-22'),
    endDate: new Date('2020-04-29'),
    tags: ['environment', 'earth day', 'green'],
    logoUrl: '',
    type: 'environment',
    totalTasks: 10,
    tasks: [
      {
        name: 'Pick up 50 pieces of trash from the floor.',
        description: "Submit a time-lapse video of you going around your neighbourhood and picking up 50 pieces of trash and throwing them in the garbage, where they belong! Make sure to take proper measures with trash on the ground: use latex gloves and make sure to thoroughly wash your hands after you're done!"
      }
    ]
  },
  2: {
    id: 2,
    name: 'Energy Savers',
    description: "Sustainable consumption starts with saving energy.",
    startDate: new Date('2020-04-21'),
    endDate: new Date('2020-04-23'),
    tags: ['energy', 'efficiency'],
    logoUrl: '',
    type: 'energy',
    totalTasks: 14
  },
  3: {
    id: 3,
    name: 'Water Watchers',
    description: "Saving water, one tap at a time.",
    startDate: new Date('2020-04-23'),
    endDate: new Date('2020-04-26'),
    tags: ['water', 'efficiency'],
    logoUrl: '',
    type: 'water',
    totalTasks: 13
  },
  4: {
    id: 4,
    name: 'The 2nd R: Reuse',
    description: "Utilizing creativity to help keep waste out of landfills.",
    startDate: new Date('2020-04-23'),
    endDate: new Date('2020-04-27'),
    tags: ['recycling', 'efficiency'],
    logoUrl: '',
    type: 'recycling',
    totalTasks: 15
  }
};
