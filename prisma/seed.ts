import { prisma } from "../src/server/db";

import type { Habit, User } from "@prisma/client";

async function getSeedUser() {
  const user = await prisma.user.findFirst({
    where: { id: "cldtjeasa0000hto6gnkvrqnj" },
  });
  if (!user) throw Error("No users found");
  return user;
}

async function seedHabits(user: User) {
  const seededHabits: Habit[] = [];

  for (let i = 0; i < 10; i++) {
    const seedHabit = {
      name: `Test Habit #${i}`,
      userId: user.id,
    };

    await prisma.habit.create({
      data: seedHabit,
    });
  }

  return seededHabits;
}

async function getHabits(user: User) {
  let habits = await prisma.habit.findMany({
    where: {
      user,
    },
  });

  if (habits.length === 0) habits = await seedHabits(user);
  return habits;
}

async function main() {
  const user = await getSeedUser();
  const habits = await getHabits(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
