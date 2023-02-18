import { Habit } from "@prisma/client";
import Link from "next/link";
import { Habit as HabitClass } from "../../classes/Habit";

interface Props {
  habit: Habit;
}

export const HabitCard = (props: Props) => {
  const habit = new HabitClass(props.habit);
  return (
    <div className="my-4 max-w-sm rounded-lg bg-gradient-to-r from-orange to-purple p-0.5 shadow">
      <div className="rounded-lg border-4 border-transparent bg-gray p-6">
        <Link href={habit.id}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
            {habit.name} ➡️
          </h5>
        </Link>
        <p className="text-gray-700 dark:text-gray-400 mb-3 font-normal">
          Created at: {habit.createdAt.toLocaleString()}
        </p>
      </div>
    </div>
  );
};
