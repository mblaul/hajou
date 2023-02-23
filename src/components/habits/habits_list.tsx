import type { Habit } from "@prisma/client";
import { HabitCard } from "./habit_card";

interface Props {
  habits: Habit[];
}

export const HabitsList = (props: Props) => {
  const { habits } = props;

  return (
    <div className="w-full">
      {habits.map((habit) => {
        return <HabitCard key={habit.id} habit={habit} />;
      })}
    </div>
  );
};
