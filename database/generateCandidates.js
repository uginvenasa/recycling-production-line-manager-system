import { faker } from '@faker-js/faker';
import fs from 'fs';

const candidates = [];

const skillPool = [
  'Leadership',
  'Recycling Operations',
  'Safety Management',
  'Sustainability',
  'Team Handling',
  'Quality Control',
  'Machine Supervision'
];

for (let i = 0; i < 40; i++) {
  candidates.push({
    name: faker.person.fullName(),
    experience_years: faker.number.int({ min: 1, max: 15 }),
    skills: faker.helpers.arrayElements(skillPool, 3).join(', ')
  });
}

fs.writeFileSync(
  'sample-candidates.json',
  JSON.stringify(candidates, null, 2)
);

console.log('✅ 40 candidates generated');
