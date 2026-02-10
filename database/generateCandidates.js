import { faker } from "@faker-js/faker";
import fs from "fs";

const candidates = [];

for (let i = 0; i < 40; i++) {
  candidates.push({
    id: i + 1,
    name: faker.person.fullName(),
    experience: faker.number.int({ min: 1, max: 15 }),
    skills: faker.helpers.arrayElements(
      ["Leadership", "Safety", "Operations", "Sustainability"],
      3
    ),
    crisis_management: faker.number.int({ min: 5, max: 10 }),
    sustainability: faker.number.int({ min: 5, max: 10 }),
    team_motivation: faker.number.int({ min: 5, max: 10 })
  });
}

fs.writeFileSync(
  "database/sample-candidates.json",
  JSON.stringify(candidates, null, 2)
);

console.log("✅ 40 candidates generated");

