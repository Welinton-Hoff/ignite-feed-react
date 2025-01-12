const firstNames = [
  "Sam",
  "Alex",
  "Drew",
  "Casey",
  "Riley",
  "Jamie",
  "Avery",
  "Jesse",
  "Logan",
  "Quinn",
  "Reese",
  "Tatum",
  "Peyton",
  "Skyler",
  "Jordan",
  "Taylor",
  "Morgan",
  "Dakota",
  "Finley",
  "Harper",
  "Tristan",
  "Cameron",
  "Emerson",
  "Kendall",
];

const lastNames = [
  "Doe",
  "Lee",
  "Smith",
  "Brown",
  "Jones",
  "Davis",
  "Lopez",
  "Moore",
  "Perez",
  "Garcia",
  "Miller",
  "Wilson",
  "Taylor",
  "Thomas",
  "Martin",
  "Johnson",
  "Jackson",
  "Williams",
  "Martinez",
  "Gonzalez",
  "Anderson",
  "Thompson",
  "Hernandez",
];

export function useRandomName() {
  function getRandomName(): string {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
  }

  return getRandomName;
}
